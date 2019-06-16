const options = {
  // folder with your views
  views: './views',
  // cache templates
  cache: true,
  // use watch = true only in dev mode! Will start webpack watcher only on the current request.
  watch: false,
  // meta info - check out https://github.com/ktquez/vue-head for more information
  metaInfo: {
    title: 'Default Title'
  },
  // extract css to file, otherwise it will be inline
  extractCSS: true,
  // css output folder, extracted styles from your *.vue files
  cssOutputPath: 'css/style.css',
  // path to your web root
  publicPath: './public',
  // global vars, access directly like window.
  globals: {
    example: 'world!'
  },
  plugins: [
    // vue plugins
    // require('your-plugin')
  ],
  compilerConfig: {
    // custom webpack config
  },
  compilerConfigCallback: function(webpackConfig) {
    // change the merged webpackconfig if you like
    return webpackConfig;
  },
  onError: err => {}, // error handler
  onReady: () => {} // ready event handler, when completed the work of initialization
};
