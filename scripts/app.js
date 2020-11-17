document.body.onkeydown = function(event) {
    if (event.keyCode === 73 && event.shiftKey === true && event.ctrlKey === true) {
        event.preventDefault()
    }
}
view.onkeydown = function(event) {
    if (event.keyCode === 73 && event.shiftKey === true && event.ctrlKey === true) {
        view.openDevTools()
    }
}
function devtoolopen() {
    view.openDevTools()
}
setInterval(function() {
    document.getElementById("view").style.height = window.innerHeight - 119.61 + "px"
    document.getElementById("search").style.width = window.innerWidth - 207.999 + "px"
})