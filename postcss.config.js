module.exports = {
  'plugins': {
    'autoprefixer': {},
    'postcss-import': {},
    'postcss-url': {},
    'postcss-initial': {
      'reset': 'initial'
    },
    'postcss-aspect-ratio-mini': {},
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      'viewportWidth': '750',
      'unitPrecision': '3',
      'viewportUnit': 'vw',
      'selectorBlackList': [
        '.ignore',
        '.hairlines'
      ],
      'minPixelValue': 1,
      'mediaQuery': false
    },
    'cssnano': {
      'preset': 'advanced',
      'autoprefixer': false,
      'postcss-zindex': false
    }
  }
}
