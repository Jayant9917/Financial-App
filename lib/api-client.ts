/**
 * API client utilities
 * Centralized API request handling
 */

import { ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function apiRequest<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'An error occurred',
        message: data.message,
      };
    }

    return {
      success: true,
      data: data.data || data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    };
  }
}

// Example API functions
export const loanApi = {
  calculate: async (params: {
    loanAmount: number;
    interestRate: number;
    loanTerm: number;
    downPayment?: number;
  }) => {
    return apiRequest('/loan-calculator', {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },

  apply: async (application: {
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
  }) => {
    return apiRequest('/apply-loan', {
      method: 'POST',
      body: JSON.stringify(application),
    });
  },
};

export const contactApi = {
  submit: async (formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

