'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')


/**
 *  Route for Cron Jobs
 */
Route.get('/cron/pomber','CronController.PomberData')
Route.get('/cron/dailycase','CronController.getDailyCase')
Route.get('/cron/dailyoverview','CronController.getDailyOverview')

/**
 * Route for API
 */

 Route.get('/api/worldcase','ApiController.getWorldData')
 Route.get('/api/worldlist','ApiController.getTableWorld')
 Route.get('/api/world/pie','ApiController.WolrdPie')
 Route.get('/api/world/chart','ApiController.WolrdChart')
 Route.get('/api/case/:country','ApiController.CountryCase').as('country')
 Route.get('/api/pie/:country','ApiController.CountryPie').as('country')
 Route.get('/api/chart/:country','ApiController.CountryChart').as('country')
 Route.get('/api/data/:country','ApiController.CountryData').as('country')



Route.any('*', 'NuxtController.render')

/**
 * Router For Cron Jobs
 */

