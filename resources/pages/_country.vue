<template>
  <div class="container-fluid">


    <br /><br /><br /><br /><br /><br /><br />


    <div class="card bg-primary mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              
              <div class="text-white">
                 
                <h4 class="text-white fas fa-ambulance"> COVID-19 Monitoring <br/>    <hr/> <strong> <span v-if="country_data.iso2 !== null" v-bind:class="'flag-icon flag-icon-'+ country_data.iso2"></span> {{country}} </strong> </h4>
              </div>
              <div class="mini-stat-icon"><i class="mdi mdi-cube-outline display-2"></i></div>
            </div>
          </div>
        </div>
    
    <div class="row">
      <div class="col-xl-2 col-md-6">
        <div class="card bg-danger mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Total Case</h6>
                <slot v-if="country_data">
                <h3 class="mb-3 mt-0">{{ country_data.cases }}</h3>
                </slot>
              </div>
              <div class="mini-stat-icon"><i class="fas fa-ambulance display-2"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-md-6">
        <div class="card bg-warning mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Today Case</h6>
                <h3 class="mb-3 mt-0">+ {{ country_data.todayCases }}</h3>

              </div>
              <div class="mini-stat-icon"><i class="fas fa-ambulance display-2"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-2 col-md-6">
        <div class="card bg-dark mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Total Deaths</h6>
                <h3 class="mb-3 mt-0">{{ country_data.deaths }}</h3>
              </div>
              <div class="mini-stat-icon"><i class="fas fa-procedures display-2"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-md-6">
        <div class="card bg-dark mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Today Deaths</h6>
                <h3 class="mb-3 mt-0">+ {{ country_data.todayDeaths }}</h3>
              </div>
              <div class="mini-stat-icon"><i class="fas fa-procedures display-2"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-md-6">
        <div class="card bg-success mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Total Recovered</h6>
                <h3 class="mb-3 mt-0">{{ country_data.recovered }}</h3>
              </div>
              <div class="mini-stat-icon"><i class="mdi mdi-briefcase-check display-2"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-2 col-md-6">
        <div class="card bg-primary mini-stat position-relative">
          <div class="card-body">
            <div class="mini-stat-desc">
              <h6 class="text-uppercase verti-label text-white-50">{{ country }}</h6>
              <div class="text-white">
                <h6 class="text-uppercase mt-0 text-white-50">Active Case</h6>
                <h3 class="mb-3 mt-0">{{ country_data.active }}</h3>
              </div>
              <div class="mini-stat-icon"><i class="fas fa-stethoscope display-2"></i></div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!---  Chart Element -->

    <div class="row">
      <div class="col-xl-4">
        <div class="card m-b-20">
          <div class="card-body">
            <h4 class="mt-0 header-title">Case Chart</h4>
           <div class="bar-chart">
            <BarChart :data="CaseChart" :options="{ maintainAspectRatio: false }" />
          </div>
          </div>
        </div>
      </div><!-- end col -->
     
     <div class="col-xl-4">
        <div class="card m-b-20">
          <div class="card-body"><iframe class="chartjs-hidden-iframe"
              style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe><iframe
              class="chartjs-hidden-iframe"
              style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe>
            <h4 class="mt-0 header-title">Death Chart</h4>
            <BarChart :data="DeathChart" :options="{ maintainAspectRatio: false }" />
          </div>
        </div>
      </div><!-- end col -->

      <div class="col-xl-4">
        <div class="card m-b-20">
          <div class="card-body">
            <h4 class="mt-0 header-title">Recovered Chart</h4>
            <BarChart :data="RecoveredChart" :options="{ maintainAspectRatio: false }" />
          </div>
        </div>
      </div><!-- end col -->


      <div class="col-xl-12">
        <div class="card m-b-20">
          <div class="card-body">
            <h4 class="mt-0 header-title">Compare Chart</h4>
            <BarChart :data="CompareChart" :options="{ maintainAspectRatio: false }" />
          </div>
        </div>
      </div>

      <div class="col-xl-12">
        <div class="card m-b-20">
          <div class="card-body">
 <table id="covid" class="table dt-responsive">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Country</th>
      <th scope="col">Cases</th>
      <th scope="col">Deaths</th>
      <th scope="col">Death Rate</th>
      <th scope="col">Recovered</th>
    </tr>
  </thead>
  <tbody>
    
    <tr v-for="data in world_table" :key="data.id">
      <td>{{ data.date }}</td>
      <td ><nuxt-link  v-bind:to="'/country/'+data.country"> <span v-if="country_data.iso2 !== null" v-bind:class="'flag-icon flag-icon-'+ country_data.iso2"></span> {{ data.country }} </nuxt-link></td>
      <td class="bg-danger text-white" v-if="(data.cases >= 10000) ">{{ data.cases }}</td>
      <td class="bg-warning text-white" v-else> {{ data.cases }}</td>
      <td class="bg-danger text-white" v-if="(data.deaths >= 100)">{{ data.deaths }}</td>
      <td class="bg-warning text-white" v-else>{{ data.deaths }}</td>
      <td class="bg-danger text-white" v-if="(data.deaths/data.cases) * 100  >= 5 ">{{ ((data.deaths/data.cases) * 100 ) }}</td>
      <td class="bg-warning text-white" v-else>{{ ((data.deaths/data.cases) * 100 ) }}</td>
      <td class="bg-primary text-white" v-if="(data.recovered) >= 1000">{{ data.recovered }}</td>
      <td class="bg-success text-white" v-else>{{ data.recovered }}</td>
    </tr>
  </tbody>
