import { Typography } from "@mui/material";
import { useState, useRef, useEffect, useCallback } from "react";

const Countdown = () => {
  const [timer, setTimer] = useState("12:05:10");
  const intervalRef = useRef(null);

  const updateTimer = useCallback(() => {
    setTimer((prevTimer) => {
      const [hours, minutes, seconds] = prevTimer.split(":").map(Number);
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalRef.current);
        return "00:00:00";
      }

      let newHours = hours;
      let newMinutes = minutes;
      let newSeconds = seconds - 1;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }

      return `${formatTime(newHours)}:${formatTime(newMinutes)}:${formatTime(
        newSeconds,
      )}`;
    });
  }, []);

  const startTimer = useCallback(() => {
    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);
    intervalRef.current = intervalId;
  }, [updateTimer]);

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  const onClickReset = () => {
    clearInterval(intervalRef.current);
    setTimer("12:05:10");
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-no-repeat rounded event-overlay ">
      <Typography className="text-2xl font-bold mb-4 text-white ">
        Event Timer
      </Typography>

      <Typography className="text-3xl font-bold mb-4 text-white">
        {timer}
      </Typography>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
        onClick={onClickReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Countdown;
