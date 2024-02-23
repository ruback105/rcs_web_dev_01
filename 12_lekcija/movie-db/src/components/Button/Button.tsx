import classNames from "classnames";
import { FC, ReactNode } from "react";

type ButtonProps = {
  deleteButton?: boolean;
  submitButton?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  deleteButton,
  submitButton,
  onClick,
  children,
}) => {
  if (deleteButton && submitButton) {
    throw new Error("Button cannot be both delete and submit");
  }

  return (
    <button
      className={classNames("border-2 rounded-md p-4 w-32", {
        "bg-red-500 text-white": deleteButton,
        "bg-green-500 text-white": submitButton,
        "bg-slate-300 text-black": !deleteButton && !submitButton,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
