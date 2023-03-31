import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "secondary" }: Props) => {
  return (
    /*<button className={"btn btn-" + color} onClick={onClick}>*/
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
