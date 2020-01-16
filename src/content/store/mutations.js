import * as types from './mutation-types';
import { fireRuntimeEvent } from '../../shared/runtimeEventBus';
import { SET_CONTENT_PERSISTED_STATE } from '../../shared/events';

export default {
  async [types.UPDATE_FOO](state, payload) {
    state.foo = await fireRuntimeEvent(SET_CONTENT_PERSISTED_STATE, {
      foo: payload,
    });
  },
};
