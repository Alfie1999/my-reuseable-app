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
import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./password-input.module.css";
export var PasswordInput2 = function () {
    return (_jsx("div", { children: _jsx("div", __assign({ className: styles.passwordContainer }, { children: _jsx("h1", { children: "Hello, World!" }) })) }));
};
export default PasswordInput2;
