const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: 480,
    height: 700,
    x: width - 500,
    y: 20,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setAlwaysOnTop(true, 'screen-saver');
  mainWindow.setVisibleOnAllWorkspaces(true);

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

// IPC: simulate keyboard key press
ipcMain.on('press-key', (event, keyData) => {
  try {
    const robot = require('robotjs');
    const { key, modifiers } = keyData;
    if (modifiers && modifiers.length > 0) {
      robot.keyTap(key, modifiers);
    } else {
      robot.keyTap(key);
    }
    console.log(`[KEY] Pressed: ${modifiers ? modifiers.join('+') + '+' : ''}${key}`);
  } catch (err) {
    console.error('robotjs error:', err.message);
  }
});

// IPC: window controls
ipcMain.on('close-app', () => app.quit());
ipcMain.on('minimize-app', () => mainWindow.minimize());
ipcMain.on('toggle-always-on-top', (event, val) => {
  mainWindow.setAlwaysOnTop(val, 'screen-saver');
});
