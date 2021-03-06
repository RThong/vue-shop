const autoprefixer = require('autoprefixer')
const pxToViewport = require('postcss-px-to-viewport')

module.exports = {
  plugins: [
    autoprefixer(),
    pxToViewport({
    	viewportWidth: 375,
    	selectorBlackList: [/^.app-view-wrapper$/,/^.swiper-pagination-switch$/]
    })
  ]
}