'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DailyOverviewSchema extends Schema {
  up () {
    this.create('dailyoverviews', (table) => {
      table.increments()
      table.integer('cases')
      table.integer('deaths')
      table.integer('recovered')
      table.text('updated')
      table.text('dates')
      table.timestamps()
    })
  }

  down () {
    this.drop('dailyoverviews')
  }
}

module.exports = DailyOverviewSchema
