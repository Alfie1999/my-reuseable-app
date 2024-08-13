// src/components/Hello.tsx
import React from "react";
import styles from "./password-input.module.css";

export const Hello: React.FC = () => {
  return (
    <h1>
      <div className={styles.passwordContainer}>Hello, World!</div>
    </h1>
  );
};

export default Hello;
