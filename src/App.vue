<template>
  <Home/>
  <router-view/>
  <Footer/>
</template>

<script>
import Home from '@/components/HomeComp.vue'
import Footer from '@/components/FooterComp.vue'
export default {
  components: {
    Home,
    Footer
  }
}
</script>

<style>

body{
  background-color: #16191D !important;
  min-height: 100vh;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
