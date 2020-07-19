const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
require('dotenv').config()

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: process.env.API_URL
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
