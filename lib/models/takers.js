const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'takers',
  name: 'takers',
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

  requiredMethods: [
    'syncRange',
    'auditGaps'
  ]
})
