const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'lvtnav',
  name: 'lvnav',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    volume: Number,

    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,

    updates: Number
  },

})
