import React from "react";
interface PasswordInputProps2 {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}
export declare const PasswordInput2: React.FC<PasswordInputProps2>;
export default PasswordInput2;
