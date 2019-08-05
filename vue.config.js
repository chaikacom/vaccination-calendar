const isLib = process.argv.indexOf('lib') > -1;
const mode = process.env.NODE_ENV;

module.exports = {
  outputDir: 'docs',
  publicPath: '.',
  transpileDependencies: ['vue-js-popover'],
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  css: {
    extract: (mode === 'development') || isLib ? false : true,
  },
  chainWebpack: (config) => {
    const svgInline = config.module.rule('svg-inline');
    svgInline
      .test(/\.svg-inline$/)
      .use('svg-inline-loader')
      .loader('svg-inline-loader');

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
