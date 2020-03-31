'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CaseSchema extends Schema {
  up () {
    this.create('caselists', (table) => {
      table.increments()
      table.integer('country_id').unsigned().references('id').inTable('countries')
      table.text('date')
      table.integer('cases').nullable()
      table.integer('deaths').nullable()
      table.integer('recovered').nullable()
      table.integer('province_id').unsigned().references('id').inTable('provinces').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('caselists')
  }
}

module.exports = CaseSchema
