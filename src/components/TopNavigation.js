import React, { useState } from "react";

const TopNavigation = ({ accounts, onLogin }) => {
  const createUserName = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("");
    });
  };
  createUserName(accounts);

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [usernameInput, setUsernameInput] = useState("");
  const [pinInput, setPinInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const selectedAccount = accounts.find(
      (acc) => acc.username === usernameInput
    );

    if (selectedAccount && selectedAccount.pin === +pinInput) {
      setLoggedInUser(selectedAccount);
      onLogin(selectedAccount);
      setUsernameInput("");
      setPinInput("");
    } else {
      setLoggedInUser(null);
    }
  };

  return (
    <nav>
      <p className={`welcome ${loggedInUser ? "welcome--loggedIn" : ""}`}>
        {loggedInUser
          ? `Welcome, ${loggedInUser.owner}!`
          : "Log in to get started"}
      </p>
      <form className="login" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          className="login__input login__input--user"
        />
        <input
          type="password"
          placeholder="PIN"
          maxLength="4"
          value={pinInput}
          onChange={(e) => setPinInput(e.target.value)}
          className="login__input login__input--pin"
        />
        <button type="submit" className="login__btn">
          &rarr;
        </button>
      </form>
    </nav>
  );
};

export default TopNavigation;
