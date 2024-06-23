import "./Bankist.css";
import { React, useState } from "react";
import TopNavigation from "./TopNavigation";
import Balance from "./Balance";
import Movements from "./Movements";
import Summary from "./Summary";
import TransferOperation from "./TransferOperation";
import LoanOperation from "./LoanOperation";
import CloseAccountOperation from "./CloseAccountOperation";
import LogoutTimer from "./LogoutTimer.js";

// BANKIST APP

// Data
const account1 = {
  owner: "Ahmar Yar",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Sabir Khan",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Hammad Khan",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Masab Jamal",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accountsData = [account1, account2, account3, account4];

const BankistApp = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [accounts, setAccounts] = useState(accountsData);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const updateLoggedInUser = (updatedUser, closed = false) => {
    if (closed) {
      // Mark the account as closed and remove it from the accounts list
      const updatedAccounts = accounts.filter((acc) => acc !== updatedUser);
      setLoggedInUser(null);
      setAccounts(updatedAccounts);
    } else {
      setLoggedInUser(updatedUser);
    }
  };

  return (
    <>
      <TopNavigation accounts={accounts} onLogin={handleLogin} />

      {loggedInUser && (
        <main className="app">
          <Balance loggedInUser={loggedInUser} />
          <Movements movements={loggedInUser.movements} />
          <Summary movements={loggedInUser.movements} />
          <TransferOperation
            loggedInUser={loggedInUser}
            accounts={accounts}
            updateLoggedInUser={updateLoggedInUser}
          />
          <LoanOperation
            loggedInUser={loggedInUser}
            updateLoggedInUser={updateLoggedInUser}
          />
          <CloseAccountOperation
            loggedInUser={loggedInUser}
            updateLoggedInUser={updateLoggedInUser}
          />
          <LogoutTimer onLogout={() => setLoggedInUser(null)} />
        </main>
      )}
    </>
  );
};

export default BankistApp;
