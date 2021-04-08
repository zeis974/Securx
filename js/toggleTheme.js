// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        themeIcon.className = 'bx bx-moon bx-md bx-tada'
    } else {
        setTheme('theme-dark');
        themeIcon.className = 'bx bx-sun bx-md bx-spin'
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark')
    } else {
        setTheme('theme-light')
    }
})();