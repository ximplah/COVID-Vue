'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvinceSchema extends Schema {
  up () {
    this.create('provinces', (table) => {
      table.increments()
      table.text('province')
      table.integer('country_id').unsigned().references('id').inTable('countries').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('provinces')
  }
}

module.exports = ProvinceSchema
