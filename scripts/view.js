view.addEventListener("did-fail-load", function() {
    if (navigator.onLine === true) {
        view.setAttribute("src", "../file/pages/failtoload.html")
        findpage = false
    } else if (navigator.onLine === false) {
        view.setAttribute("src", "../file/pages/nointernet.html")
    }
})
view.addEventListener("did-frame-finish-load", function() {
    if (view.src.indexOf("/file/pages/failtoload.html") > -1 || view.src.indexOf("/file/pages/nointernet.html") > -1 || view.src.indexOf("/file/pages/newtab.html") > -1) {

    } else {
        search.value = view.src
        if (view.src.slice(0, 7).toLowerCase() == "http://") {
            secure.innerText = 'lock_open'
            secure.style.color = 'rgb(255, 255, 0)'
            secure.title = 'This page isn\'t secure'
        } else if (view.src.slice(0, 8).toLowerCase() == "https://") {
            secure.innerText = 'https'
            secure.title = 'This page is secure'
        } else if (view.src.slice(0, 6).toLowerCase() == "ftp://") {
            secure.innerText = 'folder'
            secure.title = 'This page is secure'
        } else if (view.src.slice(0, 7).toLowerCase() == "file://") {
            secure.innerText = 'perm_media'
            secure.title = 'This page is a file on the local disk'
        } else if (view.src.slice(0, 5).toLowerCase() == "data:") {
            secure.innerText = 'info'
            secure.title = 'This page is a data URI'
        } else if (view.src.slice(0, 4).toLowerCase() == "tel:") {
            secure.innerText = 'phone'
            secure.title = 'This page is a telephone number'
        } else if (view.src.slice(0, 4).toLowerCase() == "sms:") {
            secure.innerText = 'sms'
            secure.title = 'This page is a SMS number'
        } else if (view.src.slice(0, 4).toLowerCase() == "geo:") {
            secure.innerText = 'place'
            secure.title = 'This page is a geographical location'
        } else if (view.src.slice(0, 4).toLowerCase() == "mailto:") {
            secure.innerText = 'email'
            secure.title = 'This page is an email address'
        } else {
            secure.innerText = 'info'
            secure.title = 'This page is not secure'
        }
    }
})