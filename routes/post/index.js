'use strict'

const message = []

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // const connection = await fastify.mysql.getConnection()
    // const [rows, fields] = await connection.query(
    //     'SELECT * FROM users', [],
    // )
    // connection.release()
    // return rows[0]

    reply.send(message)
  })

  fastify.post('/', async function (request, reply) {
    message.push(request.body)
    reply.send('글 쓰기 완료').status(201)
    //curl -X POST localhost:3000/post -H "content-type:application/json" -d '{"writer":"정승현", "body":"테스트"}'
  })
}

