<template>
    <div id="app">
        <main-header v-if="!isHomepage()"
                     :headerWhite="true"
                     :headerFixed="true"/>
        <router-view/>
        <main-footer/>
        <div class="content__overlay"></div>
    </div>
</template>

<script>
  import 'promise-polyfill/src/polyfill'
  import MainHeader from '@/components/MainHeader'
  import MainFooter from '@/components/MainFooter'

  require('es6-object-assign').polyfill()

  export default {
    name: 'App',
    methods: {
      isHomepage() {
        return this.$router.currentRoute.name === 'homepage'
      }
    },
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>

<style lang="scss">
    @import "scss/style.scss";

    #app {
        font-family: "SegoeUI", sans-serif;
    }

    .content__overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(39,53,66,.29);
        z-index: 1;
    }
</style>