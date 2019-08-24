const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../public'),
    devServer: {
        proxy: {
            '/recipes': {
                target: 'http://localhost:5000'
            },
            '/users': {
                target: 'http://localhost:5000'
            }
        }
    }
}