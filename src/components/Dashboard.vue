<template>
  <div>
    <div class="hero" data-bg-image="assets/images/banner.png">
     />
      <div class="container">
        <form action="#" class="find-location">
          <input type="text" placeholder="Find your location..." />
          <input type="submit" value="Find" />
        </form>
      </div>
    </div>
    
    <Weather />
  </div>
</template>
<script>
import Weather from './Weather.vue'
export default {
  components: {
    Weather,
  }
}
</script>