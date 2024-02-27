'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Button_module = require('./Button.module.css.js');

function Button({ children }) {
    return jsxRuntime.jsx("button", { className: Button_module.button, children: children });
}

exports.Button = Button;
