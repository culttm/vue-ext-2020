export const browser = require('webextension-polyfill');

export async function fireRuntimeEvent(event, payload = {}) {
  return browser.runtime.sendMessage({
    event,
    payload: { ...payload },
  });
}
