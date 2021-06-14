const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'liquidations',
  name: 'liquidations',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    liquidations: Number
  },

  requiredMethods: [
    'syncRange',
    'auditGaps'
  ]
})
