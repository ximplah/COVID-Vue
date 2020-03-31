'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RunSchema extends Schema {
  up () {
    this.create('runs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('runs')
  }
}

module.exports = RunSchema
