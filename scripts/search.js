//https://www.google.com/search?q=stadia&oq=stadia
//https://google.com
setInterval(function() {
    if (search === document.activeElement) {
        
    } else {
        if (search.value.indexOf("newtab.html") == -1) {
            if (navigator.onLine === true) {
                if (findpage === true) {
                    if (search.value == "") {

                    } else {
                        search.value = view.src
                    }
                } else if (findpage === false) {
                    search.value = search.value
                }
            } else {
                search.value = search.value
            }
        } else if (search.value.indexOf("newtab.html") > -1) {
            search.value = ""
        }
    }
}, 50)
search.onkeydown = function(event) {
    //console.log(event)
    if (event.keyCode === 13) {
        search.blur()
        searchnow(search.value)
    }
}
function searchnow(word) {
    if (word != undefined) {
        if (navigator.onLine === true) {
            if (word.substr(0, 8) == "https://" || word.substr(0, 7) == "http://") {
                view.setAttribute("src", word)
            } else if (word.substr(0, 6) == "ftp://") {
                view.setAttribute("src", word)
            } else if (word.indexOf(" ") == -1 && word.indexOf(".") > -1) {
                view.setAttribute("src", "https://" + word)
            } else if (word.indexOf("://") > -1) {
                view.setAttribute("src", word)
            } else if (word.substr(0, 7) == "file://") {
                view.setAttribute("src", word)
            } else {
                view.setAttribute("src", "https://www.google.com/search?q=" + word + "&oq=" + word)
            }
        } else if (navigator.onLine === false) {
            view.setAttribute("src", "file/pages/nointernet.html")
        }
    } else if (word === undefined) {
        view.setAttribute("src", "file/pages/newtab.html")
    }
}