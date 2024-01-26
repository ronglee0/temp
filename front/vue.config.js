const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/zwz': {
                target: 'http://demo.dooki.cc',
                ws: true
            }
        }
    },
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css/,
                threshold: 10240
            })
        ]
    }
}