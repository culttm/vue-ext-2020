import { browser } from './shared/runtimeEventBus';
import { GET_CONTENT_PERSISTED_STATE, SET_CONTENT_PERSISTED_STATE } from './shared/events';

global.browser = browser;

global.browser.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const { event, payload } = request;

  switch (event) {
    case GET_CONTENT_PERSISTED_STATE:
      return global.browser.storage.local.get().then(storageObject => storageObject.state);

    case SET_CONTENT_PERSISTED_STATE:
      await global.browser.storage.local.set({
        state: {
          foo: payload.foo,
        },
      });
      return payload.foo;

    default:
      return null;
  }
});
