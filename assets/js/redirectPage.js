const counter = document.querySelector('#count')
const hasteURL = new URL("https://bin.securx.ml")
const currentURL = new URL(window.location.href)
const notif = document.querySelector('#notification')

var count = 5

setInterval(() => {
    counter.innerHTML = count
    count--
    try {
        if (count < 0) location.replace(hasteURL + `${uurl}`)
    } catch (err) {
        console.log(err);
        notif.className = "error"
        notif.innerHTML = 'Une erreur c\'est produite : ' + err
    }
}, 1000)

// Find search params url
var uurl = currentURL.search.slice(1)

// Set url redirection
var urlRedirect = document.querySelector('a[href="https://bin.securx.ml"]');
if (urlRedirect) {
    urlRedirect.setAttribute('href', hasteURL + `${uurl}`)
}

// countDown()