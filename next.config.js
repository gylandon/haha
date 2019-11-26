const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
module.exports = withPlugins([withImages],{
  webpack: config =>{
    return config
  },
  generateBuildId: async() =>{
    return 'v1'
  },
  distDir: 'build'
})

module.exports = withCSS({
  cssModules: true
})