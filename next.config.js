// This file enables for the imports to call without the first part of the path - '../' on the pages 'styles', 'public' & 'components'
// and also enables the use of environment variables with 'dotenv' module

const path = require('path')
require('dotenv').config()

module.exports = {
  env:{
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['public'] = path.join(__dirname, 'public')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    

    return config
  }
}