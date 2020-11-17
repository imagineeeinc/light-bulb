view.addEventListener("did-fail-load", function() {
    if (navigator.onLine === true) {
        view.setAttribute("src", "file/pages/failtoload.html")
        findpage = false
    } else if (navigator.onLine === false) {
        view.setAttribute("src", "file/pages/nointernet.html")
    }
})
view.addEventListener("did-frame-finish-load", function() {
    findpage = true
})