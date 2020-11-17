const { dialog } = require('electron').remote
const { BrowserWindow } = require("electron");
const { app } = require("electron");
const { remote } = require('electron')
const { shell } = require('electron')
win = remote.getCurrentWindow()
const contents = win.webContents
var ipc = require('electron').ipcRenderer

fs = require('fs');

var findpage = true
var search = document.getElementById("search")
var view = document.getElementById("view")
var modal = document.getElementById("Modal");
var mtext = document.getElementById("m-txt");

var close = document.getElementsByClassName("close-m")[0];