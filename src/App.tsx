import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  let hours: number = time.getHours();
  const minutes: number = time.getMinutes();
  const seconds: number = time.getSeconds();
  const ampm: string = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  const formatNumber = (value: number): string => {
    return value < 10 ? value.toString() : value.toString();
  };

  return (
    <>
      <section>
        <article>{formatNumber(hours)} :</article>
        <article>{formatNumber(minutes)} :</article>
        <article>{formatNumber(seconds)}</article>
        <article>
          <p>{ampm}</p>
        </article>
      </section>
    </>
  );
};

export default App;
