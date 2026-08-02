# AFMAN Hazmat Reference

An offline, client-side reference tool for AFMAN 24-604 hazardous materials
info, wrapped as a Windows desktop app with
[Electron](https://www.electronjs.org/). The UI (`src/index.html`) is a
single self-contained page — no server, no network calls, no external
dependencies.

**Not an official or authoritative source.** This is a personal quick-reference
tool, not the actual regulation — always confirm against the current
published AFMAN 24-604 and your unit's guidance.

## Project structure

```
afman-hazmat-reference/
├── src/
│   └── index.html            # the app UI (self-contained)
├── build/
│   ├── icon.ico               # Windows app icon
│   └── icon.png
├── main.js                    # Electron main process
├── preload.js                 # Electron preload script
├── package.json                # app + electron-builder config
└── .github/workflows/build.yml   # CI: builds .exe/.msi installers
```

## Run it locally

```bash
npm install
npm start
```

## Build a Windows installer

Windows installers (NSIS `.exe` and `.msi`) must be built on Windows, or on
CI. Locally on Windows:

```bash
npm install
npm run dist:win     # builds both .exe and .msi into dist/
npm run dist:exe     # NSIS .exe installer only
npm run dist:msi     # MSI installer only
```

The installers are written to `dist/`.

### Automatic builds via GitHub Actions

Push this repo to GitHub and the workflow in
`.github/workflows/build.yml` builds both installers on a
`windows-latest` runner. Grab the results from:

- **Actions tab → latest run → Artifacts**, for every push, or
- **Releases**, when you push a tag like `v1.0.0` (the workflow attaches
  the `.exe` and `.msi` to the release automatically).

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/afman-hazmat-reference.git
git push -u origin main
```

Then tag a release to trigger an installer build:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Updating the icon

`build/icon.png` and `build/icon.ico` are placeholders. Swap in your own
256x256 PNG (and a matching multi-size .ico) and rebuild.

## License

MIT — see [LICENSE](LICENSE). The AFMAN 24-604 content referenced/embedded
in the app is a U.S. government work; the MIT license here covers only this
wrapper/app code.
