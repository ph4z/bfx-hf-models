const AlgoOrder = require('./algo_order')
const Backtest = require('./backtest')
const Candle = require('./candle')
const Credential = require('./credential')
const Trade = require('./trade')
const Market = require('./market')
const Currency = require('./currency')
const ChartAlerts = require('./chartalerts')
const openInterest = require('./ointerest')
const funding = require('./funding')
const LSRatio = require('./lsratio')
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
  Currency,
  Strategy,
  BT_Strategy,
  UserSettings,
  ChartAlerts,
  openInterest,
  LSRatio,
  funding,
  FavouriteTradingPairs
}
