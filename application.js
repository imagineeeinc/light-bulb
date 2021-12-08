const { app, BrowserWindow, ipcMain } = require('electron')
const {download} = require('electron-dl');
const os = require('os')
const fs = require('fs')

const ver = app.getVersion()

function createWindow () {
  const win = new BrowserWindow({
    //titleBarStyle: "hidden",
    frame: false,
    //backgroundColor: '#3b10e6',
    //transparent: true,
    fullscreenable: true,
    hasShadow: true,
    width: 1000,
    height: 800,
    minimizable: true,
    maximizable: true,
    minWidth: 560,
    minHeight: 260,
    //defaultFontFamily: "monospace",
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      spellcheck: true,
      webviewTag: true
    }
  })
  win.loadFile('views/index.html')
  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.setAboutPanelOptions({
  applicationName: "Light Bulb", 
  applicationVersion: ver,
  version: ver,
  credits: "Imagineee",
  authors: "Imagineee",
  copyright: "© 2021 Imagineee"
  //iconPath
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})