# Field Tech Survey — OHL Inspect — Technical Design v9

## What changed
- New branded drone / LiDAR / OHL graphic and technical navy/cyan visual theme.
- Large, accessible Create New Project and Load Existing Project actions for phones.
- Original v8 project, inspection, photo, export, and IndexedDB logic retained unchanged.
- Cache version increased to v9 for update delivery; offline hero graphic is cached.
- No pole totals or route kilometre estimates required.

## Installation in existing GitHub repository
1. **First export a full JSON backup** of your existing inspections (including photos).
2. Extract the ZIP and upload its **contents** to the ROOT of `OfflineFieldNotes` via Add file → Upload files. Overwrite matching existing files. Do not upload the enclosing folder.
3. Commit changes on `main`; check Actions / Pages for deployment success.
4. Open `https://fieldtechsurvey.github.io/OfflineFieldNotes/` online on your phone and refresh.
5. Test creating a sample project, saving an inspection, exiting, and loading it again. Test once offline too.

## Local data warning
The project database remains `fieldtech-ohl-v1` and has NOT been reset or renamed. Records remain stored **on each device**, not GitHub. Switching devices does not synchronise projects. Preserve exported JSON backups and avoid clearing site data or uninstalling the app.

## Validation
JavaScript syntax has been checked; full deployment, phone browser, and IndexedDB persistence tests must be performed on the target device.
