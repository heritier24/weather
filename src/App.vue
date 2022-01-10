<template>
  <div id="app">
    <div class="site-content">
      <Header />
       <router-view/>
       <vue-progress-bar></vue-progress-bar>
    </div>
   
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  }
}
</script>
