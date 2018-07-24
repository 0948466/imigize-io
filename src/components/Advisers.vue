<template>
  <section class="advisers" id="international-advisors" data-nav="9">
    <div class="bevel-container-wrap advisers__top">
      <div class="advisers__babel_top"></div>
    </div>
    <div class="container">
      <h2 class="advisers__title">{{ $t('advisers.title')}}</h2>
      <div class="advisers__wrap">
        <div class="advisers__item"
             v-for="(item, index) in $t('advisers.items')"
             :key="item.id"
             @click.prevent="onLinkClick(item, index)">
          <div class="advisers__item__inner">
            <div class="advisers__img">
              <img class="advisers__img__inner" :src="getUrl(index)" :alt="item.name || 'Cooming soon'">
            </div>
            <h5 class="advisers__name" ref="name">{{ item.name}}</h5>
            <p class="advisers__role">{{item.role}}</p>
            <p class="advisers__text">{{item.text}}</p>
            <p class="advisers__text-hover">{{item.textHover}}</p>
          </div>
        </div>
        <!--<div class="advisers__item advisers__item_no-mobile"></div>-->
      </div>
    </div>
    <PopupAdvisers v-if="showModal"
                   :item="activeItem"
                   :src="activeSrc"
                   @popupHide="popupAdvisersHide"
    ></PopupAdvisers>
    <div class="bevel-container-wrap bottom">
      <div class="advisers__bevel-container"></div>
    </div>
  </section>
</template>

<script>
  const PopupAdvisers = () => import(/* webpackChunkName: "PopupAdvisers" */'./PopupAdvisers.vue')

  export default {
    name: 'Advisers',
    data: () => ({
      showModal: false,
      activeItem: false,
      activeSrc: null,
      openName: null
    }),

    methods: {
      popupAdvisersHide() {
        this.showModal = false
      },

      onLinkClick(item, index) {
        if (index > 3 && index !== 6) {
          return
        }
        this.activeItem = item
        this.activeSrc = this.getUrl(index)
        this.showModal = true
      },

      getUrl(index) {
        return require(`../assets/img/advisers/${index}.png`)
      },

      route() {
        const route = this.$route
        if (route.fullPath.includes('international-advisors') && route.params && route.params.name) {
          this.openName = route.params.name.match(/[a-zA-Z]+/g).join(' ')
          const item = this.$refs.name.find(this.findName)
          if (!item) {
            return
          }
          item.closest('.advisers__item').click()
        }
      },

      findName(element) {
        return element.textContent.toLocaleLowerCase() === this.openName.toLocaleLowerCase()
      }
    },

    mounted() {
      this.route()
    },

    components: {
      PopupAdvisers
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/mixins";

  @keyframes rotate-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate-counter-clockwise {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-120deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  .advisers {
    position: relative;
    padding: 10em 4% 6em 4%;
    background: url("../assets/img/advisers/advisers-background.jpg") center;
    background-size: cover;

    &__top {
      top: -2vw;
    }

    &__babel_top {
      border: 4vw solid transparent;
      border-left: 186vw solid #fafafa;
      border-top: .2vw solid #fafafa;
    }

    &__bevel-container {
      border: 4vw solid transparent;
      border-right: 186vw solid #fafafa;
      border-bottom: .2vw solid #fafafa;
    }

    &__title {
      @include titleSection;
      margin-bottom: 1em;
      color: #FFF;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @include w320-767 {
        justify-content: center;
      }
    }

    &__item {
      position: relative;
      min-height: 400px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      @include w768 {
        width: 245px;
        &:hover {
          .advisers__item__inner {
            position: absolute;
            top: -14px;
            left: -19%;
            padding: 14px 19% 35px;
            width: 138%;
            box-shadow: 0 0 16px rgba(255, 255, 255, 0.55);
            z-index: 2;
            &::before {
              display: block;
            }
          }
          .advisers__text-hover {
            display: block;
            z-index: 1;
          }
          .advisers__img {
            &::before {
              animation: rotate-clockwise 1s cubic-bezier(0.42, 0, 1, 1);
            }
            &::after {
              animation: rotate-counter-clockwise 1s cubic-bezier(0.42, 0, 1, 1);
            }
          }
        }
      }

      @include w320-767 {
        margin-bottom: 4em;
        padding: 14px 0 35px;
        width: 90vw;
        box-shadow: 0 0 16px rgba(255, 255, 255, 0.55);
        z-index: 2;
      }

      &_no-mobile {
        @include w320-767 {
          display: none;
        }
      }
    }

    &__item__inner {
      &::before {
        display: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    &__item:nth-child(1) &__item__inner::before {
      background-image: url("../assets/img/advisers/0-background.jpg");
    }

    &__item:nth-child(2) &__item__inner::before {
      background-image: url("../assets/img/advisers/1-background.jpg");
    }

    &__item:nth-child(3) &__item__inner::before {
      background-image: url("../assets/img/advisers/2-background.jpg");
    }

    &__item:nth-child(3) &__text-hover {
      letter-spacing: -0.3px;
    }

    &__item:nth-child(4) &__item__inner::before {
      background-image: url("../assets/img/advisers/3-background.jpg");
    }

    &__item:nth-child(5) &__item__inner::before {
      background-image: url("../assets/img/advisers/4-background.jpg");
    }

    &__img {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 auto;
      width: 231px;
      height: 231px;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      &::before {
        background: url(../assets/img/advisers/duga_focus-c.png) center;
      }

      &::after {
        background: url(../assets/img/advisers/duga_focus-o.png) center;
      }
    }

    &__img__inner {
      margin: 0 auto;
      width: 183px;
      height: 183px;
      border-radius: 50%;
    }

    &__name {
      position: relative;
      width: 138%;
      @include responsiveFont(20px, 16px);
      color: #fefefe;
      margin: 0.5em 0 1em -19%;
      @include w320-767 {
        width: 100%;
        margin-left: 0;
      }
    }

    &__role {
      position: relative;
      margin-bottom: 1em;
      font-style: italic;
      font-weight: 400;
      @include responsiveFont(16px, 12px);
      color: #888c8c;
    }
    &__text {
      position: relative;
      margin-bottom: 3em;
      font-size: 14px;
      @include responsiveFont(14px, 11px);
      color: #888c8c;
      line-height: 1.4;
    }

    &__text-hover {
      position: relative;
      padding: 5% 11%;
      width: 138%;
      margin-left: -19%;
      @include responsiveFont(16px, 13px);
      font-weight: 400;
      color: #fefefe;
      background-color: rgba(9, 97, 126, 0.61);
      line-height: 1.4;
      text-align: justify;
      @include w320-767 {
        display: block;
        width: 100%;
        margin-left: 0;
      }
      @include w768 {
        display: none;
      }
    }
  }
</style>
