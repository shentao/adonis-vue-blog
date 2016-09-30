'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

  * signup (request, response) {
    const username = request.input('username')
    const email = request.input('email')
    const password = request.input('password')

    const user = yield User.create({
      username,
      email,
      password: yield Hash.make(password)
    })

    const token = yield this._generateToken(request, user)

    response.json({
      user: {
        email: user.email,
        username: user.username,
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname
      },
      token
    })
  }

  * login (request, response) {
      const email = request.input('email')
      const password = request.input('password')

      const basicAuth = request.auth.authenticator('basic')

      try {
        yield basicAuth.validate(email, password)
        const user = yield User.query().where('email', email).first()
        const token = yield this._generateToken(request, user)

        delete user.password

        response.json({
          user: {
            email: user.email,
            username: user.username,
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname
          },
          token
        })
      } catch (e) {
        response.unauthorized('Invalid credentails')
      }
  }

  * _generateToken(request, user) {
    return yield request.auth.generate(user);
  }
}

module.exports = UserController
