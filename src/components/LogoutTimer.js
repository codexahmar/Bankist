import React, { useEffect, useState } from "react";

const LogoutTimer = ({ onLogout }) => {
  const [timer, setTimer] = useState(300); // Initial timer value in seconds (5 minutes)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // When the timer reaches 0, trigger the logout action
    if (timer === 0) {
      clearInterval(countdown);
      onLogout();
    }

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [timer, onLogout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <p className="logout-timer">
      You will be logged out in <span className="timer">{formatTime(timer)}</span>
    </p>
  );
};

export default LogoutTimer;
