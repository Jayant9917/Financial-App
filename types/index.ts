/**
 * Global TypeScript type definitions
 */

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Loan Calculator types
export interface LoanCalculatorRequest {
  loanAmount: number;
  interestRate: number;
  loanTerm: number; // in years
  downPayment?: number;
}

export interface LoanCalculatorResponse {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortizationSchedule?: AmortizationEntry[];
}

export interface AmortizationEntry {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

// Loan Application types
export interface LoanApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanAmount: number;
  propertyValue: number;
  employmentStatus: string;
  annualIncome: number;
  creditScore?: number;
  additionalInfo?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

