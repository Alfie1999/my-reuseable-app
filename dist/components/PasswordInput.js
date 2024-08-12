var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.css";
export var PasswordInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? "Password" : _b, _c = _a.required, required = _c === void 0 ? true : _c;
    var _d = useState(false), showPassword = _d[0], setShowPassword = _d[1];
    var togglePasswordVisibility = function () {
        setShowPassword(!showPassword);
    };
    return (_jsxs("div", __assign({ className: styles.passwordContainer }, { children: [_jsx("input", { type: showPassword ? "text" : "password", value: value, placeholder: placeholder, onChange: onChange, required: required, className: styles.input }), _jsx("span", __assign({ className: styles.passwordToggleIcon, onClick: togglePasswordVisibility }, { children: _jsx(FontAwesomeIcon, { icon: showPassword ? faEyeSlash : faEye }) }))] })));
};
export default PasswordInput;
