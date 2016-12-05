import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpack.config.babel'

export default function () {
    webpackConfig.entry.index.unshift('webpack-dev-server/client?http://localhost:8080/')

    new webpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.publicPath,

        // terminal config
        quiet: false,
        noInfo: false,
        stats: {
            colors: true
        }
    }).listen(port, function () {
        console.log('Bundling project, please wait...');
    });
};
