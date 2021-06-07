const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'chartalerts',
  name: 'ChartAlerts',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    exchangeData: String
  },

})
