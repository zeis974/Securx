const counter = document.querySelector('#count')
const hasteURL = new URL("https://hastebin.securx.tk")
const defaultUrl = new URL(window.location.href)

let count = 5
setInterval(() => {
    counter.innerHTML = count
    count--
    if (count < 0) location.replace(hasteURL + `${uurl}`)
}, 1000)

setTimeout(() => {
    preFetch()
}, 200)

var preFetch = function () {
    fetch(hasteURL)
        .catch(function (error) {
            console.log(error);
        })
}

// Find search params url
var uurl = defaultUrl.search.slice(1)

// Set url redirection
var urlRedirect = document.querySelector('a[href="https://hastebin.securx.tk"]');
if (urlRedirect) {
    urlRedirect.setAttribute('href', hasteURL + `${uurl}`)
}