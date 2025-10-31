import React, { useEffect, useState } from "react";

const FreelanceTimer = () => {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 30;

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => [setTimeLeft(getTimeRemaining())], 1000);
    return ()=>clearInterval(timer)//clenup unmount
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max m-4">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">{timeLeft.days}</span>
        <br />
        Days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">{timeLeft.hours}</span>
        <br />
        Hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">{timeLeft.minutes}</span>
        <br />
        Minutes
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">{timeLeft.seconds}</span>
        <br />
        Seconds
      </div>
    </div>
  );
};

export default FreelanceTimer;
