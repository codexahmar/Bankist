import React, { useState } from "react";

const LoanOperation = ({ loggedInUser, updateLoggedInUser }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [error, setError] = useState("");

  const handleLoanRequest = (e) => {
    e.preventDefault();

    const amount = parseFloat(loanAmount);

    if (isNaN(amount) || amount <= 0) {
      setError("Invalid loan amount. Please enter a valid amount.");
      return;
    }

    // Update movements for the user (add the loan amount)
    const updatedMovements = [...loggedInUser.movements, amount];

    // Update state instantly for the user using the callback function
    updateLoggedInUser((prevUser) => ({
      ...prevUser,
      movements: updatedMovements,
    }));

    // Reset input value and error
    setLoanAmount("");
    setError("");
  };

  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>
      <form className="form form--loan" onSubmit={handleLoanRequest}>
        <input
          type="number"
          className="form__input form__input--loan-amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <button type="submit" className="form__btn form__btn--loan">
          &rarr;
        </button>
        <label className="form__label form__label--loan">Amount</label>
        {error && <p className="form__error">{error}</p>}
      </form>
    </div>
  );
};

export default LoanOperation;
