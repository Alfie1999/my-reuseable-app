// src/components/Hello.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.module.css";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

export const PasswordInput2: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "Password",
  required = true,
}) => {
  return (
    <div>
      <div className={styles.passwordContainer}>
        <h1>Hello, World!</h1>
      </div>
      <span className={styles.passwordToggleIcon}>
        <FontAwesomeIcon icon={faEye} />
      </span>
    </div>
  );
};

export default PasswordInput2;
