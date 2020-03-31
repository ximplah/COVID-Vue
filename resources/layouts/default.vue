<template>
  <div>
    <navbar/>
    <nuxt />

    <Js/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Js from '~/components/Js.vue'

export default {

  components : {

    Navbar,
    Js

  },
}
</script>
