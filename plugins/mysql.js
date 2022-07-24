'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.register(require('@fastify/mysql'), {
    promise: true,
    connectionString: `mysql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOSTNAME}/mydb`
  })
})
