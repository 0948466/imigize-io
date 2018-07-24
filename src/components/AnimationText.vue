<template>
    <section class="animation-text" ref="animation">
        <div>
            <div v-bind:class="['txtlzrr', getTextClass()]">
            </div>
        </div>
    </section>
</template>

<script>
  /* eslint-disable */
  import $ from 'jquery'
  import Textualizer from '../js/textualizer'

  export default {
    name: 'AnimationText',
    props: ['text', 'n'],
    mounted() {
      window.addEventListener("scroll", this.onWindowScroll);
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.onWindowScroll);
    },

    methods: {
      onWindowScroll() {
        let clientHeight = document.body.clientHeight
        let rect = this.$refs.animation.getBoundingClientRect()

        if (rect.top < clientHeight - 100 && rect.bottom > 130) {
          this.addAnimationText();
        }
      },

      getTextClass() {
        return `text${this.n}`
      },

      addAnimationText() {
        if (!$) {
          setTimeout(() => (this.addAnimationText()), 1000)
          return
        }

        var txt = $(`.${this.getTextClass()}`);
        var list = [this.text];
        var options = {
          duration: 0,
          rearrangeDuration: 0,
          effect: 'none',
          centered: true
        };

        txt.textualizer(list, options);
        txt.textualizer('start');
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .txtlzrr {
        width: 100%;
        height: 2em;
        @include responsiveFont(36px, 22px);
        font-weight: 100;
        line-height: 1.5;
        letter-spacing: -0.0025em;
        color: #fff;
    }
</style>

<style>
    @keyframes animatedText {
        0% {
            opacity: 0;
            color: grey;
        }
        100% {
            opacity: 1;
            color: #fff;
        }
    }

    .txtlzrr span {
        opacity: 0;
        animation: animatedText 0.4s linear both;
    }
</style>
