const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'currencies',
  name: 'Currencies',
  type: MODEL_TYPES.COLLECTION,
  schema: {
    exchange: String,
    currency: String,
    networks: Array,
    contexts: Array,
  }
})
