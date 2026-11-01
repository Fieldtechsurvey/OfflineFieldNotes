# Field Tech Survey – Mobile Project Submit Fix (v8)

This update addresses a mobile issue where the **Submit project details** button appears to do nothing. It keeps the same IndexedDB database and existing inspection features.

Changes:
- Explicit in-page error messages identify any missing required field, rather than relying on native mobile browser validation.
- Database read/write errors appear directly under the form.
- Button displays “Saving project…” during a save and prevents duplicate taps.
- Safer unique ID fallback and refreshed service worker cache (v8).
- Large mobile-friendly submit button.

## Install
1. **Back up existing records** using the existing app's **Full project backup** before changing files.
2. Upload the contents of this ZIP to the **root** of the existing GitHub repository (`OfflineFieldNotes`), replacing matching files. Do not upload the enclosing folder as a folder.
3. Commit the files. Wait for GitHub Pages to finish deploying.
4. While online, open the published GitHub Pages app and refresh once; on a home-screen installed app, close and reopen it online. If it still uses the older version, access the Pages address in a normal browser to compare.
5. Enter all five project detail fields and press Submit. If saving is blocked, the page should display a concrete error.

**Data caution:** Existing projects live in browser storage on the device, not GitHub. Do not clear site data, uninstall the PWA, or switch storage contexts to try to fix the issue. Data is not automatically synced between phone and computer.

## Validation
JavaScript syntax was checked, and static references were checked. A full device/browser test is still recommended before field use.
