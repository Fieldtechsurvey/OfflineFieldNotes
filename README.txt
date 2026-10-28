FIELD TECH SURVEY — OHL INSPECT v5

Upload these seven website files to the ROOT of the existing GitHub Pages repository: index.html, app.js, style.css, sw.js, manifest.webmanifest, icon-192.png, icon-512.png.
Keep your existing installed app and browser storage: never clear app data to update.
Back up existing records before upgrading and test with sample data.

CSV: One row per inspection with numbered fault category/type/remarks columns. Photos are not in CSV; use Full Backup (JSON) to preserve photographs.

EMAIL: Android's sharing interface may allow an email app to receive the CSV attachment. Email recipient is entered in the app, but you must select your email app, check the To field and press Send. If the Android sharing API does not support files, the app downloads the CSV and opens an email draft; attach the downloaded CSV manually. Internet is required to actually send an email, not to collect records or create CSV files.

Exit Project goes directly to project selection unless unsaved form content is present. Deleting a project uses one final confirmation and deletes all its records and photos.

Use import_in_RStudio.R for the exported CSV.
