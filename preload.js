// Preload script runs in an isolated context with access to Node APIs.
// The AFMAN Hazmat Reference UI is fully self-contained (plain HTML/CSS/JS,
// no external calls at runtime), so no extra bridge APIs are needed yet.
// Add contextBridge.exposeInMainWorld() calls here if the app needs native
// file-system access later.
