var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'

            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }

        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    ]
}