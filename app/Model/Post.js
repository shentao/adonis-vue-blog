'use strict'

const Lucid = use('Lucid')

class Post extends Lucid {

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Post
