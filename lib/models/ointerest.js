const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'ointerest',
  name: 'openInterest',
  type: MODEL_TYPES.COLLECTION,
  index: 'key',
  indexMatches: ['key'],
  schema: {
    exchange: String,
    symbol: String,
    tf: String,
    mts: Number,
    interest: Number
  },

  requiredMethods: [
    'syncRange',
    'auditGaps'
  ]
})
