export function title(selector) {
    const mainTitle = document.querySelector(selector);
    if (mainTitle) {
        let mainTitleText = mainTitle.innerText;
        document.title = mainTitleText;
    }
}