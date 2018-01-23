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

const Promise = require('bluebird')
const express = require('express')
const { version } = require('../../package')

const router = module.exports = express.Router()

router.route('/')
  .get((req, res, next) => {
    return Promise
      .try(() => {
        const user = req.user
        res.send({version, user})
      })
      .catch(next)
  })

module.exports = {
  '/info': router,
  '/seeds': require('./seeds'),
  '/namespaces': require('./namespaces'),
  '/namespaces/:namespace/shoots': require('./shoots'),
  '/namespaces/:namespace/infrastructure-secrets': require('./infrastructureSecrets'),
  '/namespaces/:namespace/members': require('./members')
}
