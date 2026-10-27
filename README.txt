FIELD TECH SURVEY — OHL INSPECT
Android offline inspection app (static Progressive Web App)

INSTALL/UPDATE ON GITHUB PAGES
1. Open the GitHub repository fieldtechsurvey/OfflineFieldNotes.
2. On the Code tab, upload/replace ALL SIX website files in the repository root:
   index.html, app.js, style.css, sw.js, manifest.webmanifest, icon-192.png, icon-512.png
   (There are seven website files; upload all seven.)
3. Commit changes. GitHub Pages Settings should show main branch / (root).
4. Open https://fieldtechsurvey.github.io/OfflineFieldNotes/ on Android Chrome while online.
5. Add to home screen / Install app, and open it again.
6. IMPORTANT: With internet active first, reload the installed app once after updating.
7. Test in Airplane Mode: save an inspection, close/reopen, inspect Saved records and Export CSV.

DATA / PRIVACY
- Saved records and optional compressed photographs are in this Android browser's IndexedDB.
- The current project's details are remembered in browser localStorage.
- No collected inspection data is uploaded to GitHub. Uploaded website SOURCE is public.
- Photos can be downloaded individually from Saved records; CSV contains photo filenames,
  not photo contents. Use 'Export full backup (with photos)' to save all data as JSON.
- Download CSV regularly and keep a second, secure backup of your photos/JSON.
- Uninstalling, clearing site data, browser cleanup, storage pressure or phone loss can remove
  saved data. Browser-local data is not a guaranteed permanent archive.
- All local data is specific to this device/browser/site origin. Another phone won't see it.

WORKFLOW
1. Fill in Project name, Inspector, Project number, Carried out for and Overhead line.
2. Enter Pole number and/or Field ID (at least one required).
3. Free from defects? Yes / No.
4. If No, add one or many faults. Each needs a category, type and its own remarks.
5. Optionally take/select a photo. One photo per pole inspection in this version.
6. Save inspection; project details stay filled for the next pole.
7. Saved records → Export CSV for RStudio.

R IMPORT
Open import_in_RStudio.R in RStudio and run it, selecting the transferred CSV.
CSV uses one row for each fault, with repeat project/pole details. Defect-free
inspection gets one row with blank fault fields.

UPDATES
The service worker version is fieldtech-ohl-v2. After publishing new code, reload while
online before testing offline. Do not clear app data to force an update: that would risk
removing records. Export backup BEFORE making future changes.
