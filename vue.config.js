const isLib = process.argv.indexOf('lib') > -1;

module.exports = {
  outputDir: 'docs',
  publicPath: '.',
  transpileDependencies: ['vue-js-popover'],
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    if (isLib) {
      const svg = config.module.rule('svg');
      const fonts = config.module.rule('fonts');

      svg.uses.clear();
      fonts.uses.clear();

      svg.use('url-loader').loader('url-loader').options({ limit: 32768 });
      fonts.use('url-loader').loader('url-loader').options({ limit: 100000 });
    }
  },
};
