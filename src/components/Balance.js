import React from "react";

const Balance = ({ loggedInUser }) => {
  const calculateTotalBalance = (movements) => {
    const totalBalance = movements.reduce((sum, movement) => sum + movement, 0);
    return totalBalance;
  };

  const totalBalance = calculateTotalBalance(loggedInUser.movements);

  const formatDateTime = () => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Date().toLocaleString(undefined, options);
  };

  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current Account Balance</p>
        <p className="balance__date">
          As of <span className="date">{formatDateTime()}</span>
        </p>
      </div>
      <p className="balance__value">{totalBalance}€</p>
    </div>
  );
};

export default Balance;
