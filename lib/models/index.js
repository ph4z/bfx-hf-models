const AlgoOrder = require('./algo_order')
const Backtest = require('./backtest')
const Candle = require('./candle')
const Credential = require('./credential')
const Trade = require('./trade')
const Market = require('./market')
const ChartAlerts = require('./chartalerts')
const Strategy = require('./strategy')
const BT_Strategy = require('./bt_strategy')
const UserSettings = require('./user_settings')
const FavouriteTradingPairs = require('./favourite_trading_pairs')

module.exports = {
  AlgoOrder,
  Backtest,
  Candle,
  Credential,
  Trade,
  Market,
  Strategy,
  BT_Strategy,
  UserSettings,
  ChartAlerts,
  FavouriteTradingPairs
}
