// Fetch GitHub

const versionLink = document.querySelector('#version a')
const url = 'https://api.github.com/repos/zeis974/Securx/commits'
const commitRepo = 'https://github.com/zeis974/Securx/commit/'

fetch(url)
    .then(res => res.json())
    .then(data => {
        versionLink.href = `${commitRepo}` + `${data[0].sha}`
    })
    .catch(function (error) {
        console.log(error);
        versionLink.style.color = 'red'
        versionLink.className = 'unfetch'
    })
