<template>
    <div class="carousel-vue">
        <carousel v-if="isMobile" class="carousel-vue__carousel"
                  ref="carousel"
                  :perPage="1"
                  :paginationActiveColor="activeColor"
                  @pageChange="onPageChange"
                  :paginationColor="activeColor"
        >
            <slide v-for="countSlidesItem in countSlides"
                   class="carousel-vue__slide"
                   :key="countSlidesItem">

                <div class="carousel-vue__video">
                    <template v-for="index in countVideoOnSlideMax(countSlidesItem)">
                        <video-item class="carousel-vue__video__item"
                                    :title="$t(`videoPlayer[${getId(countSlidesItem, index)}].title`)"
                                    :videoId="$t(`videoPlayer[${getId(countSlidesItem, index)}].id`)"
                                    :backgroundImage="getBackgroundImage(getId(countSlidesItem, index))"
                                    :colorIconPlay="video[(getId(countSlidesItem, index))].colorIconPlay"
                                    :key="getId(countSlidesItem, index)"
                        ></video-item>
                    </template>
                </div>
            </slide>
        </carousel>
      <div class="carousel-vue__video-wrap" v-else>
        <template v-for="(videoItem, index) in video">
          <video-item class="carousel-vue__video__item"
                      :class="{'carousel-vue__video__item_hide': (index > 1 && !showAllVideo)}"
                      :title="$t(`videoPlayer[${index}].title`)"
                      :videoId="$t(`videoPlayer[${index}].id`)"
                      :backgroundImage="getBackgroundImage(index)"
                      :colorIconPlay="video[index].colorIconPlay"
                      :key="index"
          ></video-item>
        </template>

        <div v-if="isOdd" class="carousel-vue__video__item"></div>

        <div class="carousel-vue__btn-more" @click="showAllVideo = !showAllVideo">
          <span v-show="!showAllVideo">{{ $t('carouselVue.btnShow')}}</span>
          <span v-show="showAllVideo">{{ $t('carouselVue.btnHide')}}</span>
        </div>
      </div>
    </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'
  import VideoItem from '@/components/VideoPlayer'

  export default {
    name: 'CarouselVue',
    props: {
      activeColor: {
        default: '#00aeef',
        type: String
      }
    },

    data: () => ({
      isDisabledPrev: '',
      isDisabledNext: '',
      currentPage: 0,
      countVideoOnSlide: 1,
      countSlides: 2,
      video: [
        {
          img: 'why-blockchain.jpg'
        },
        {
          img: 'video-blockchain.jpg'
        },
        {
          img: 'imiscan-android.jpg'
        },
        {
          img: 'imigize-video-runlab.jpg'
        },
        {
          img: 'imigize&wildberries-en.jpg',
          colorIconPlay: 'grey'
        },
        {
          img: 'video-spb.jpg'
        },
        {
          img: 'presentation-Imigize.jpg'
        },
        {
          img: 'imigize-video-police.jpg'
        },
      ],
      windowWidth: 0,
      showAllVideo: false
    }),

    beforeMount() {
      this.initSlidesCount()
      this.windowWidth = window.innerWidth
    },

    mounted() {
      this.isDisabledPrev = true
      this.isDisabledNext = false
      window.addEventListener('resize', this.onWindowResizeThrottler, false)
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResizeThrottler)
    },

    computed: {
      canAdvanceForward() {
        return this.$refs.carousel.canAdvanceForward
      },
      canAdvanceBackward() {
        return this.$refs.carousel.canAdvanceBackward
      },
      getCurrentPage() {
        return this.$refs.carousel.currentPage
      },
      isMobile() {
        return this.windowWidth < 768
      },
      isOdd() {
        return this.video.length % 2
      }
    },

    methods: {
      getId(countSlidesItem, index) {
        return this.maxVideoOnSlide(countSlidesItem) - this.countVideoOnSlideMax(countSlidesItem) + index - 1
      },
      countVideoOnSlideMax(countSlidesItem) {
        if (countSlidesItem * this.countVideoOnSlide > this.video.length) {
          return this.video.length - this.countVideoOnSlide * (countSlidesItem - 1)
        }

        return this.countVideoOnSlide
      },
      maxVideoOnSlide(countSlidesItem) {
        return Math.min(countSlidesItem * this.countVideoOnSlide, this.video.length)
      },

      initSlidesCount() {
        this.countSlides = Math.ceil(this.video.length / this.countVideoOnSlide)
      },
      getBackgroundImage(n) {
        return require(`../assets/img/video/${this.video[n].img}`)
      },
      onPageChange() {
        this.checkDisabledBtn()
        this.currentPage = this.getCurrentPage
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
      onWindowResizeThrottler() {
        if (!this.resizeTimeout) {
          this.resizeTimeout = setTimeout(() => {
            this.resizeTimeout = null
            this.onWindowResizeHandler()
          }, 200)
        }
      },

      onWindowResizeHandler() {
        this.windowWidth = window.innerWidth
      }
    },

    components: {
      Carousel,
      Slide,
      VideoItem
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $width: 6.5em;
    $degree: 35;

    .carousel-vue {
        position: relative;
        &__carousel {
            position: relative;
            width: 100%;
        }

        &__btn__line {
            width: calc(#{$width} / 2);
            height: calc(#{$width} / 40);
            background-color: #fff;
            z-index: 2;
            &_top {
                transform: rotate(#{$degree}deg) translateX(52%);
            }
            &_bottom {
                transform: rotate(-#{$degree}deg) translateX(-46%);
            }
        }

        &__slide__text-wrap {
            display: flex;
            align-items: center;
            padding: 0.5em 3%;
            min-height: 4.25em;
            border: 2px solid #fff;
            border-top-left-radius: 2.5em;
            border-bottom: none;
            @include w320-767 {
                min-height: 12em;
            }
        }

        &__slide__index {
            margin-right: 3.5%;
            @include responsiveFont(32px, 22px);
        }

        &__slide__text {
            max-width: 741px;
            @include responsiveFont(18px, 14px);
            line-height: 1.35;
            font-weight: 400;
        }

        &__slide__img {
            width: 100%;
        }

        &__video {
            display: flex;
            margin-top: 2em;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &__video__item {
            margin-bottom: 2em;
            max-width: 450px;
            width: 45%;

            @include w320-767 {
                width: 100%;
            }
          &_hide {
            display: none;
          }
        }

      &__video-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }

      &__btn-more {
        position: absolute;
        bottom: 0;
        right: 0;

        @include responsiveFont(17px, 14px);

        font-weight: 100;
        line-height: 1.3;
        color: #00accd;
        cursor: pointer;

        &:hover {
          color: #4cdbef;
        }
      }
    }


</style>

<style lang="scss">
    .carousel-vue .VueCarousel-dot {
        margin-top: 0.4em !important;
        opacity: 0.35;
    }

    .carousel-vue .VueCarousel-dot--active {
        opacity: 1;
    }
</style>
