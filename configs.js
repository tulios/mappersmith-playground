module.exports = {
  env: process.env['NODE_ENV'] || 'development',
  output: './build/public/assets',
  componentsPath: './src/client/components',
  js: {
    vendor: [
      'jquery',
      'react',
      'mappersmith',
      './src/vendor.js',
      'velocity-animate',
      'mappersmith-cached-gateway'
    ],
    alias: {
      'app': './src/client',
      'materialize-dropdown$': './src/vendor/materialize-dropdown',
      'materialize-select$': './src/vendor/materialize-select'
    }
  },

  css: {
    files: [
      './src/stylesheets/normalize.css',
      './src/stylesheets/materialize.scss',
      './src/client/components/widgets/**/**/*.css',
      './src/client/components/widgets/**/**/*.scss',
      './src/client/components/views/**/**/*.css',
      './src/client/components/views/**/**/*.scss'
    ],
    includes: [
      './src/stylesheets/app'
    ]
  }
}
