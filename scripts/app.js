document.body.onkeydown = function(event) {
    if (event.keyCode === 73 && event.shiftKey === true && event.ctrlKey === true) {
        //event.preventDefault()
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
search.onfocus = function(e) {
    e.preventDefault()
    search.select()
}
function closeapp() {
    win.close()
}
if (win.isMaximized()) {
    document.getElementById('maximize').innerText = 'close_fullscreen'
} else {
    document.getElementById('maximize').innerText = 'open_in_full'
}
function maximize() {
    if (win.isMaximized()) {
        win.unmaximize()
        document.getElementById('maximize').innerText = 'open_in_full'
    } else {
        win.maximize()
        document.getElementById('maximize').innerText = 'close_fullscreen'
    }
}
function minimize() {
    win.minimize()
}

/*
setInterval(function() {
    document.getElementById("view").style.height = window.innerHeight - 119.61 + "px"
    document.getElementById("search").style.width = window.innerWidth - 207.999 + "px"
})*/