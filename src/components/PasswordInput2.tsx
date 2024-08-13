// src/components/Hello.tsx
import React from "react";
import styles from "./password-input.module.css";

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
