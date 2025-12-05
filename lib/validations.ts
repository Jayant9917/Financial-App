/**
 * Validation schemas and utilities
 * Use this for form validation and API request validation
 */

// Example validation functions - you can expand these
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateLoanAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 10000000; // Adjust max as needed
};

export const validateInterestRate = (rate: number): boolean => {
  return rate >= 0 && rate <= 30; // 0-30% range
};

export const validateLoanTerm = (term: number): boolean => {
  return term >= 1 && term <= 30; // 1-30 years
};

