import React from "react";
interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}
export declare const PasswordInput: React.FC<PasswordInputProps>;
export default PasswordInput;
