import React, { useState } from 'react';

function MortgageCalculator() {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [includeTaxes, setIncludeTaxes] = useState(false);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
  
    const handleCalculate = () => {
      const loan = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
      const term = parseFloat(loanTerm) * 12; // Total number of payments
  
      if (!isNaN(loan) && !isNaN(rate) && !isNaN(term)) {
        const monthly = (loan * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        const taxRate = includeTaxes ? 0.1 : 0; // Example tax rate (adjust as needed)
        const monthlyWithTaxes = monthly * (1 + taxRate); // Calculate monthly payment with taxes
        setMonthlyPayment(monthlyWithTaxes.toFixed(2));
        setTotalPayment((monthlyWithTaxes * term).toFixed(2));
        setTotalInterest((monthlyWithTaxes * term - loan).toFixed(2));
      } else {
        // Handle invalid inputs or display an error message.
        setMonthlyPayment(0);
        setTotalPayment(0);
        setTotalInterest(0);
      }
    };
  
    return (
      <div>
        <h2>Mortgage Calculator</h2>
        <div>
          <label>Loan Amount ($):</label>
          <input type="text" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </div>
        <div>
          <label>Interest Rate (%):</label>
          <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <div>
          <label>Loan Term (years):</label>
          <input type="text" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        </div>
        <div>
          <label>Include Taxes:</label>
          <input
            type="checkbox"
            checked={includeTaxes}
            onChange={() => setIncludeTaxes(!includeTaxes)}
          />
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        <div>
          <h3>Results:</h3>
          <p>Monthly Payment: ${monthlyPayment}</p>
          <p>Total Payment: ${totalPayment}</p>
          <p>Total Interest Paid: ${totalInterest}</p>
        </div>
      </div>
    );
  }
  
  export default MortgageCalculator;