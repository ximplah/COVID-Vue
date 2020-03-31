'use strict'

/**
 * Load External Modules
 * Moduls : node-fetch, foreach 
 */
const fetch = require('node-fetch');
var each = require('foreach');

/**
 * Load Models
 * Case, Country, DailyCase, DailyOverview
 */
const Case = use('App/Models/Case')
const Country = use('App/Models/Country')
const DailyCase = use('App/Models/DailyCase')
const DailyOverview = use('App/Models/DailyOverview')

class CronController {

    async PomberData({request, response}){

        var get = await fetch('https://pomber.github.io/covid19/timeseries.json')
        .then(res => res.json())
        

       
       // response.json(get)
        var kasus = []
        var data = []
        var i
        
        await each(get, function(value,key,object){

            data.push(value)
            Country.updateOrCreate({
                country : key,
            },
            {
                country : key,
            })
            
        })

        await each(data, function(value, key, object){

             each(value, function(val, k, o){

                val.country_id = key+1
                Case.updateOrCreate({
                    country_id : val.country_id,
                    date : val.date,
                },
                {
                    country_id : val.country_id,
                    date : val.date,
                    cases : val.confirmed,
                    deaths : val.deaths,
                    recovered : val.recovered,
                    
                })

            });

        })

        response.json({ success: true, Message: 'Cron Update Successfully!' })


    }

    async getDailyCase({request, response})
    {

        var data = await fetch('https://corona.lmao.ninja/countries')
        .then(res => res.json())
        
        each(data,function(value, key, object){

            

            value.dates = new Date().toISOString().slice(0,10)
            DailyCase.updateOrCreate({
                country : value.country,
                dates : value.dates,
            },{

                country : value.country,
                countryInfo : JSON.stringify(value.countryInfo),
                cases : value.cases,
                todayCases : value.todayCases,
                deaths : value.deaths,
                todayDeaths : value.todayDeaths,
                recovered : value.recovered,
                active : value.active,
                critical : value.critical,
                casesPerOneMillion : value.casesPerOneMillion,
                deathsPerOneMillion : value.deathsPerOneMillion,
                flag : value.countryInfo.flag,
                iso2 : value.countryInfo.iso2,
                dates : value.dates,



            })

        })

        response.json({success : true})
    }


    async getDailyOverview({request, response})
    {

        var data = await fetch('https://corona.lmao.ninja/all')
        .then(res => res.json())
        
            data.dates = new Date().toISOString().slice(0,10)
            DailyOverview.updateOrCreate({
                dates : data.dates,
            },{

                cases       : data.cases,
                deaths      : data.deaths,
                recovered   : data.recovered,
                updated   : data.updated,
                dates       : data.dates
            }) 

            response.json({success : true})
    }

}

module.exports = CronController
