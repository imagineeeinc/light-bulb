//https://www.google.com/search?q=stadia&oq=stadia
//https://google.com
var urlRegex = /[(http(s)?)(*?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig; 
var linkRegex = /[(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;
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
            if (word.match(urlRegex)) {
                view.setAttribute("src", word)
            } if (word.match(linkRegex)) {
                view.setAttribute("src", 'https://'+word)
            } else {
                view.setAttribute("src", "https://www.google.com/search?q=" + word)
            }
        } else if (navigator.onLine === false) {
            view.setAttribute("src", "../file/pages/nointernet.html")
        }
    } else if (word === undefined) {
        view.setAttribute("src", "../file/pages/newtab.html")
    }
}
function reload() {
    view.reload();
}
function goBack() {
    view.goBack();
}
function goForward() {
    view.goForward();
}