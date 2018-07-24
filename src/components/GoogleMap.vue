<template>
    <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 300px"
    >
        <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :icon="m.icon"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
        ></gmap-marker>
    </gmap-map>
</template>

<script>
  /////////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCcfwqu8EjLELpd8UnBFZY8AIesx4jSXTY',
      libraries: 'places', //// If you need to use place input
    }
  });

  export default {
    props: {
      center: {
        type: Object,
        default: {lat: 12.0, lng: 12.0},
        required: true
      },
      markers: {
        type: Array
      },
      zoom: {
        default: 7
      }
    }
  }
  /*
   center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }]
   */
</script>