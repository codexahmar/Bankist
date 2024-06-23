import React from "react";

const Summary = ({ movements }) => {
  const totalIn = movements
    .filter((movement) => movement > 0)
    .reduce((sum, movement) => sum + movement, 0);

  const totalOut = movements
    .filter((movement) => movement < 0)
    .reduce((sum, movement) => sum + movement, 0);

  const totalInterest = movements
    .filter((movement) => movement > 0)
    .map((movement) => (movement * 1.2) / 100)
    .reduce((sum, interest) => sum + interest, 0);

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{totalIn}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{totalOut}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">
        {totalInterest}€
      </p>
    </div>
  );
};

export default Summary;
