<template>
    <transition name="popupAdvisers">
        <section class="popupAdvisers"
                 :class="{'popupAdvisers_flex-start': flexStart}"
                 ref="popup"
                 @click="onPopupClick">
            <div class="popupAdvisers__content" ref="popupContent" v-bind:style="{'background-image': 'url(' + getBgImg(item.name) + ')'}">
                <button class="popupAdvisers__close" @click="popupHide" type="button"></button>
                <div class="popupAdvisers__left">
                    <div class="popupAdvisers__img">
                        <img class="popupAdvisers__img__inner"
                             :src="src">
                    </div>
                    <div class="popupAdvisers__social">
                        <a class="popupAdvisers__social__link popupAdvisers__social__link-linkedin" :href="item.linkTwitter" target="_blank"></a>
                    </div>
                </div>
                <div class="popupAdvisers__right">
                    <p v-if="item.name" class="popupAdvisers__name">{{item.name}}</p>
                    <div class="popupAdvisers__text-wrap">
                        <p v-if="item.role" class="popupAdvisers__role">{{item.role}}</p>
                        <p v-if="item.text" class="popupAdvisers__text">{{item.text}}</p>
                    </div>
                    <p v-if="item.textBig1" class="popupAdvisers__text-big" v-html="item.textBig1"></p>
                </div>

                <p v-if="item.textBig2" class="popupAdvisers__text-bottom" v-html="item.textBig2"></p>
            </div>
        </section>
    </transition>
</template>

<script>
  export default {
    name: 'popupAdvisers',
    props: {
      item: {
        required: true
      },

      src: {
        type: String
      }
    },

    data: () => ({
      flexStart: ''
    }),

    methods: {
      popupHide() {
        this.$emit('popupHide')
      },

      onPopupClick(event) {
        const CLASS_CONTENT = '.popupAdvisers__content'

        if (!event.target.closest(CLASS_CONTENT)) {
          this.$emit('popupHide')
        }
      },

      hideScroll() {
        document.querySelector('body').style.overflow = 'hidden'
        if (this.isMobile()) {
          document.querySelector('body').style.position = 'fixed'
          // document.querySelector('body div').style.marginTop = `-${this.scrollY}px`
        }
      },

      showScroll() {
        document.querySelector('body').style.overflow = ''
        if (this.isMobile()) {
          document.querySelector('body').style.position = ''
          // document.querySelector('body div').style.marginTop = ''
          window.scrollTo(0, this.scrollY)
        }
      },

      getBgImg(index) {
        // TODO: Женя, напиши тут нормально :) У меня не получилось сколько-нибудь быстро придумать.
        return (index !== 'Sean Brizendine') ? require(`../assets/img/popupAdvicers/background-popupAdv.png`) : require(`../assets/img/popupAdvicers/3.png`)
      },

      isMobile() {
        return window.innerWidth < 1000
      },

      isFlexStart() {
        this.flexStart = (!this.$refs.popupContent) ? '' : (this.$refs.popupContent.offsetHeight > this.$refs.popup.offsetHeight)
      }
    },

    beforeMount() {
      if (this.isMobile()) {
        this.scrollY = window.pageYOffset
      }
    },

    mounted() {
      this.hideScroll()
      this.isFlexStart()

      this.isDisabledPrev = true
      this.isDisabledNext = false
    },

    destroyed() {
      this.showScroll()
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .popupAdvisers {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        @include w768 {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.7);
            transition: opacity .3s ease;
        }
        overflow: auto;
        z-index: 13;

        &_flex-start {
            @include w768 {
                align-items: flex-start;
            }
        }

        &__content {
            position: relative;
            margin: 0 auto;
            padding: 2em 4%;
            width: 100%;
            max-width: 935px;
            min-width: 320px;
            overflow-y: auto;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            background: #fff no-repeat;
            background-size: cover;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            @include w768 {
                transition: all .3s ease;
            }
        }

        @include w768 {
            &-enter, &-leave {
                opacity: 0;
            }

            &-enter &__content,
            &-leave &__content {
                transform: scale(1.1);
            }
        }

        &__close {
            position: absolute;
            top: 14px;
            left: 100%;
            margin-left: -40px;
            width: 23px;
            height: 23px;
            font-size: 0;
            background-color: transparent;
            border: 0;
            outline: 0;
            cursor: pointer;
            z-index: 15;
            &::before,
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                height: 2px;
                background: #6f7579;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }
        }

        &__left {
            margin-bottom: 2em;
            width: 30%;
            min-width: 150px;
            @include w320-767 {
                width: 100%;
            }
        }

        &__img {
            position: relative;
            display: flex;
            align-items: center;
            margin: 0 auto 0 -36px;
            width: 291px;
            height: 291px;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url(../assets/img/popupAdvicers/ellipse.png) center 3px no-repeat;
            }
            @include w320-767 {
                margin: 0 auto;
            }
        }

        &__img__inner {
            margin: 0 auto;
            width: 225px;
            height: 225px;
            border-radius: 50%;
            background-color: #a9b4b9;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 2;
        }

        &__social {
            display: flex;
            justify-content: flex-end;
            margin-top: -28px;
            @include w320-767 {
                margin-right: 28%;
            }

            @include w768 {
                margin-right: 51px;
            }
        }

        &__social__link {
            display: block;
            width: 36px;
            height: 36px;
            z-index: 1;
        }

        &__social__link-twitter {
            margin-right: 20px;
            mask-image: url("../assets/img/popupAdvicers/icon-twitter.svg");
            mask-repeat: no-repeat;
            mask-size: contain;
            background-color: #1982c4;
        }

        &__social__link-linkedin {
            background: url("../assets/img/popupAdvicers/icon-linkedin.svg");
        }

        &__title2 {
            margin-top: 1em;
            @include responsiveFont(17px, 15px);
            line-height: 1.5;
            font-weight: 600;
            color: #51555a;
        }

        &__link {
            margin-bottom: 0.5em;
            @include responsiveFont(15px, 13px);
            line-height: 1.3;
            color: #575e5e;
            &:hover {
                color: #02c3d8;
            }
        }

        &__right {
            padding-top: 20px;
            width: 65%;
            min-width: 300px;
            @include w320-767 {
                width: 100%;
                text-align: justify;
            }
        }

        &__name {
            position: relative;
            @include responsiveFont(27px, 23px);
            margin-bottom: 0.7em;
            color: #1370ab;
            font-weight: 400;
            &::after {
                content: '';
                position: absolute;
                bottom: -0.25em;
                left: -30%;
                width: 130%;
                height: 3px;
                background-color: #b5b8bb;
            }
        }

        &__text-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        &__role {
            margin-bottom: 1em;
            @include responsiveFont(22px, 18px);
            line-height: 1.5;
            color: #888c8c;
            font-style: italic;
        }

        &__text {
            margin-bottom: 1em;
            @include responsiveFont(19px, 16.5px);
            line-height: 1.64;
            color: #888c8c;
            font-size: 19px;
            font-weight: 400;
        }

        &__text-big {
            margin-bottom: 1em;
            @include responsiveFont(17px, 15px);
            color: #48abcf;
            font-weight: 400;
            line-height: 1.64;
        }

        &__text-bottom {
            margin-top: 1.4em;
            margin-bottom: 1em;
            @include responsiveFont(14px, 13px);
            color: #3e3e3e;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            @include w320-767 {
                text-align: justify;
            }
        }
    }
</style>
