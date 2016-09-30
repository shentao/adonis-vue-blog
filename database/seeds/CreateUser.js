'use strict'

const Factory = use('Factory')

class CreateUserSeeder {

  * run () {
    yield Factory.model('App/Model/User').create(1)
  }

}

module.exports = CreateUserSeeder
