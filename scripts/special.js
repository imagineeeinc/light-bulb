console.log("%c✰" + "%c✰" + "%c✰" + "%c✰Welcome to the devtools of light-bulb✰", "color: springgreen;", "color: darkorange;", "color: crimson;", "color: aqua;")  
function creator() {
    shell.openExternal('https://imagineeeinc.github.io/')
}
function repo() {
    shell.openExternal('https://github.com/imagineeeinc/light-bulb')
}
function prosite() {
    shell.openExternal('https://github.com/imagineeeinc/light-bulb')
}
function tellspe() {
    openmodal('<h1>🎆🎇✨🎉🔮Special🔮🎉✨🎇🎆</h1><br>The special menu is full of special things, links, and extras!✨<br><span style="color: white;" onclick="devtool()">devtool</span>')
}
function devtool() {
    win.webContents.openDevTools()
    hidemodal()
}
function reload() {
    win.reload()
}
function about() {
    openmodal("<h1 style='font-size: 69.23px;'><img src='file/light-bulb.svg' style='width: 100px;'>light-bulb</h1><br><p>Version: " + /*version['cur-full-ver']*/"1.0.0" + "<br>Copyright © " + new Date().getFullYear() + " Imagineee<br><br>This app is under <button onclick='licence()'>MIT Licence</button></p><br><p>light-bulb is more powerful notepad than the default one on your system, with a unique and minimlist ui and more features coming soon.</p><br><p><button onmouseup='creator()'>Creator's Website</button><br><button onmouseup='repo()'>Project Repo</button><br><button onmouseup='prosite()'>Project Website</button></p>")
}
function licence() {
    openlin("https://github.com/imagineeeinc/light-bulb/blob/main/LICENSE")
}
function openlin(link) {
    shell.openExternal(link) 
}