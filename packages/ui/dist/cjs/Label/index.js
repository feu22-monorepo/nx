'use strict';

var jsxRuntime = require('react/jsx-runtime');
var Label_module = require('./Label.module.css.js');

function Label({ children, htmlFor, }) {
    return (jsxRuntime.jsx("label", { htmlFor: htmlFor, className: Label_module.label, children: children }));
}

exports.Label = Label;
