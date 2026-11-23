/* Field Tech Survey: casual-visitor password screen, NOT server-side security. */
(() => {
  'use strict';
  const UNLOCK_KEY = 'fieldtech-ohl-access-until-v14';
  const REMEMBER_MS = 24 * 60 * 60 * 1000;
  function rememberUnlock() {
    try { localStorage.setItem(UNLOCK_KEY, String(Date.now() + REMEMBER_MS)); } catch (_) {}
  }
  function isRemembered() {
    try {
      const until = Number(localStorage.getItem(UNLOCK_KEY));
      if (Number.isFinite(until) && until > Date.now() && until <= Date.now() + REMEMBER_MS) return true;
      localStorage.removeItem(UNLOCK_KEY);
    } catch (_) {}
    return false;
  }
  function forgetUnlock() {
    try { localStorage.removeItem(UNLOCK_KEY); } catch (_) {}
  }
  function showApp() {
    document.getElementById('accessGate').hidden = true;
    document.getElementById('applicationShell').hidden = false;
  }
  function showGate() {
    document.getElementById('accessGate').hidden = false;
    document.getElementById('applicationShell').hidden = true;
    const input = document.getElementById('accessPassword');
    input.value = '';
    document.getElementById('accessError').hidden = true;
    input.focus();
    window.scrollTo(0, 0);
  }
  window.addEventListener('DOMContentLoaded', () => {
    const gate = document.getElementById('accessGate');
    const shell = document.getElementById('applicationShell');
    const message = document.getElementById('accessError');
    const form = document.getElementById('accessForm');
    if (!gate || !shell || !form) return;
    const configured = window.FIELDTECH_ACCESS_PASSWORD;
    const validConfig = typeof configured === 'string' && configured.length >= 6 && configured !== 'REPLACE_WITH_YOUR_OWN_PASSWORD';
    if (!validConfig) {
      message.textContent = 'Access is not configured. The app owner must set a password in access-config.js before publishing.';
      message.hidden = false;
      form.querySelector('button').disabled = true;
      shell.hidden = true;
      return;
    }
    if (isRemembered()) showApp(); else showGate();
    form.addEventListener('submit', event => {
      event.preventDefault();
      const attempt = document.getElementById('accessPassword').value;
      if (attempt === configured) {
        message.hidden = true;
        rememberUnlock();
        showApp();
      } else {
        message.textContent = 'Access Denied — incorrect password.';
        message.hidden = false;
        document.getElementById('accessPassword').value = '';
        document.getElementById('accessPassword').focus();
      }
    });
    document.getElementById('lockApp').addEventListener('click', () => {
      forgetUnlock();
      showGate();
    });
  });
})();
