/*
 * Theme support for One Dark and One Light
 *
 * Author: Aurelia
 * Version: 1.0
 */

/*
 * Invoke on load
 */
getLocalTheme();

/*
 * Function to get locally preferred or saved theme
 */
function getLocalTheme() {
    var localThemeDark = localStorage.getItem("theme") === "one-dark";
    var localThemeLight = localStorage.getItem("theme") === "one-light";
    var systemThemeLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (localThemeDark) {
        setTheme("one-dark");
    } else if (localThemeLight || systemThemeLight) {
        setTheme("one-light");
    } else {
        setTheme("one-dark");
    }
}

/*
 * Function to set a given theme
 */
function setTheme(name) {
    localStorage.setItem("theme", name);
    document.documentElement.setAttribute("data-theme", name);
}

/*
 * Function to toggle between light and dark theme
 */
function toggleTheme() {
    if (localStorage.getItem("theme") === "one-dark") {
        setTheme("one-light");
    } else {
        setTheme("one-dark");
    }
}
