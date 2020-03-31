'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DailyCaseSchema extends Schema {
  up () {
    this.create('dailycases', (table) => {
      table.increments()
      table.text('country')
      table.json('countryInfo')
      table.integer('cases')
      table.integer('todayCases')
      table.integer('deaths')
      table.integer('todayDeaths')
      table.integer('recovered')
      table.integer('active')
      table.integer('critical')
      table.integer('casesPerOneMillion')
      table.integer('deathsPerOneMillion')
      table.text('dates')
      table.text('flag')
      table.text('iso2')
      table.timestamps()
    })
  }

  down () {
    this.drop('dailycases')
  }
}

module.exports = DailyCaseSchema
