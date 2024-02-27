import { jsx } from 'react/jsx-runtime';
import { label } from './Label.module.css.js';

function Label({ children, htmlFor, }) {
    return (jsx("label", { htmlFor: htmlFor, className: label, children: children }));
}

export { Label };
