FIELD TECH SURVEY - OHL INSPECT - 24-HOUR REMEMBERED LOGIN (v14)

Update from v13. This patch includes ONLY the three files that changed:
- index.html
- access.js
- sw.js

The login now remembers successful unlock for 24 hours on that browser/device, even if you close/reopen the app. After 24 hours, it asks again. The Lock button cancels the remembered unlock immediately. It DOES NOT store your plaintext password in browser storage; it stores an expiry timestamp.

This is ONLY a casual visitor deterrent. The repository and public JavaScript remain accessible; this is NOT secure authentication.

To update GitHub:
1. Export a full JSON backup of inspection records before changing anything.
2. Extract these files and upload to the ROOT of OfflineFieldNotes via Add file > Upload files, replacing the three matching filenames.
3. DO NOT change or delete access-config.js, app.js, or your browser's stored data.
4. Commit to main. When GitHub Pages finishes deploying, open the site online and refresh it once to install v14.
5. Test: enter the password, close and reopen the app (no prompt within 24 hours). Click Lock (password immediately required). The password is requested again when the 24-hour interval has passed.

The 24-hour period starts from a successful password entry; regular openings DO NOT reset the clock.

Existing inspection projects are unaffected. If local storage is disabled, the app will ask for the password each time.
