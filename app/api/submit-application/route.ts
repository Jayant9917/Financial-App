import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CLIENT_EMAIL = 'shivayfinanceandservices@gmail.com';
const DEFAULT_MAIL_FROM = 'Shivay Finance <no-reply@shivayfinanceandservices.com>';

const formatINR = (value: unknown) => {
  const numberValue = Number(value || 0);
  if (Number.isFinite(numberValue)) {
    return `INR ${new Intl.NumberFormat('en-IN').format(numberValue)}`;
  }
  return `INR ${value || '0'}`;
};

const safeText = (value: unknown) => String(value ?? '');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const smtpHost = process.env.SMTP_HOST || 'in-v3.mailjet.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const mailFrom = process.env.MAIL_FROM || DEFAULT_MAIL_FROM;
    const replyTo = safeText(formData.email);

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP is not configured. Please set SMTP_USER and SMTP_PASSWORD.',
          needsEmailSetup: true,
        },
        { status: 500 }
      );
    }

    const sections = [
      {
        title: 'Personal Information',
        rows: [
          ['Name', safeText(formData.fullName)],
          ['Email', safeText(formData.email)],
          ['Phone', safeText(formData.phone)],
          ['Date of Birth', safeText(formData.dateOfBirth)],
          ['PAN Card', safeText(formData.panCard)],
        ],
      },
      {
        title: 'Employment Information',
        rows: [
          ['Employment Type', safeText(formData.employmentType)],
          ['Monthly Income', formatINR(formData.monthlyIncome)],
          ['Company', safeText(formData.company)],
          ['Work Experience', safeText(formData.workExperience)],
        ],
      },
      {
        title: 'Loan Requirements',
        rows: [
          ['Loan Amount', formatINR(formData.loanAmount)],
          ['Loan Type', safeText(formData.loanType)],
          ['Loan Tenure', `${safeText(formData.loanTenure)} years`],
          ['Property Location', safeText(formData.propertyLocation)],
          ['Current EMI', formatINR(formData.currentEMI || 0)],
        ],
      },
      {
        title: 'Address Information',
        rows: [
          ['Address', safeText(formData.address)],
          ['City', safeText(formData.city)],
          ['State', safeText(formData.state)],
          ['Pincode', safeText(formData.pincode)],
        ],
      },
    ];

    const emailContent = `
      NEW HOME LOAN APPLICATION - Shivay Finance and Services
      
      === PERSONAL INFORMATION ===
      Full Name: ${safeText(formData.fullName)}
      Email: ${safeText(formData.email)}
      Phone: ${safeText(formData.phone)}
      Date of Birth: ${safeText(formData.dateOfBirth)}
      PAN Card: ${safeText(formData.panCard)}
      
      === EMPLOYMENT INFORMATION ===
      Employment Type: ${safeText(formData.employmentType)}
      Monthly Income: ${formatINR(formData.monthlyIncome)}
      Company: ${safeText(formData.company)}
      Work Experience: ${safeText(formData.workExperience)}
      
      === LOAN REQUIREMENTS ===
      Loan Amount: ${formatINR(formData.loanAmount)}
      Loan Type: ${safeText(formData.loanType)}
      Loan Tenure: ${safeText(formData.loanTenure)} years
      Property Location: ${safeText(formData.propertyLocation)}
      Current EMI: ${formatINR(formData.currentEMI || 0)}
      
      === ADDRESS INFORMATION ===
      Address: ${safeText(formData.address)}
      City: ${safeText(formData.city)}
      State: ${safeText(formData.state)}
      Pincode: ${safeText(formData.pincode)}
      
      === ADDITIONAL INFORMATION ===
      Message: ${safeText(formData.message) || 'No additional message'}
      
      === SUBMISSION DETAILS ===
      Submitted on: ${new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long',
      })}
      IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
      
      ---
      This is an automated email from Shivay Finance and Services Website
      Please contact the applicant within 24 hours
    `;

    try {
      const fs = require('fs').promises;
      const path = require('path');

      const applicationsDir = path.join(process.cwd(), 'applications');
      await fs.mkdir(applicationsDir, { recursive: true });

      const safeName = String(formData.fullName || 'application').replace(/[^a-z0-9-]+/gi, '-');
      const filename = `loan-application-${Date.now()}-${safeName}.txt`;
      const filepath = path.join(applicationsDir, filename);

      await fs.writeFile(filepath, emailContent);
      console.log('Application saved to:', filepath);
    } catch (fileError) {
      console.error('Failed to save application to file:', fileError);
    }

    console.log('='.repeat(60));
    console.log('NEW LOAN APPLICATION RECEIVED');
    console.log('='.repeat(60));
    console.log('Client Email(s):', CLIENT_EMAIL);
    console.log('Applicant:', formData.fullName);
    console.log('Phone:', formData.phone);
    console.log('Email:', formData.email);
    console.log('Loan Amount:', formData.loanAmount);
    console.log('Submitted at:', new Date().toLocaleString('en-IN'));
    console.log('='.repeat(60));

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.verify();
      console.log('SMTP server connection verified');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        {
          success: false,
          message: 'SMTP verification failed. Please check your Mailjet settings.',
          savedToFile: true,
          emailSent: false,
          emailMethod: 'SMTP',
          emailError: (verifyError as any)?.message || 'SMTP verification failed',
          needsEmailSetup: true,
        },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: mailFrom,
      to: CLIENT_EMAIL,
      replyTo,
      subject: `New loan enquiry from ${safeText(formData.fullName)}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f3f4f6; padding:24px; color:#111827;">
          <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden; box-shadow:0 12px 30px rgba(15,23,42,0.08);">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color:#fff; padding:28px 24px; text-align:center;">
              <div style="font-size:26px; font-weight:700; line-height:1.2;">New Loan Application</div>
              <div style="margin-top:8px; font-size:14px; opacity:0.92;">Shivay Finance and Services</div>
            </div>

            <div style="padding:24px;">
              <div style="background:#ecfeff; border:1px solid #a5f3fc; color:#155e75; border-radius:12px; padding:14px 16px; margin-bottom:20px; font-size:14px; line-height:1.5;">
                <strong>Action required:</strong> Please contact the applicant within 24 hours.
              </div>

              ${sections
                .map(
                  (section) => `
                    <div style="background:#f9fafb; border:1px solid #eef2f7; border-radius:14px; padding:18px 18px 8px; margin-bottom:16px;">
                      <div style="font-size:18px; font-weight:700; color:#1f2937; margin-bottom:12px;">${section.title}</div>
                      ${section.rows
                        .map(
                          ([label, value]) => `
                            <div style="display:flex; gap:12px; padding:7px 0; border-top:1px solid #eef2f7; font-size:14px; line-height:1.45;">
                              <div style="min-width:170px; font-weight:700; color:#374151;">${label}</div>
                              <div style="flex:1; color:#111827; word-break:break-word;">${value || 'N/A'}</div>
                            </div>
                          `
                        )
                        .join('')}
                    </div>
                  `
                )
                .join('')}

              ${safeText(formData.message)
                ? `
                  <div style="background:#f9fafb; border:1px solid #eef2f7; border-radius:14px; padding:18px; margin-bottom:16px;">
                    <div style="font-size:18px; font-weight:700; color:#1f2937; margin-bottom:12px;">Additional Information</div>
                    <div style="font-size:14px; line-height:1.6; color:#111827; white-space:pre-wrap;">${safeText(formData.message)}</div>
                  </div>
                `
                : ''}

              <div style="margin-top:20px; padding-top:16px; border-top:1px solid #e5e7eb; font-size:12px; color:#6b7280; line-height:1.6; text-align:center;">
                <div>Submitted on: ${new Date().toLocaleString('en-IN', {
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'long',
                })}</div>
                <div>IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}</div>
                <div>This is an automated email from Shivay Finance and Services Website</div>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully via SMTP');
      console.log('Message ID:', result.messageId);
    } catch (smtpError) {
      console.error('Error sending via SMTP:', smtpError);
      return NextResponse.json(
        {
          success: false,
          message: 'Application was received, but email delivery failed.',
          savedToFile: true,
          emailSent: false,
          emailMethod: 'SMTP',
          emailError: (smtpError as any)?.message || 'Unknown SMTP error',
          needsEmailSetup: false,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully! You will receive an email shortly via Mailjet.',
      applicationId: `APP-${Date.now()}`,
      savedToFile: true,
      emailSent: true,
      emailMethod: 'SMTP',
      emailError: null,
      clientEmail: CLIENT_EMAIL,
      needsEmailSetup: false,
    });
  } catch (error) {
    console.error('Error processing loan application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

