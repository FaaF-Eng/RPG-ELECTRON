const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready',() => {
    mainWindow = new BrowserWindow({
        //Propriedades
        resizable: true,
        width: 700,
        height: 700,
        
    });

    mainWindow.loadURL(`File://${__dirname}/index.html`)
});