import { jsx } from 'react/jsx-runtime';
import { button } from './Button.module.css.js';

function Button({ children }) {
    return jsx("button", { className: button, children: children });
}

export { Button };
