import React, { useState } from "react";

const CloseAccountOperation = ({ loggedInUser, updateLoggedInUser }) => {
  const [confirmUser, setConfirmUser] = useState("");
  const [confirmPIN, setConfirmPIN] = useState("");
  const [error, setError] = useState("");

  const handleCloseAccount = (e) => {
    e.preventDefault();

    // Check if the entered user and PIN match the logged-in user
    if (
      confirmUser.toLowerCase() === loggedInUser.owner.toLowerCase() &&
      confirmPIN === loggedInUser.pin.toString()
    ) {
      // Close the account
      // For now, let's set the logged-in user to null and mark the account as closed
      updateLoggedInUser(loggedInUser, true);
      setError("");
    } else {
      setError("Invalid user or PIN. Please check your credentials.");
    }

    // Reset input values
    setConfirmUser("");
    setConfirmPIN("");
  };

  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close" onSubmit={handleCloseAccount}>
        <input
          type="text"
          className="form__input form__input--user"
          value={confirmUser}
          onChange={(e) => setConfirmUser(e.target.value)}
        />
        <input
          type="password"
          maxLength="4"
          className="form__input form__input--pin"
          value={confirmPIN}
          onChange={(e) => setConfirmPIN(e.target.value)}
        />
        <button type="submit" className="form__btn form__btn--close">
          &rarr;
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
        {error && <p className="form__error">{error}</p>}
      </form>
    </div>
  );
};

export default CloseAccountOperation;
