import { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  const minute = Math.floor(secondRemaining / 60);
  const second = secondRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}:{second < 10 && "0"}
      {second}
    </div>
  );
}
