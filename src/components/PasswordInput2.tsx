// src/components/Hello.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.module.css";

interface PasswordInputProps2 {
  value: string;
  placeholder?: string;
  required?: boolean;
}

export const PasswordInput2: React.FC = () => {
  return (
    <div>
      <div className={styles.passwordContainer}>
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
};

export default PasswordInput2;
