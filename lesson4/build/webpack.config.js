/*
 * @Descripttion:webpack配置入口
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:45:06
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-18 01:04:09
 */
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

let config = process.NODE_ENV === 'development' ? devConfig : prodConfig

module.exports = merge(baseConfig, config)