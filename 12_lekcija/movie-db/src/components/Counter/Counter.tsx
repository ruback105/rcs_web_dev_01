import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";

type CounterProps = {};

const Counter: FC<CounterProps> = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      console.log("render");
    }
  }, [isMounted]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h5>Current click count: {counterValue}</h5>
      <div className="mt-5">
        <Button
          deleteButton
          onClick={() => {
            setCounterValue((prev) => prev - 1);
          }}
        >
          Decrease
        </Button>
        <Button
          submitButton
          onClick={() => {
            setCounterValue((prev) => prev + 1);
            if (!isMounted) {
              setIsMounted(true);
            }
          }}
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export default Counter;
