import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

import { fireRuntimeEvent } from '../../shared/runtimeEventBus';
import { GET_CONTENT_PERSISTED_STATE } from '../../shared/events';

Vue.use(Vuex);

export default async () => {
  const state = await fireRuntimeEvent(GET_CONTENT_PERSISTED_STATE, {});

  return new Promise(resolve => {
    resolve(
      new Vuex.Store({
        state: {
          ...state,
        },
        getters,
        mutations,
        actions,
      })
    );
  });
};
