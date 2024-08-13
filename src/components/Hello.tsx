// src/components/Hello.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.module.css";

export const Hello: React.FC = () => {
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

export default Hello;
