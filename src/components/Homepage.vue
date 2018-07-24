<template>
    <div class="content">
        <start/>
        <second-render/>
    </div>
</template>

<script>
  import Start from '@/components/Start'

  const SecondRender = () => import(/* webpackChunkName: "SecondRender" */'@/components/SecondRender')

  export default {
    name: 'homepage',
    data: () => ({
      showSecondRender: false
    }),
    created() {
      this.loadCheck()
      setTimeout(() => {
        if (this.$route.hash) {
          this.scrollToHash(this.$route.hash)
        }
      }, 0)
    },
    methods: {
      scrollToHash() {
        let el = document.querySelector(this.$route.hash)

        if (!el) {
          setTimeout(() => {
            this.scrollToHash(this.$route.hash)
          }, 200)
          return
        }
        this.$scrollTo(el, 10)
      },
      loadCheck() {
        if (document.readyState === 'complete') {
          this.addSecondRender()
        } else {
          window.addEventListener('load', this.addSecondRender)
        }
      },
      addSecondRender() {
        this.showSecondRender = true
      }
    },
    components: {
      Start,
      SecondRender
    }
  }
</script>