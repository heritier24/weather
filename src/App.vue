<template>
  <div id="app">
    <div class="site-content">
      <Header />
       <router-view/>
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
