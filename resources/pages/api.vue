<template>

  <div class="container-fluid">


    <br /><br /><br /><br /><br /><br /><br />
        <div class="card bg-primary mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              
              <div class="text-white">
                <h4 class="text-white"> COVID-19 Api </h4>
              </div>
              <div class="mini-stat-icon"><i class="fas fa-map-marker display-2"></i></div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm12">

          <div class="card">

              <div class="card-title">
                <h5 align="center"> Api Documentation </h5>
              </div>

              <div class="card-body">

            <div class="jumbotron">
            <strong><h5>GET : /api/worldcase () =></h5></strong>
            <pre><code>
              {
                "total_case": 785777,
                "today_case": 1062,
                "total_death": 37815,
                "today_deaths": 32,
                "total_recovered": 165607,
                "total_active_case": 582355
              }
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/worldlist () =></h5></strong>
            <pre><code>
              [
                {
                  "country": "USA",
                  "cases": 164253,
                  "todayCases": 409,
                  "deaths": 3165,
                  "todayDeaths": 9,
                  "recovered": 5506,
                  "active": 155582,
                  "critical": 3512,
                  "casesPerOneMillion": 496,
                  "deathsPerOneMillion": 10,
                  "iso2": "us"
                },
                ...
              ]
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/world/pie (Pie Chart) =></h5></strong>
            <pre><code>
                [
                  785777, //case
                  1062, // todaycase
                  37815, //death
                  32, // today death
                  165607, // total_recovered
                  582355 // activeCase
                ]
            </code></pre>
            </div>


            <div class="jumbotron">
            <strong><h5>GET : /api/world/chart (Line Chart) =></h5></strong>
            <pre><code>
                [
                  {
                    "date": "2020-3-1",
                    "cases": 88369,
                    "recovered": 42716,
                    "deaths": 2996
                  },
                  ..... 
                }
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/case/:country ex: Indonesia (Line Chart) =></h5></strong>
            <pre><code>
              {
                "country": "Indonesia",
                "cases": 1414,
                "todayCases": 0,
                "deaths": 122,
                "todayDeaths": 0,
                "recovered": 75,
                "active": 1217,
                "critical": 0,
                "casesPerOneMillion": 5,
                "deathsPerOneMillion": 0,
                "iso2": "id"
              }
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/pie/:country ex: Indonesia (Line Chart) =></h5></strong>
            <pre><code>
              [
                1414,
                122,
                75,
                1217,
                0
              ]
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/chart/:country ex: Indonesia (Line Chart) =></h5></strong>
            <pre><code>
             [
              {
                "cases": 0,
                "deaths": 0,
                "recovered": 0,
                "date": "2020-3-1"
              },
              ......
              ]
            </code></pre>
            </div>

            <div class="jumbotron">
            <strong><h5>GET : /api/data/:country ex: Indonesia (Line Chart) =></h5></strong>
            <pre><code>
             [
              {
                "id": 73,
                "country_id": 73,
                "date": "2020-3-1",
                "cases": 0,
                "deaths": 0,
                "recovered": 0,
                "province_id": null,
                "created_at": "2020-03-31 11:01:53",
                "updated_at": "2020-03-31 11:01:53",
                "country": "Indonesia"
              },
              ......
              ]
            </code></pre>
            </div>



            </div>

           
          </div>

          

        </div>

  </div>
</template>

<script>


export default {


  head() {

    return { 

      title : "API COVID-19 Ngaah.id"

    }

  }


}


</script>

