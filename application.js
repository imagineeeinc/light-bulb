//const { app, BrowserWindow } = require('electron')
const { app } = require('electron')
const { BrowserWindow } = require('electron')
const { ipcMain } = require('electron')
const {download} = require('electron-dl');

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
    minWidth: 470,
    minHeight: 260,
    //defaultFontFamily: "monospace",
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      spellcheck: true,
      webviewTag: true
    }
  })
  win.loadFile('index.html')
  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.setAboutPanelOptions({ applicationName: "Light Bulb"})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on("open-file", function(event, path) {
  //event.preventDefault();
  filepath = path;
  if (ready) {
      mainWindow.webContents.send('open-file', filepath);
      filepath = null;

      return;
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})