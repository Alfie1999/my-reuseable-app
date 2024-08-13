// src/components/PasswordInput.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.module.css";

// Exporting the interface so it can be used elsewhere
interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

// Exporting the component as named export
export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = "Password",
  required = true,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.passwordContainer}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={styles.input}
      />
      <span
        className={styles.passwordToggleIcon}
        onClick={togglePasswordVisibility}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </span>
    </div>
  );
};

export default PasswordInput;
