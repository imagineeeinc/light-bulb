function closeapp() {
    win.close()
}
document.getElementById("close-app").onmouseup = function() {
    if (curtxt != gettext()) {
        openmodal("<h2>Do you want to save changes?</h2><button onclick='savenclose()'>Save changes and leave</button><button onclick='closeapp()'>do not save and leave</button><button onclick='hidemodal()'>cancel</button>")
    } else if (curtxt == gettext()) {
        win.close()
    }
};
document.getElementById("maximize-app").onmouseup = function() {
    if (win.isMaximized()) {
        win.unmaximize()
    } else {
        win.maximize()
    }
}
document.getElementById("minimize-app").onmouseup = function() {
    win.minimize()
};