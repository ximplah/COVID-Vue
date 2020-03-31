'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DailyCase extends Model {

    static get table () {

        return 'dailycases'
    
    }

    static get hidden()
    {
        return ['countryInfo','flag','created_at','updated_at','id']
    }

    static boot() {
        super.boot()
    
        this.addTrait("@provider:Lucid/UpdateOrCreate")
    }
}

module.exports = DailyCase
