import { routeObjects } from '@js/base/routeObjects';
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
import Typed from 'typed.js';

if (document.querySelector('[data-typed]')) {
    const typed = new Typed('[data-typed]', {
        strings: ['working'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 500,
        startDelay: 1000,
        loop: true,
        fadeOut: false,
        smartBackspace: true,
        showCursor: false,
        //cursorChar: '_',
        //fadeOutDelay: 500,
        //autoInsertCss: true,
        //shuffle: false,
        //attr: 'placeholder',
        //bindInputFocusEvents: true,
    });
    routeObjects.typed = typed;
}