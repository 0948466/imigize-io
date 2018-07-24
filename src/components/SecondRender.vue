<template>
    <div class="second-render">
        <main-header :headerWhite="false"
                     :headerFixed="false"/>
        <main-timer/>
        <schedule-bonuses/>
        <documents/>
        <blog-news/>
        <what-is-imigize/>
        <about-service/>
        <mobile/>
        <technology/>
        <partners/>
        <trade/>
        <ecosystem/>
        <blockchain/>
        <functionality-token/>
        <road-map/>
        <distribution/>
        <team/>
        <advisers/>
        <press/>
        <ratings/>
        <legal-consulting/>
        <contacts/>
        <test v-if="ifTest()"/>
    </div>
</template>

<script>
  import MainHeader from '@/components/MainHeader.vue'
  import MainTimer from '@/components/MainTimer.vue'
  import ScheduleBonuses from '@/components/ScheduleBonuses.vue'
  import Documents from '@/components/Documents.vue'
  import BlogNews from '@/components/BlogNews.vue'
  import WhatIsImigize from '@/components/WhatIsImigize.vue'
  import AboutService from '@/components/AboutService.vue'
  import Mobile from '@/components/Mobile.vue'
  import Technology from '@/components/Technology.vue'
  import Partners from '@/components/Partners.vue'
  import Trade from '@/components/Trade.vue'
  import Ecosystem from '@/components/Ecosystem.vue'
  import Blockchain from '@/components/Blockchain.vue'
  import FunctionalityToken from '@/components/FunctionalityToken.vue'
  import RoadMap from '@/components/RoadMap.vue'
  import Distribution from '@/components/Distribution.vue'
  import Team from '@/components/Team.vue'
  import Press from '@/components/Press.vue'
  import Ratings from '@/components/Ratings.vue'
  import LegalConsulting from '@/components/LegalConsulting.vue'
  import Contacts from '@/components/Contacts.vue'
  import MainFooter from '@/components/MainFooter.vue'
  import Advisers from '@/components/Advisers.vue'
  import Test from '@/components/Test.vue'

  export default {
    name: 'second-render',
    mounted() {
      this.initHash()
      require('../js/index.js').default()
    },
    methods: {
      initHash() {
        const hashLink = window.location.hash.replace('#', '')

        if (hashLink) {
          const id = document.getElementById(hashLink)
          if (id) {
            history.scrollRestoration = 'manual'
            window.scrollTo(0, id.offsetTop)
          }
        }
      },
      ifTest() {
        return ~window.location.href.indexOf('test')
      }
    },
    components: {
      MainHeader,
      MainTimer,
      ScheduleBonuses,
      Documents,
      BlogNews,
      WhatIsImigize,
      AboutService,
      Mobile,
      Technology,
      Partners,
      Trade,
      Ecosystem,
      Blockchain,
      FunctionalityToken,
      RoadMap,
      Distribution,
      Team,
      Press,
      Ratings,
      Contacts,
      MainFooter,
      Advisers,
      LegalConsulting,
      Test
    }
  }
</script>