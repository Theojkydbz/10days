<template>
  <div id="app">
    <Navbar/>
    <div class="page-wrapper">
      <router-view />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/shared/Navbar.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #023047;
  margin-top: 60px;
}
.page-wrapper {
  min-height: 60vh;
}
</style>
