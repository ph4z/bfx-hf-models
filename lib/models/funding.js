const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'funding',
  name: 'funding',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    rate: Number
  },

  requiredMethods: [
    'syncRange',
    'auditGaps'
  ]
})
