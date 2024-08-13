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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./password-input.module.css";
export var Hello = function () {
    return (_jsxs("div", { children: [_jsx("div", __assign({ className: styles.passwordContainer }, { children: _jsx("h1", { children: "Hello, World!" }) })), _jsx("span", __assign({ className: styles.passwordToggleIcon }, { children: _jsx(FontAwesomeIcon, { icon: faEye }) }))] }));
};
export default Hello;
