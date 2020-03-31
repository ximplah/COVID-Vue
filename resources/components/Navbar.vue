<template>
  <header id="topnav">
    <div class="topbar-main">
      <div class="container-fluid">
        <!-- Logo container-->
        <div class="logo"><nuxt-link to="/" class="logo"><img src="/logo.png" alt=""
              class="logo-small"> <img src="/logo.png" alt="" class="logo-large"></nuxt-link></div>
        <!-- End Logo container-->
        <div class="menu-extras topbar-custom">
          <ul class="navbar-right d-flex list-inline float-right mb-0">
        
        <li class="dropdown notification-list show text-white"><a
            class="nav-link text-white" data-toggle="dropdown" href="https://github.com/ximplah?tab=repositories"
            role="button" aria-haspopup="false" aria-expanded="true"> <i class="fab fa-github fa-2x"></i></a>
        </li>

            <li class="menu-item list-inline-item">
              <!-- Mobile menu toggle--> <a class="navbar-toggle nav-link">
                <div class="lines"><span></span> <span></span> <span></span></div>
              </a><!-- End mobile menu toggle-->
            </li>
          </ul>
        </div><!-- end menu-extras -->
        <div class="clearfix"></div>
      </div><!-- end container -->
    </div><!-- end topbar-main -->
    <!-- MENU Start -->
    <div class="navbar-custom active">
      <div class="container-fluid">
        <div id="navigation" class="active">
          <!-- Navigation Menu-->
          <ul class="navigation-menu">
            <li class="has-submenu"><nuxt-link class="ngaah-link" to="/"><i class="mdi mdi-home"></i>Home</nuxt-link></li>
            <li class="has-submenu"><nuxt-link class="ngaah-link" to="/api"><i class="fas fa-retweet"></i>API</nuxt-link></li>
            <li class="has-submenu"><nuxt-link class="ngaah-link" to="/data"><i class="fas fa-database"></i>Data Source</nuxt-link></li>
             <li class="has-submenu"><a href="https://github.com/ximplah?tab=repositories"><i class="fab fa-github-square"></i>Github</a></li>
             <li class="has-submenu"><a href="https://www.instagram.com/gilang_dandung"><i class="fab fa-instagram"></i>Gilang Dandung</a></li>
          </ul><!-- End navigation menu -->
        </div><!-- end #navigation -->
      </div><!-- end container -->
    </div><!-- end navbar-custom -->


  </header>


</template>

 
<script>
export default {
    
    head() {

        return {

            link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
            { rel: 'shortcut icon', href: '/icon.ico' },
            { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
            { rel: 'stylesheet', href: '/assets/css/icons.css'},
            { rel: 'stylesheet', href: '/assets/css/style.css'},
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css'},
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/css/flag-icon.min.css' },
            { rel: 'stylesheet', href: '/assets/plugins/datatables/buttons.bootstrap4.min.css'},
            { rel: 'stylesheet', href: '/assets/plugins/datatables/responsive.bootstrap4.min.css'}
            ]
        }
    },

    
}
</script>