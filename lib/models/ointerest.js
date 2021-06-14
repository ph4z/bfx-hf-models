const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'openinterest',
  name: 'openInterest',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    interest: Number,
    symbol: String,
    tf: String,
    mts: Number,
    exchangeData: String
  },

})
