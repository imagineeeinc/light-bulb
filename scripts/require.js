const { dialog } = require('electron').remote
const { BrowserWindow } = require("electron");
const { app } = require("electron");
const { remote } = require('electron')
const { shell } = require('electron')
const { clipboard } = require('electron')
const { Menu, MenuItem } = remote
win = remote.getCurrentWindow()
const contents = win.webContents
var ipc = require('electron').ipcRenderer

fs = require('fs');

var findpage = true
var search = document.getElementById("search")
search.select()
var view = document.getElementById("webview")
var secure = document.getElementById("security")