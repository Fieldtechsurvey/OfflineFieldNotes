# Field Tech Survey — Project buttons and offline update fix (v7)

This is an update to the existing **OfflineFieldNotes** GitHub Pages app. It does **not** change the IndexedDB database name or existing records.

## Before updating

1. On your current app, export **Full project backup (JSON)** including photographs, and keep it safe. If existing buttons are broken, use another working device/browser where your records are available, or fix the site first without clearing browser data.
2. Extract this ZIP. In GitHub repository **OfflineFieldNotes**, use **Add file → Upload files** and upload the extracted files **inside the folder**, into the repository root (not the folder or ZIP itself). Commit changes to `main`.
3. In GitHub, check **Actions** for Pages deployment completion, then open `https://fieldtechsurvey.github.io/OfflineFieldNotes/` while online. Refresh the page. If the old interface remains, close the tab, reopen the URL and refresh again. **Do not clear site data or uninstall the app**, as doing so can delete locally stored inspections.
4. Confirm the new large blue buttons work. Create a TEST project, add a test inspection, exit, load the test project and verify the saved inspection.
5. Test offline use after opening the new version online once.

## What changed

- Two large, blue, touch-friendly buttons for **Create a New Project** and **Load an Existing Project**.
- Versioned CSS/JS URLs in `index.html` to avoid stale assets from the old service worker.
- Service-worker version 7 now fetches newer files when online, falling back to cached files when offline.
- Existing forms, project and inspection storage, reports, exports, photographs and branding retained.

## Important

Projects and photos are saved in **the browser's IndexedDB on that device**, not in GitHub. To move projects between devices, use the app's full JSON backup/restore. Unsaved form entries are not preserved. Do not delete browser storage while changing versions.
