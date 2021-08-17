/*
 * @Descripttion: webpack公共环境配置
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-08-18 00:45:21
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-08-18 01:14:53
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'../', 'src/index.ts'),
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js','.ts', '.tsc']
    },
    module: {
        rules: [
            {
                test: /\.tsc?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modeuls/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../', 'tpl/index.html')
        })
    ]
}