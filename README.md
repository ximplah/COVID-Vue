# COVID IN REACT

- Demo <a href="https://covid.ngaah.id/"> COVID.NGAAH.ID </a>


<img src="https://raw.githubusercontent.com/ximplah/COVID-REACT-Screenshoot/master/1.png"></img>
<img src="https://raw.githubusercontent.com/ximplah/COVID-REACT-Screenshoot/master/2.png"></img>
<img src="https://raw.githubusercontent.com/ximplah/COVID-REACT-Screenshoot/master/4.png"></img>
<img src="https://raw.githubusercontent.com/ximplah/COVID-REACT-Screenshoot/master/5.png"></img>
<img src="https://raw.githubusercontent.com/ximplah/COVID-REACT-Screenshoot/master/6.png"></img>

GET : /api/worldcase () =>

            {
              "total_case": 785777,
              "today_case": 1062,
              "total_death": 37815,
              "today_deaths": 32,
              "total_recovered": 165607,
              "total_active_case": 582355
            }
          
GET : /api/worldlist () =>

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
          
GET : /api/world/pie (Pie Chart) =>

              [
                785777, //case
                1062, // todaycase
                37815, //death
                32, // today death
                165607, // total_recovered
                582355 // activeCase
              ]
          
GET : /api/world/chart (Line Chart) =>

              [
                {
                  "date": "2020-3-1",
                  "cases": 88369,
                  "recovered": 42716,
                  "deaths": 2996
                },
                ..... 
              }
          
GET : /api/case/:country ex: Indonesia (Line Chart) =>

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
          
GET : /api/pie/:country ex: Indonesia (Line Chart) =>

            [
              1414,
              122,
              75,
              1217,
              0
            ]
          
GET : /api/chart/:country ex: Indonesia (Line Chart) =>

           [
            {
              "cases": 0,
              "deaths": 0,
              "recovered": 0,
              "date": "2020-3-1"
            },
            ......
            ]
          
GET : /api/data/:country ex: Indonesia (Line Chart) =>

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
          
