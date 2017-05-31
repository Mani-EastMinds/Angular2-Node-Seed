var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            './src' // location of your. Refer to src https://github.com/angular/angular.io/issues/3514
        )
    ]
}