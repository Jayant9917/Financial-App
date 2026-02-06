'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AnimatedSection } from '@/components/animated-section';
import { User, Briefcase, DollarSign, Home, MapPin, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

const loanApplicationSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  panCard: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter a valid PAN card number'),
  employmentType: z.string().min(1, 'Please select employment type'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  workExperience: z.string().min(1, 'Please select work experience'),
  loanAmount: z.string().min(1, 'Loan amount is required'),
  loanType: z.string().min(1, 'Please select loan type'),
  loanTenure: z.string().min(1, 'Please select loan tenure'),
  propertyLocation: z.string().min(5, 'Property location must be at least 5 characters'),
  propertyValue: z.string().min(1, 'Property value is required'),
  currentEMI: z.string().optional(),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  pincode: z.string().regex(/^\d{6}$/, 'Please enter a valid 6-digit pincode'),
  message: z.string().optional(),
});

type LoanApplicationForm = z.infer<typeof loanApplicationSchema>;

export function LoanApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LoanApplicationForm>({
    resolver: zodResolver(loanApplicationSchema),
  });

  const onSubmit = async (data: LoanApplicationForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Loan Application Submitted successfully:', result);
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      // You can show an error message to the user here
      alert('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <AnimatedSection className="w-full">
        <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-green-50 to-white">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-green-600 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your loan application. Our team will review your details and contact you within 24 hours.
            </p>
            <div className="bg-green-100 p-4 rounded-lg text-left max-w-md mx-auto">
              <p className="text-sm font-medium text-green-800 mb-2">Next Steps:</p>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Our loan officer will call you for verification</li>
                <li>• Required documents will be shared via email</li>
                <li>• Application processing within 2-3 working days</li>
              </ul>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-green-600 hover:bg-green-700"
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="w-full">
      <Card className="w-full shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        
        <CardHeader className="text-center pb-8 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
              <FileText className="h-10 w-10 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900 mb-3">
            Loan Application Form
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 max-w-md mx-auto">
            Fill in your details to apply for a home loan
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-8 relative z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Personal Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input
                    id="fullName"
                    autoComplete="name"
                    {...register('fullName')}
                    placeholder="Enter your full name"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    placeholder="your.email@example.com"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Mobile Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    {...register('phone')}
                    placeholder="9876543210"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">Date of Birth *</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    autoComplete="bday"
                    {...register('dateOfBirth')}
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.dateOfBirth ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.dateOfBirth && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="panCard" className="text-sm font-medium text-gray-700">PAN Card Number *</Label>
                  <Input
                    id="panCard"
                    autoComplete="off"
                    {...register('panCard')}
                    placeholder="ABCDE1234F"
                    className="h-12 text-base uppercase border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.panCard && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.panCard.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Employment Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Employment Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="employmentType" className="text-sm font-medium text-gray-700">Employment Type *</Label>
                  <div id="employmentType">
                    <Select 
                      name="employmentType"
                      onValueChange={(value: string) => setValue('employmentType', value)}
                    >
                      <SelectTrigger className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.employmentType ? 'border-red-500 ring-red-500' : ''}`}>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="salaried">Salaried</SelectItem>
                        <SelectItem value="self-employed">Self Employed</SelectItem>
                        <SelectItem value="business">Business Owner</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.employmentType && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.employmentType.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="monthlyIncome" className="text-sm font-medium text-gray-700">Monthly Income (₹) *</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    autoComplete="off"
                    {...register('monthlyIncome')}
                    placeholder="50000"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.monthlyIncome ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.monthlyIncome && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.monthlyIncome.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name *</Label>
                  <Input
                    id="company"
                    autoComplete="organization"
                    {...register('company')}
                    placeholder="Your company name"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.company ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.company && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.company.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="workExperience" className="text-sm font-medium text-gray-700">Work Experience *</Label>
                  <div id="workExperience">
                    <Select 
                      name="workExperience"
                      onValueChange={(value: string) => setValue('workExperience', value)}
                    >
                      <SelectTrigger className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.workExperience ? 'border-red-500 ring-red-500' : ''}`}>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 Year</SelectItem>
                        <SelectItem value="1-3">1-3 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="5-10">5-10 Years</SelectItem>
                        <SelectItem value="10+">10+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.workExperience && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.workExperience.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Loan Requirements */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Loan Requirements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="loanAmount" className="text-sm font-medium text-gray-700">Loan Amount Required (₹) *</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    autoComplete="off"
                    {...register('loanAmount')}
                    placeholder="1000000"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.loanAmount ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.loanAmount && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.loanAmount.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="loanType" className="text-sm font-medium text-gray-700">Loan Type *</Label>
                  <div id="loanType">
                    <Select 
                      name="loanType"
                      onValueChange={(value: string) => setValue('loanType', value)}
                    >
                      <SelectTrigger className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.loanType ? 'border-red-500 ring-red-500' : ''}`}>
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-purchase">Home Purchase</SelectItem>
                        <SelectItem value="home-construction">Home Construction</SelectItem>
                        <SelectItem value="plot-purchase">Plot Purchase</SelectItem>
                        <SelectItem value="loan-against-property">Loan Against Property</SelectItem>
                        <SelectItem value="balance-transfer">Balance Transfer</SelectItem>
                        <SelectItem value="top-up">Top-up Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.loanType && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.loanType.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="loanTenure" className="text-sm font-medium text-gray-700">Loan Tenure *</Label>
                  <div id="loanTenure">
                    <Select 
                      name="loanTenure"
                      onValueChange={(value: string) => setValue('loanTenure', value)}
                    >
                      <SelectTrigger className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.loanTenure ? 'border-red-500 ring-red-500' : ''}`}>
                        <SelectValue placeholder="Select tenure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Years</SelectItem>
                        <SelectItem value="10">10 Years</SelectItem>
                        <SelectItem value="15">15 Years</SelectItem>
                        <SelectItem value="20">20 Years</SelectItem>
                        <SelectItem value="25">25 Years</SelectItem>
                        <SelectItem value="30">30 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {errors.loanTenure && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.loanTenure.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="propertyValue" className="text-sm font-medium text-gray-700">Property Value (₹) *</Label>
                  <Input
                    id="propertyValue"
                    type="number"
                    autoComplete="off"
                    {...register('propertyValue')}
                    placeholder="1500000"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.propertyValue ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.propertyValue && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.propertyValue.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="propertyLocation" className="text-sm font-medium text-gray-700">Property Location *</Label>
                  <Input
                    id="propertyLocation"
                    autoComplete="off"
                    {...register('propertyLocation')}
                    placeholder="City, State"
                    className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.propertyLocation ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.propertyLocation && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.propertyLocation.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="currentEMI" className="text-sm font-medium text-gray-700">Current EMI (if any)</Label>
                  <Input
                    id="currentEMI"
                    type="number"
                    autoComplete="off"
                    {...register('currentEMI')}
                    placeholder="0"
                    className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Address Information</h3>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="address" className="text-sm font-medium text-gray-700">Full Address *</Label>
                  <Textarea
                    id="address"
                    autoComplete="off"
                    {...register('address')}
                    placeholder="Enter your complete address"
                    rows={3}
                    className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none ${errors.address ? 'border-red-500 ring-red-500' : ''}`}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.address.message}
                    </p>
                  )}
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="city" className="text-sm font-medium text-gray-700">City *</Label>
                    <Input
                      id="city"
                      autoComplete="off"
                      {...register('city')}
                      placeholder="City"
                      className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.city ? 'border-red-500 ring-red-500' : ''}`}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="state" className="text-sm font-medium text-gray-700">State *</Label>
                    <Input
                      id="state"
                      autoComplete="off"
                      {...register('state')}
                      placeholder="State"
                      className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.state ? 'border-red-500 ring-red-500' : ''}`}
                    />
                    {errors.state && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.state.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pincode *</Label>
                    <Input
                      id="pincode"
                      type="text"
                      autoComplete="postal-code"
                      {...register('pincode')}
                      placeholder="123456"
                      className={`h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${errors.pincode ? 'border-red-500 ring-red-500' : ''}`}
                    />
                    {errors.pincode && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.pincode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</Label>
                <Textarea
                  id="message"
                  autoComplete="off"
                  {...register('message')}
                  placeholder="Any additional information or requirements..."
                  rows={4}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Submitting Application...
                  </div>
                ) : (
                  'Submit Loan Application'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
