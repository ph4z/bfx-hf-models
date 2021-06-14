const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'composite',
  name: 'composite',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    assets: Array
  },

})
