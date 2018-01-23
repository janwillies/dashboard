//
// Copyright 2018 by The Gardener Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { getSeeds } from '@/utils/api'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  items: state => state.all
}

// actions
const actions = {
  getAll: ({ commit, rootState }) => {
    const user = rootState.user
    return getSeeds({user})
      .then(res => {
        commit('RECEIVE', res.data)
        return state.all
      })
  }
}

// mutations
const mutations = {
  RECEIVE (state, items) {
    state.all = items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
