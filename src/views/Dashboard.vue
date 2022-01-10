<template>
  <div>
    <div class="hero" data-bg-image="assets/images/banner.png" style="">
      <div class="container">
        <form action="#" class="find-location">
          <input
            type="text"
            placeholder="Find your location..."
            v-model="query"
          />
          <input type="submit" @click.prevent="getWeather" />
        </form>
      </div>
    </div>

    <div>
      <div class="forecast-table">
        <div class="container">
          <div class="forecast-container">
            <div class="today forecast">
              <div class="forecast-header">
                <div class="day">{{ dateBuilder() }}</div>
                <div class="date">Date</div>
              </div>
              <!-- .forecast-header -->
              <div class="forecast-content">
                <div class="location">
                  {{ weather.name }}, {{ weather.sys.country }}
                </div>
                <div class="degree">
                  <div class="num">{{ weather.main.temp }}<sup>o</sup>C</div>
                  <div class="forecast-icon">
                    <img src="images/icons/icon-1.svg" alt="" width="90" />
                  </div>
                </div>
                <span
                  ><img src="images/icon-umberella.png" alt="" />Clouds:
                  {{ weather.clouds.all }}</span
                >
                <span
                  ><img src="images/icon-wind.png" alt="" />Humidity:
                  {{ weather.main.humidity }}</span
                >
                <span
                  ><img src="images/icon-compass.png" alt="" />timezone:{{
                    weather.timezone
                  }}</span
                >
              </div>
            </div>
            <div class="forecast">
              <div class="forecast-header">
                <div class="day">Tuesday</div>
              </div>
              <!-- <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-3.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>
            <div class="forecast">
              <div class="forecast-header">
                <div class="day">Wednesday</div>
              </div>
              <!-- <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-5.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>
            <div class="forecast">
              <!-- <div class="forecast-header">
              <div class="day">Thursday</div>
            </div> -->
              <!-- <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-7.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>
            <div class="forecast">
              <!-- <div class="forecast-header">
              <div class="day">Friday</div>
            </div>
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-12.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>

            <div class="forecast">
              <!-- <div class="forecast-header">
              <div class="day">Saturday</div>
            </div>
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-13.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>
            <div class="forecast">
              <!-- <div class="forecast-header">
              <div class="day">Sunday</div>
            </div>
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="images/icons/icon-14.svg" alt="" width="48" />
              </div>
              <div class="degree">23<sup>o</sup>C</div>
              <small>18<sup>o</sup></small>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Weather /> -->
  </div>
</template>
<script>
// import Weather from "./Weather.vue";
export default {
  components: {
    // Weather,
  },
  data() {
    return {
      api_key: "a519de63522790a3336499ca6751cec6",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "kigali",
      weather: {},
    };
  },
  methods: {
    async getWeather() {
      this.$Progress.start();
      fetch(
        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message) {
            throw new Error(" city not found ");
          }
          this.$Progress.finish();
          console.log("Success:", result);
          this.$noty.success("city found ");
          this.weather = result;
        })
        .catch((error) => {
          console.error("Error:", error.message);
          this.$noty.error(
            "city not found, please reload again   ",
            error.message
          );
        });
    },
    dateBuilder() {
      let di = new Date();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[di.getDay()];

      return `${day}`;
    },
  },
  created() {
    this.getWeather();
  },
};
</script>