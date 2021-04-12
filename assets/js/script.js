const burgerScale = document.querySelector('.burger')
const burgerSVG = document.querySelector('.burger svg')
const body = document.body
const themeIcon = document.querySelector('#theme-icon')
const appChangeTheme = document.querySelector('#app-change-theme')

const navOpen = () => {
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burgerScale.addEventListener('click', () => {
        setTimeout(function () {
            setBodyState()
        }, 100)
        // Toogle Nav
        nav.classList.toggle('active')
        burgerScale.classList.toggle('active')
        burgerSVG.classList.toggle('active')

        // Animate Links
        navLinks.forEach((link, index) => {
            link.addEventListener('click', (event) => {
                nav.classList.remove('active')
                burgerScale.classList.remove('active')
                burgerSVG.classList.remove('active')
                removeStyle(navLinks);
                setBodyState()
            });
            var linkAnimated = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = linkAnimated
            }
        })
    })
}

var setBodyState = function () {
    if (burgerScale.className === 'burger active') {
        body.style.position = 'relative'
        body.style.overflowY = 'hidden'
    } else {
        body.style.position = 'static'
        body.style.overflowY = 'auto'
    }
}
// Show year 
const yearElement = document.querySelector("#year")

if (typeof (yearElement) != 'undefined' && yearElement != null) {
    yearElement.innerHTML = new Date().getFullYear()
} else {
    yearElement == null
}

navOpen()

var removeStyle = function (all) {
    var i = all.length;
    var j, is_hidden;
    // Presentational attributes.
    var attr = [
        'style',
        'frameborder'
    ];
    var attr_len = attr.length;

    while (i--) {
        is_hidden = (all[i].style.display === 'none');

        j = attr_len;

        while (j--) {
            all[i].removeAttribute(attr[j]);
        }
        // Re-hide display:none elements,
        // so they can be toggled via JS.
        if (is_hidden) {
            all[i].style.display = 'none';
            is_hidden = false;
        }
    }
}
// Fetch GitHub

const versionLink = document.querySelector('#version a')
const url = 'https://api.github.com/repos/zeis974/Securx/commits'

fetch(url)
    .then(res => res.json())
    .then(data => {
        versionLink.href = `https://github.com/zeis974/Securx/commit/${data[0].sha}`
    })
    .catch(function (error) {
        console.log(error);
        versionLink.style.color = 'red'
        versionLink.className = 'unfetch'
    })
