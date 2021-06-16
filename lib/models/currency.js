const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'currencies',
  name: 'Currency',
  type: MODEL_TYPES.COLLECTION,
  schema: {
    exchange: String,
    currency: String,

    exchangeData: Object
  }
})
