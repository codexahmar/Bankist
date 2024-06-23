import React, { useState } from "react";

const TransferOperation = ({ loggedInUser, accounts }) => {
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    const targetAccount = accounts.find(
      (acc) => acc.username === transferTo
    );

    if (!targetAccount) {
      alert("Invalid target account. Please check the username.");
      return;
    }

    const amount = parseFloat(transferAmount);

    if (isNaN(amount) || amount <= 0) {
      alert("Invalid transfer amount. Please enter a valid amount.");
      return;
    }

    if (
      amount >
      loggedInUser.movements.reduce((sum, movement) => sum + movement, 0)
    ) {
      alert(
        "Insufficient funds. You cannot transfer more than your account balance."
      );
      return;
    }

    // Update movements for sender (deduct the transfer amount)
    loggedInUser.movements.push(-amount);

    // Update movements for receiver (add the transfer amount)
    targetAccount.movements.push(amount);

    // Reset input values
    setTransferTo("");
    setTransferAmount("");
  };

  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer" onSubmit={handleTransfer}>
        <input
          type="text"
          className="form__input form__input--to"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
        />
        <input
          type="number"
          className="form__input form__input--amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
        />
        <button type="submit" className="form__btn form__btn--transfer">
          &rarr;
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
};

export default TransferOperation;
