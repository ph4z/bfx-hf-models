const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'lsratio',
  name: 'LSRatio',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    ratio: Number
  },

})
