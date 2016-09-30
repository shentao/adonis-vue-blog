'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {

  up () {
    this.create('posts', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostSchema
