# Offline Field Recorder

A no-server, offline-first mobile form with browser IndexedDB storage, service-worker caching, and CSV export for RStudio. No R/Shiny runtime is required on your phone.

## Set up on a phone

1. Upload **all four app files** (`index.html`, `sw.js`, `manifest.webmanifest`, `icon.svg`) unchanged to an HTTPS static website (for example, GitHub Pages). Do not upload the R file as part of the public website unless you intend to share it.
2. Visit the HTTPS website once while connected to the internet; wait for it to finish loading. On iPhone use Safari > Share > Add to Home Screen; on Android use Chrome > menu > Install app / Add to Home screen (wording varies).
3. Open the installed app with a connection once. Confirm the app works after switching on Airplane Mode: reload/open it, save a test record, close it, reopen it, and verify the test record remains.
4. Enter records without internet. Export CSV regularly. Use your phone's Files/Downloads/Share options to transfer the CSV to your computer, e.g. with USB or AirDrop.
5. Run `import_in_RStudio.R` in RStudio to load and inspect the CSV.

## Host with GitHub Pages (one straightforward option)

1. Create a GitHub repository, e.g. `offline-field-recorder`.
2. Add the four app files at the repository root.
3. In repository Settings > Pages, choose Deploy from a branch, select `main` and `/ (root)`, then save.
4. Open the HTTPS Pages link shown in Settings > Pages on your phone. A public Pages repository makes app code public (but locally stored records are **not uploaded** by this app). For private data or controlled distribution, select a suitable alternative hosting method.

## Notes and limitations

- A PWA needs HTTPS or localhost for service workers. Opening `index.html` directly as a file (`file://`) does **not** correctly install offline caching.
- The browser can clear/evict storage; private browsing, uninstalling the app, or clearing browser/app site data may delete records. CSV backups are essential.
- CSV download/share behavior and installation can vary between browsers and operating systems; test on your own phone before relying on it.
- Exporting does **not** delete entries. Repeated exports contain the earlier entries. The unique `id` column can be used to remove duplicates if you combine exports in R.
- No authentication or encryption layer is included. Avoid collecting sensitive personal data without adding appropriate security.
- This is a starter app; edit form fields and export columns together when customizing.