</table>

    
          </div>
        </div>
      </div>

    </div>

    <!-- END Chart Element -->
  </div>
</template>

<script>
import axios from 'axios';
import BarChart from '~/components/bar-chart'



export default  {

  components: {
      BarChart
    },

    

   async asyncData({route}){

    var ngaah =  await route
    const country = ngaah.params.pathMatch

    console.log(country)

    let country_data =  await axios.get('http://localhost:3000/api/case/'+country)
    let dataCase =  await axios.get('http://localhost:3000/api/chart/'+country)
    let data_list =  await axios.get('http://localhost:3000/api/data/'+country)
    
    var date = Array()
    var cases = Array()
    var deaths = Array()
    var recovered = Array()
    var CasesResponse = dataCase.data
    
    CasesResponse.forEach(function(data){
      date.push(data.date);
      cases.push(data.cases);
      deaths.push(data.deaths);
      recovered.push(data.recovered);
      
    });
    
    return {
    
      country_data : country_data.data,
      world_table : data_list.data,
      country : country,
      CaseChart: {
        labels : date,
        datasets: [
          {
            label : 'Case',
            backgroundColor: '#f16c69',
            data: cases,  
          }
        ]
      },
      DeathChart: {
        labels : date,
        datasets: [
          {
            label : 'Death',
            backgroundColor: '#343a40',
            data: deaths,  
          }
        ]
      },
      RecoveredChart: {
        labels : date,
        datasets: [
          {
            label : 'Recovered',
            backgroundColor: '#35a989',
            data: recovered,  
          }
        ]
      },
      CompareChart: {
        labels : date,
        datasets: [
          {
            label : 'Cases',
            borderColor : '#f16c69',
            data: cases,  
          },
          {
            label : 'Deaths',
            borderColor : '#343a40',
            backgroundColor: '#343a40',
            data: deaths,  
          },
          {
            label : 'Recovered',
            borderColor : '#35a989',
            backgroundColor: '#35a989',
            data: recovered,  
          },
        ]
      },


    }

  },


  

  


  mounted() {



    var t = $('#covid').DataTable( {
"pageLength": 50,
"columnDefs": [ {
    "searchable": false,
    "orderable": true,
    "targets": 0,
    targets: [ 0, 1, 2,3,4 ],
    className: 'mdl-data-table__cell--non-numeric',
    lengthData : 100,
    targets: [4],
    render(v){
    return Number(v).toFixed(2)+' %'
    }
} ],
"order": [[ 2, 'DESC' ]]
} );




  }




}


</script>

