<template>
    <section class="what-is-imigize" data-nav="2" id="overview">
        <div class="bevel-container-wrap top">
            <div class="what-is-imigize__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="what-is-imigize__title">{{ $t('whatIsImigize.title')}}</h2>
            <p class="what-is-imigize__text">{{ $t('whatIsImigize.text1')}}
            </p>

            <p class="what-is-imigize__text">{{ $t('whatIsImigize.text2')}}
            </p>

            <p class="what-is-imigize__text">{{ $t('whatIsImigize.text3')}}
            </p>

            <p class="what-is-imigize__text">{{ $t('whatIsImigize.text4')}}
            </p>
            <a class="what-is-imigize__link" :href="$t('url.imigize')" target="_blank" rel="noopener">{{
                $t('url.imigize')}}
            </a>

            <carousel-vue class="what-is-imigize__video" id="video"></carousel-vue>
        </div>
    </section>
</template>

<script>
  import CarouselVue from '@/components/CarouselVue'

  export default {
    name: 'WhatIsImigize',
    data: () => ({
      video: [
        {
          img: 'imigize-video-runlab.jpg'
        },
        {
          img: 'presentation-Imigize.jpg'
        },
        {
          img: 'mobile-app.jpg'
        },
        {
          img: 'imigize&wildberries-en.jpg',
          colorIconPlay: 'grey'
        },
        {
          img: 'video-spb.jpg'
        },
        {
          img: 'imigize-video-police.jpg'
        }
      ]
    }),
    methods: {
      getBackgroundImage(n) {
        return require(`../assets/img/video/${this.video[n].img}`)
      }
    },
    components: {
      CarouselVue
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $ns: ".what-is-imigize";

    #{$ns} {
        position: relative;
        padding: 6em 4% 4em;
        background-color: #fafafa;

        .bevel-container-wrap.bottom {
            top: 100%;
        }

        .bevel-container.bottom-left {
            border-right: 100vw solid #063649;
            border-top: 0.2vw solid #063649;
        }

        .bevel-container.bottom-ru {
            border-right: 100vw solid #f0f0f0;
            border-top: 0.2vw solid #f0f0f0;
        }

        .container {
            position: relative;
            min-height: 350px;
        }

        .pagination-container {
            div {
                margin-bottom: 15px;

                &:hover, &.active {
                    background-color: #ccc;

                    .circle {
                        background-color: #ccc;
                    }
                }
            }
        }
    }

    #{$ns}__babel_top {
        border: 4vw solid transparent;
        border-right: 100vw solid #f0f0f0;
        border-top: 0.2vw solid #f0f0f0;
    }

    #{$ns}__title {
        margin-bottom: 1.3em;

        @include titleSection;
    }

    #{$ns}__text {
        margin-bottom: 1.5em;

        @include responsiveFont(18px, 15px);

        line-height: 1.5;
        font-weight: 100;
        color: #575e5e;
        text-align: justify;
    }

    #{$ns}__link {
        @include responsiveFont(17px, 14px);

        line-height: 1.4;
        font-weight: 100;
        color: #1d9da3;
    }

    #{$ns}__video {
     padding: 1em 0;
    }
</style>


