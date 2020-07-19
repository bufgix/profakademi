const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: 'http://localhost:1337'
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
