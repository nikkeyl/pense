import { removeClasses } from "@js/base/removeClasses";

export function toggleClasses(elem, className, selector) {
    if (!elem.classList.contains(className)) {
        let buttonActive = document.querySelectorAll(selector);
        removeClasses(buttonActive, className);
        elem.classList.add(className);
    }
}