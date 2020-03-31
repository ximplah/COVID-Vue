'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Case extends Model {

    static get table () {

        return 'caselists'
    
    }

    static boot() {
        super.boot()
    
        this.addTrait("@provider:Lucid/UpdateOrCreate")
      }
      
}

module.exports = Case
