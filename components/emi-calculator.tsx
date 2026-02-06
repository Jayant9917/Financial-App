'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/animated-section';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

interface EMICalculation {
  emi: number;
  totalAmount: number;
  totalInterest: number;
}

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('1000000');
  const [interestRate, setInterestRate] = useState<string>('8.5');
  const [loanTenure, setLoanTenure] = useState<string>('20');
  const [calculation, setCalculation] = useState<EMICalculation | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = parseFloat(interestRate) || 0;
    const tenure = parseFloat(loanTenure) || 0;

    if (principal <= 0 || rate <= 0 || tenure <= 0) {
      setCalculation(null);
      return;
    }

    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    setCalculation({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <AnimatedSection className="w-full">
      <Card className="w-full shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            EMI Calculator
          </CardTitle>
          <CardDescription className="text-gray-600">
            Calculate your monthly EMI and total payment details
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Loan Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
              <Input
                id="loanAmount"
                type="number"
                autoComplete="off"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="1000000"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                min="100000"
                max="10000000"
                step="100000"
              />
              <p className="text-xs text-gray-500">Min: ₹1L | Max: ₹10L</p>
            </div>

            {/* Interest Rate Input */}
            <div className="space-y-2">
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                autoComplete="off"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="8.5"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                min="5"
                max="20"
                step="0.1"
              />
              <p className="text-xs text-gray-500">Annual interest rate</p>
            </div>

            {/* Loan Tenure Input */}
            <div className="space-y-2">
              <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
              <Input
                id="loanTenure"
                type="number"
                autoComplete="off"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                placeholder="20"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                min="1"
                max="30"
                step="1"
              />
              <p className="text-xs text-gray-500">1 to 30 years</p>
            </div>
          </div>

          <Button 
            onClick={calculateEMI}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Calculate EMI
          </Button>

          {/* Results */}
          {calculation && (
            <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
              <h3 className="text-lg font-semibold mb-4 text-center">EMI Calculation Results</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-90 mb-1">Monthly EMI</p>
                  <p className="text-2xl font-bold">{formatCurrency(calculation.emi)}</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-90 mb-1">Total Amount</p>
                  <p className="text-2xl font-bold">{formatCurrency(calculation.totalAmount)}</p>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-sm opacity-90 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold">{formatCurrency(calculation.totalInterest)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Quick Examples */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-3">Quick Examples:</p>
            <div className="grid md:grid-cols-3 gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLoanAmount('500000');
                  setInterestRate('8.5');
                  setLoanTenure('15');
                  setCalculation(null);
                }}
                className="text-xs border-gray-300 hover:border-blue-500 hover:text-blue-600"
              >
                ₹5L for 15 years
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLoanAmount('1000000');
                  setInterestRate('8.5');
                  setLoanTenure('20');
                  setCalculation(null);
                }}
                className="text-xs border-gray-300 hover:border-blue-500 hover:text-blue-600"
              >
                ₹10L for 20 years
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLoanAmount('2000000');
                  setInterestRate('8.5');
                  setLoanTenure('25');
                  setCalculation(null);
                }}
                className="text-xs border-gray-300 hover:border-blue-500 hover:text-blue-600"
              >
                ₹20L for 25 years
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
