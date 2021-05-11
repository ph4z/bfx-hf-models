const MODEL_TYPES = require('../model_types')

module.exports = () => ({
  path: 'bt_strategies',
  name: 'BT_Strategy',
  type: MODEL_TYPES.MAP,
  schema: {
    id: String,

    label: String,
    editor: String,
    cryptedLabel: String,

    params: String,
    init: String,
    next: String,
    nextstart: String,
    prenext: String,
    start: String,
    stop: String,

    exchangeData: Object
  },

  mapKey: ({ id }) => id
})
