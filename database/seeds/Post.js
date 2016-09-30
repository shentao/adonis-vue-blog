'use strict'

const Factory = use('Factory')

class PostSeeder {

  * run () {
    yield Factory.model('App/Model/Post').create(5)
  }

}

module.exports = PostSeeder
