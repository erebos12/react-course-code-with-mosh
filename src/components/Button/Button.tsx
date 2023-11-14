import { ReactNode } from "react";
import styles from "./Button.module.css";

export enum Color {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
  info = "info",
  warning = "warning",
  light = "light",
  dark = "dark",
}

// button component with dynamic text (children) as agrument
interface ButtonProps {
  children: ReactNode; // we can pass html content in props (children is pre-defined in props of type ReactNode)
  color: Color; // type of the button ( ? = optional parameter )
  onClick: () => void; // function that defines what's happening on a click
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join("")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
