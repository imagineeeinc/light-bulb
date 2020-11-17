var backli = []
var forwli = []
backli.push(view.src)

document.getElementById("menu").onclick = function() {
    document.getElementById("menus").classList.toggle("menus-h")
}

view.addEventListener("did-frame-finish-load", function() {
    if (view.src != backli[backli.length-1]) {
        backli.push(view.src)
    } else {
    }
    console.log(backli)
})

function back() {
    forwli.push(backli[backli.length-1])
    const lastback = backli[backli.length-2]
    if (lastback == undefined || lastback.indexOf("file/pages/newtab.html") <= -1) {
        if (lastback != undefined) {
            searchnow(lastback)
        }
    } else if (lastback.indexOf("file/pages/newtab.html") > -1  || lastback == undefined) {
        console.log("there")
        view.setAttribute("src", "file/pages/newtab.html")
    }
    backli.pop()
}

function forward() {
    backli.push(forwli[forwli.length-1])
    const lastforw = forwli[forwli.length-1]
    if (lastforw != undefined) {
        searchnow(lastforw)
    }
    forwli.pop()
}
function reload() {
    searchnow(view.src)
}