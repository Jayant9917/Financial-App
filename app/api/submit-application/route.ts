import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Get client email from environment variables
    const clientEmail = process.env.CLIENT_EMAIL || 'ranajayant527@gmail.com';
    
    // Formspree Configuration (Priority)
    const formId = process.env.FORMSPREE_ID;
    
    // SMTP Configuration (Fallback)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    
    // Format the email content
    const emailContent = `
      NEW HOME LOAN APPLICATION - Shivay Finance and Services
      
      === PERSONAL INFORMATION ===
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Date of Birth: ${formData.dateOfBirth}
      PAN Card: ${formData.panCard}
      
      === EMPLOYMENT INFORMATION ===
      Employment Type: ${formData.employmentType}
      Monthly Income: ₹${formData.monthlyIncome}
      Company: ${formData.company}
      Work Experience: ${formData.workExperience}
      
      === LOAN REQUIREMENTS ===
      Loan Amount: ₹${formData.loanAmount}
      Loan Type: ${formData.loanType}
      Loan Tenure: ${formData.loanTenure} years
      Property Value: ₹${formData.propertyValue}
      Property Location: ${formData.propertyLocation}
      Current EMI: ₹${formData.currentEMI || '0'}
      
      === ADDRESS INFORMATION ===
      Address: ${formData.address}
      City: ${formData.city}
      State: ${formData.state}
      Pincode: ${formData.pincode}
      
      === ADDITIONAL INFORMATION ===
      Message: ${formData.message || 'No additional message'}
      
      === SUBMISSION DETAILS ===
      Submitted on: ${new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })}
      IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}
      
      ---
      This is an automated email from Shivay Finance and Services Website
      Please contact the applicant within 24 hours
    `;

    // Save application to file system (backup)
    try {
      const fs = require('fs').promises;
      const path = require('path');
      
      const applicationsDir = path.join(process.cwd(), 'applications');
      await fs.mkdir(applicationsDir, { recursive: true });
      
      const filename = `loan-application-${Date.now()}-${formData.fullName.replace(/\s+/g, '-')}.txt`;
      const filepath = path.join(applicationsDir, filename);
      
      await fs.writeFile(filepath, emailContent);
      console.log('Application saved to:', filepath);
    } catch (fileError) {
      console.error('Failed to save application to file:', fileError);
    }

    // Log to console for immediate access
    console.log('='.repeat(60));
    console.log('NEW LOAN APPLICATION RECEIVED');
    console.log('='.repeat(60));
    console.log('Client Email:', clientEmail);
    console.log('Applicant:', formData.fullName);
    console.log('Phone:', formData.phone);
    console.log('Email:', formData.email);
    console.log('Loan Amount:', formData.loanAmount);
    console.log('Submitted at:', new Date().toLocaleString('en-IN'));
    console.log('='.repeat(60));

    // Try to send email via Formspree (Priority)
    let emailSent = false;
    let emailMethod = '';
    let emailError = null;
    
    if (formId) {
      try {
        const formspreeResponse = await fetch(`https://formspree.io/f/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            subject: `🏠 New Loan Application - ${formData.fullName}`,
            message: emailContent,
            _replyto: formData.email,
            _subject: `New Loan Application - ${formData.fullName}`,
            loanAmount: formData.loanAmount,
            loanType: formData.loanType,
            employmentType: formData.employmentType,
            city: formData.city,
            applicationId: `APP-${Date.now()}`
          }),
        });

        if (formspreeResponse.ok) {
          emailSent = true;
          emailMethod = 'Formspree';
          console.log('✅ Email sent successfully via Formspree');
        } else {
          console.log('⚠️ Formspree submission failed:', formspreeResponse.statusText);
        }
      } catch (formspreeError) {
        console.log('⚠️ Error sending via Formspree:', formspreeError);
      }
    }
    
    // Fallback to SMTP if Formspree fails
    if (!emailSent && smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        await transporter.verify();
        console.log('✅ SMTP server connection verified');

        const mailOptions = {
          from: `"Shivay Finance" <${smtpUser}>`,
          to: clientEmail,
          subject: `🏠 New Loan Application - ${formData.fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px;">🏠 New Loan Application</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Shivay Finance and Services</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">👤 Personal Information</h2>
                <p><strong>Name:</strong> ${formData.fullName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
                <p><strong>PAN Card:</strong> ${formData.panCard}</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">💼 Employment Information</h2>
                <p><strong>Employment Type:</strong> ${formData.employmentType}</p>
                <p><strong>Monthly Income:</strong> ₹${formData.monthlyIncome}</p>
                <p><strong>Company:</strong> ${formData.company}</p>
                <p><strong>Work Experience:</strong> ${formData.workExperience}</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">💰 Loan Requirements</h2>
                <p><strong>Loan Amount:</strong> ₹${formData.loanAmount}</p>
                <p><strong>Loan Type:</strong> ${formData.loanType}</p>
                <p><strong>Loan Tenure:</strong> ${formData.loanTenure} years</p>
                <p><strong>Property Value:</strong> ₹${formData.propertyValue}</p>
                <p><strong>Property Location:</strong> ${formData.propertyLocation}</p>
                <p><strong>Current EMI:</strong> ₹${formData.currentEMI || '0'}</p>
              </div>
              
              <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">📍 Address Information</h2>
                <p><strong>Address:</strong> ${formData.address}</p>
                <p><strong>City:</strong> ${formData.city}</p>
                <p><strong>State:</strong> ${formData.state}</p>
                <p><strong>Pincode:</strong> ${formData.pincode}</p>
              </div>
              
              ${formData.message ? `
              <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h2 style="color: #333; margin-top: 0;">📝 Additional Information</h2>
                <p>${formData.message}</p>
              </div>
              ` : ''}
              
              <div style="background: #fff3cd; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #ffc107;">
                <p style="margin: 0; color: #856404;"><strong>⚡ Action Required:</strong> Please contact the applicant within 24 hours.</p>
              </div>
              
              <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
                <p>Submitted on: ${new Date().toLocaleString('en-IN', { 
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
                <p>IP Address: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'}</p>
                <p>This is an automated email from Shivay Finance and Services Website</p>
              </div>
            </div>
          `,
        };

        const result = await transporter.sendMail(mailOptions);
        emailSent = true;
        emailMethod = 'SMTP';
        console.log('✅ Email sent successfully via SMTP');
        console.log('Message ID:', result.messageId);
        
      } catch (smtpError) {
        emailError = smtpError;
        console.log('⚠️ Error sending via SMTP:', smtpError);
      }
    }

    if (!emailSent) {
      console.log('ℹ️ No email service configured - add FORMSPREE_ID or SMTP credentials to .env.local');
    }

    return NextResponse.json({ 
      success: true, 
      message: emailSent 
        ? `Application submitted successfully! You will receive an email shortly via ${emailMethod}.` 
        : 'Application submitted successfully! We will contact you within 24 hours.',
      applicationId: `APP-${Date.now()}`,
      savedToFile: true,
      emailSent: emailSent,
      emailMethod: emailMethod,
      emailError: (emailError as any)?.message,
      clientEmail: clientEmail,
      needsEmailSetup: !formId && (!smtpHost || !smtpUser || !smtpPass)
    });

  } catch (error) {
    console.error('Error processing loan application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}
