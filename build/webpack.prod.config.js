/*
 * @Descripttion: webpack生产环境配置
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:46:12
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-18 01:10:37
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin({})
    ]
}