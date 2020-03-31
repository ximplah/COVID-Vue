'use strict'

const Case = use('App/Models/Case')
const Country = use('App/Models/Country')
const DailyCase = use('App/Models/DailyCase')
const DailyOverview = use('App/Models/DailyOverview')
const each = require('foreach');
const Database = use('Database')
const Cache = use('Cache')

class ApiController {

    /**
    * Get Total World Case COVID-19 
    */


    async getWorldData({request, response}){

        const dates = new Date().toISOString().slice(0,10)
        const WolrdData = await DailyCase.query().
        select('*').
        where('dates',dates).
        select(Database.raw('SUM(`cases`) AS total_case')).
        select(Database.raw('SUM(`todayCases`) as today_case')).
        select(Database.raw('SUM(`deaths`) as total_death')).
        select(Database.raw('SUM(`todayDeaths`) as today_deaths')).
        select(Database.raw('SUM(`recovered`) as total_recovered')).
        select(Database.raw('SUM(`active`) as total_active_case')).
        first()

        var WolrdDatas = {

            total_case: await WolrdData.total_case,
            today_case: await WolrdData.today_case,
            total_death: await WolrdData.total_death,
            today_deaths: await WolrdData.today_deaths,
            total_recovered: await WolrdData.total_recovered,
            total_active_case: await WolrdData.total_active_case
            
        }

        response.status(200).json(WolrdDatas)
        
    }

    /**
     * 
     * Get List Country
     */
    async getTableWorld({request, response}){

        
        const TableWolrd = await DailyCase.query().
        orderBy('cases','DESC')

        var data = []
        each(TableWolrd, (value, key, object) => {

            if(value.iso2 !== null){
                var iso = value.iso2
                var iso = value.iso2.toLowerCase()
            }else{
                var iso = value.iso
            }
           
            
            data.push({

                country: value.country,
                cases: value.cases,
                todayCases: value.todayCases,
                deaths: value.deaths,
                todayDeaths: value.todayDeaths,
                recovered: value.recovered,
                active: value.active,
                critical: value.critical,
                casesPerOneMillion: value.casesPerOneMillion,
                deathsPerOneMillion: value.deathsPerOneMillion,
                iso2 : iso
            
           

            })

        })
        response.status(200).json(data)

        
    }

    async WolrdPie({request, response}){

        const WolrdData = await DailyCase.query().
        select('*').
        select(Database.raw('SUM(`cases`) AS total_case')).
        select(Database.raw('SUM(`todayCases`) as today_case')).
        select(Database.raw('SUM(`deaths`) as total_death')).
        select(Database.raw('SUM(`todayDeaths`) as today_deaths')).
        select(Database.raw('SUM(`recovered`) as total_recovered')).
        select(Database.raw('SUM(`active`) as total_active_case')).
        first()

        var WolrdDatas = [

            WolrdData.total_case,
            WolrdData.today_case,
            WolrdData.total_death,
            WolrdData.today_deaths,
            WolrdData.total_recovered,
            WolrdData.total_active_case
            
        ]

        response.status(200).json(WolrdDatas)

    }

    async WolrdChart({request, response}){

        const data = await Case.query().groupBy('date').
        select(Database.raw('date, date as date')).
        select(Database.raw('cases, sum(cases) as cases')).
        select(Database.raw('recovered, sum(recovered) as recovered')).
        select(Database.raw('deaths, sum(deaths) as deaths')).
        where(Database.raw('DATEDIFF(date,NOW()) >= -30')).
        orderBy('id','ASC').
        fetch()
        return response.status(200).json(data)

    }

    async CountryCase({request, response}){

        var data = []
        var dateNow = new Date().toISOString().slice(0,10)
        var country = request.params.country
        const countries = await DailyCase.query().
            where('dates',dateNow).
            where('country',country).
            last()

            if(countries.iso2 !== null){
                var iso = countries.iso2
                var iso = countries.iso2.toLowerCase()
            }else{
                var iso = countries.iso
            }
           
            
            data.push({

                country: countries.country,
                cases: countries.cases,
                todayCases: countries.todayCases,
                deaths: countries.deaths,
                todayDeaths: countries.todayDeaths,
                recovered: countries.recovered,
                active: countries.active,
                critical: countries.critical,
                casesPerOneMillion: countries.casesPerOneMillion,
                deathsPerOneMillion: countries.deathsPerOneMillion,
                iso2 : iso
            })

        response.status(200).json(data[0])
    }

    async CountryPie({request, response}){
        var country = request.params.country
        const countries = await DailyCase.query().
            where('country',country).
            first()

        response.status(200).json([

            countries.cases, countries.deaths, countries.recovered, countries.active, countries.critical

        ])
    }

    async CountryChart({request, response})
    {
        var params = request.params
        var country = params.country
        if(country == "USA")
        {
            var country = "US"
        }
        var cases = await Case.query().
        select('cases','deaths','recovered','date').
        leftJoin('countries','countries.id','=','caselists.country_id').
        where(Database.raw('DATEDIFF(date,NOW()) >= -30')).
        where('countries.country',country).
        orderBy('caselists.id','ASC').fetch()

        return cases;
    }

    async CountryData({request, response})
    {
        var params = request.params
        var country = params.country
        if(country == "USA")
        {
            var country = "US"
        }
        var cases = await Case.query().
        select('*').
        innerJoin('countries','countries.id','=','caselists.country_id').
        where(Database.raw('DATEDIFF(date,NOW()) >= -30')).
        where('countries.country',country).
        orderBy('caselists.id','ASC').fetch()

        return cases;
    }

}

module.exports = ApiController
