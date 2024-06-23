import React from "react";

const Movements = ({ movements }) => {
  const formatDate = (date) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="movements">
      {movements.map((movement, index) => (
        <div key={index} className="movements__row">
          <div
            className={`movements__type ${
              movement > 0
                ? "movements__type--deposit"
                : "movements__type--withdrawal"
            }`}
          >
            {movement > 0 ? `${index + 1} deposit` : `${index + 1} withdrawal`}
          </div>
          <div className="movements__date">
            {index === 0 ? "3 days ago" : formatDate(new Date())}
          </div>
          <div className="movements__value">{movement}€</div>
        </div>
      ))}
    </div>
  );
};

export default Movements;
