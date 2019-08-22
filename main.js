const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow = null;
function createWindow() {

	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720
	});

	mainWindow.loadFile(path.resolve(__dirname, 'build/index.html'));

	mainWindow.on('closed', () => {
		if (process.platform !== 'darwin') app.quit();
	});
}
app.on('ready', createWindow);