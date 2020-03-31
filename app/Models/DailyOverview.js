'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DailyOverview extends Model {

    static get table () {

        return 'dailyoverviews'
    
    }

    static boot() {
        super.boot()
    
        this.addTrait("@provider:Lucid/UpdateOrCreate")
    }
    
}

module.exports = DailyOverview
