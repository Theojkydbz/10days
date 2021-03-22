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
  margin-top: 0;
  background-color: #FAFAFA;
}
.page-wrapper {
  min-height: 60vh;
}
a{
  text-decoration:none; 
  color: inherit;
}

h1{
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  
  margin-top: 20px;
  margin-bottom: 20px;
}
h2{
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
}
h3{
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
}
h4{
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
}
h5{
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.08em;
  text-align: left;

  text-transform: uppercase;
}
p{
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
p.small{
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}

.centered{
  text-align: center;
}

</style>
