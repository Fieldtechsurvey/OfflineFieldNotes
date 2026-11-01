# Field Tech Survey — OHL Inspect (project start screen update)

This update is based on the supplied **Field Tech Survey OHL** GitHub Pages app.

## What changed

- The opening screen now shows **Create a New Project** and **Load an Existing Project**.
- Choosing Create reveals the existing project-details form.
- Choosing Load reveals saved projects and JSON backup restoration.
- Exiting a project returns to the two-choice opening screen.
- Saving an inspection also updates the project's last-edited timestamp so recently used projects appear first.
- The service-worker cache name was incremented to load the updated page files.

All existing inspection fields, severity choices, photograph handling, IndexedDB database name/version, exports and backup format are retained. No total pole count or total route distance is required.

## Deploy to the existing GitHub repository

**Before updating:** Open your current app on the original device/browser, export a **Full project backup (with photos)** / **Full backup**, and keep the downloaded JSON file in a safe place.

1. Open your **OfflineFieldNotes** repository on GitHub.
2. Upload or replace the files from this package into the **root** of the `main` branch. In particular, replace `index.html`, `app.js`, `style.css` and `sw.js` with the supplied versions. Other supplied assets are unchanged copies of your originals.
3. Commit the changes. Your existing GitHub Pages deployment should rebuild automatically.
4. Visit your GitHub Pages app online and refresh it. If the old opening screen still appears, fully close and reopen the installed app after it has been online; the service worker may need one reload to activate. Do **not** clear site data or uninstall to force an update.
5. Confirm the opening screen has two choices. Load a previously saved project, add a test inspection, exit, reload the app, load the project again and check the saved inspection remains available.
6. Test that an exported JSON backup can be restored on a separate test browser/profile. Keep your real production data safe.

## Important: where saved work lives

GitHub Pages publishes the app **code only**. The inspection records and compressed photos remain in **IndexedDB on the device and browser profile** where they were saved. A project saved on one phone will **not automatically appear on another phone or desktop**. To move it, export a full JSON backup on the original device and restore it on the destination device.

Browsers can remove local data. Back up projects regularly. A normal GitHub Pages code update should not erase IndexedDB if the site origin stays the same, but you should still export a backup first.

The Save Inspection button saves each complete pole record. The current version does **not** autosave unfinished form entries; closing an unfinished entry can lose unsaved edits. Exit Project warns about unsaved form content.

## Files

- `index.html`, `app.js`, `style.css`: website/interface and project storage logic
- `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon.svg`: offline install and branding
- `import_in_RStudio.R`: optional desktop CSV import helper
