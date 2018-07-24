<template>
    <transition name="partners-popup">
        <section class="partners-popup"
                 @click="onPopupClick">
            <div class="partners-popup__content">
                <button class="partners-popup__close" @click="popupHide()" type="button"></button>
                <div class="partners-popup__carousel__btn partners-popup__carousel__btn_prev"
                     :class="{'partners-popup__carousel__btn_disabled': isDisabledPrev}"
                     @click="carouselPrev"
                ></div>
                <div class="partners-popup__carousel__btn partners-popup__carousel__btn_next"
                     @click="carouselNext"
                     :class="{'partners-popup__carousel__btn_disabled': isDisabledNext}"
                ></div>
                <carousel class="partners-popup__carousel"
                          ref="carousel"
                          :perPage="1"
                          :paginationActiveColor="'#a4acac'"
                          @pageChange="onPageChange"
                >
                    <slide v-for="slide in slides"
                           class="partners-popup__slide"
                           :key="slides.id">
                        <img class="partners-popup__img" alt=""
                             :src="slide"
                        >
                    </slide>
                </carousel>
            </div>
        </section>
    </transition>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'

export default {
    name: 'PartnersPopup',
    props: {
      slides: {
        required: true
      }
    },

    data: () => ({
      isDisabledPrev: '',
      isDisabledNext: ''
    }),

    computed: {
      canAdvanceForward() {
        return this.$refs.carousel.canAdvanceForward
      },
      canAdvanceBackward() {
        return this.$refs.carousel.canAdvanceBackward
      }
    },

    methods: {
      popupHide() {
        this.$emit('popupHide')
      },

      onPageChange() {
        this.checkDisabledBtn()
      },

      onPopupClick(event) {
        const CLASS_CONTENT = '.partners-popup__content'

        if (!event.target.closest(CLASS_CONTENT)) {
          this.$emit('popupHide')
        }
      },

      carouselNext() {
        let carousel = this.$refs.carousel
        carousel.goToPage(carousel.getNextPage())
      },

      checkDisabledBtn() {
        this.isDisabledPrev = !this.canAdvanceBackward
        this.isDisabledNext = !this.canAdvanceForward
      },

      carouselPrev() {
        let carousel = this.$refs.carousel
        carousel.goToPage(carousel.getPreviousPage())
      },

      initHeight() {
        document.querySelector('.partners-popup__slide').style.minHeight = document.querySelector('.partners-popup__content').clientWidth * 0.682 + 'px'
      },

      hideScroll() {
        document.querySelector('body').style.overflow = 'hidden'
        if (this.isMobile()) {
          document.querySelector('body').style.position = 'fixed'
          document.querySelector('body div').style.marginTop = `-${this.scrollY}px`
        }
      },

      showScroll() {
        document.querySelector('body').style.overflow = ''
        if (this.isMobile()) {
          document.querySelector('body').style.position = ''
          document.querySelector('body div').style.marginTop = ''
          window.scrollTo(0, this.scrollY)
        }
      },

      isMobile() {
        return window.innerWidth < 1000
      }
    },

    beforeMount() {
      if (this.isMobile()) {
        this.scrollY = window.pageYOffset
      }
    },

    mounted() {
      this.initHeight()
      this.hideScroll()

      this.isDisabledPrev = true
      this.isDisabledNext = false
    },

    destroyed() {
      this.showScroll()
    },

    components: {
      Carousel,
      Slide
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .partners-popup {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity .3s ease;
        overflow-y: auto;
        z-index: 10;

        &__content {
            position: relative;
            margin: 0 auto;
            width: 100%;
            max-width: 750px;
            min-width: 320px;
            max-height: 75vh;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            background: #fff url("../assets/img/partnersPopup/background-bottom.jpg") no-repeat bottom;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
        }

        &-enter, &-leave {
            opacity: 0;
        }

        &-enter &__content,
        &-leave &__content {
            transform: scale(1.1);
        }

        &__close {
            position: absolute;
            top: 0;
            right: 0;
            margin-right: -30px;
            width: 20px;
            height: 20px;
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
                width: 100%;
                height: 2px;
                background: #fff;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }
            @media only screen and (max-width: 900px) {
                display: none;
            }

        }

        &__carousel {
            position: relative;
            width: 100%;
        }

        &__carousel__btn {
            position: absolute;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: transparent;
            cursor: pointer;
            &:before,
            &:after {
                content: "";
                left: 11px;
                position: absolute;
                width: 25px;
                height: 2px;
                background-color: #fff;
            }
            &:before {
                transform: rotate(-45deg);
                top: 14px;
            }
            &:after {
                transform: rotate(45deg);
                top: 31px;
            }

            &_next {
                right: -60px;
                transform: rotate(180deg);
            }
            &_prev {
                left: -60px;
            }
            &_disabled {
                opacity: 0.5;
                cursor: default;
            }
            @media only screen and (max-width: 900px) {
                display: none;
            }
        }

        &__img {
            width: 100%;
        }
    }

    .label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
<style lang="scss">
    .VueCarousel-slide {
        position: relative;
        cursor: pointer;
        background-color: #fff;
    }

    .VueCarousel-dot {
        margin-top: 0 !important;
    }
</style>


