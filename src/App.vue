<template>
  <div class="container">
    
    <Navbar/>
 
    <router-view> 
      
    </router-view>
  </div>
</template>

<script>
  import Navbar from './components//Navbar.vue'

  export default {
    components: {
    Navbar,
    
}
  }
</script>

<style>
.container {
  width: 60%;
  margin: 20px auto;
  background-color: #959595;
  text-align: center;
}
</style>
