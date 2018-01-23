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

'use strict'

const nock = require('nock')

exports = module.exports = init
exports.oidc = require('./oidc')
exports.k8s = require('./k8s')
exports.verify = verify
exports.reset = reset

function init () {
  nock.disableNetConnect()
  nock.enableNetConnect('127.0.0.1')
  return exports
}

function verify () {
  /* eslint no-unused-expressions: 0 */
  if (!nock.isDone()) {
    console.error('pending mocks: %j', nock.pendingMocks())
  }
  expect(nock.isDone()).to.be.true
}

function reset () {
  nock.cleanAll()
}
