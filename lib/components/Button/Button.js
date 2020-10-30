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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import StyledButton from "./styles/Button";
import { isStyledButtonType } from "./styles/ButtonType";
/**
 * The `Button` component with multiples possibility from use
 */
var Button = function (_a) {
    var type = _a.type, rest = __rest(_a, ["type"]);
    if (isStyledButtonType(type))
        return React.createElement(StyledButton, __assign({ customtype: type }, rest));
    else
        return React.createElement(StyledButton, __assign({ type: type }, rest));
};
Button.defaultProps = {
    type: "single",
    rounded: false,
    shadow: false,
};
export default Button;