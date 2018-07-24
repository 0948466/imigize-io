<template>
    <section class="ratings" id="ratings" data-nav="12">
        <div class="container">
            <h2 class="ratings__title">{{ $t('ratings.title')}}</h2>
            <div class="ratings__wrapper">
                <template v-for="item in items">
                    <rating-icon class="ratings__item"
                                 :valueImigize="item.valueImigize"
                                 :valueMax="item.valueMax"
                                 :img="item.img"
                                 :link="item.link"/>
                </template>

                <a class="ratings__item ratings__item_small"
                   href="https://cryptoslate.com/coins/imigize/"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/ratings/cryptoslate-logo.png" alt="cryptoslate">
                </a>

                <a class="ratings__item ratings__item_small"
                   href="https://www.en.coinjinja.com/ico/imigize"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/ratings/coinjinja-logo.svg" alt="coinjinja">
                </a>

                <a class="ratings__item ratings__item_small"
                   href="http://ico-korea.com/318"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/ratings/logo-ico-korea.png" alt="ico-korea">
                </a>

                <a class="ratings__item ratings__item_small"
                   href="https://www.coinhills.com/ico/view/the-imigize-service-blockchain/"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/ratings/logo-coinhills.png" alt="coinhills">
                </a>

                <a class="ratings__item ratings__item_small"
                   href="https://www.unlock-bc.com/project/the-imigize-service-blockchain"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/ratings/UNLOCK-logo.png" alt="unlock-bc">
                </a>

                <a class="ratings__item ratings__item_no-mobile"></a>
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="bevel-container ratings__bottom-left"></div>
        </div>
    </section>
</template>

<script>
  import RatingIcon from '@/components/RatingIcon'

  export default {
    name: 'Ratings',
    data: () => ({
      items: [
        {
          valueImigize: '3.7',
          valueMax: 5,
          img: require(`../assets/img/ratings/icobench.png`),
          link: 'https://icobench.com/ico/imigize'
        },
        {
          valueImigize: 4.8,
          valueMax: 5,
          img: require(`../assets/img/ratings/icochart-logo.png`),
          link: 'https://icochart.net/tokensale/the-imigize-service-blockchain'
        },

        {
          valueImigize: 4.1,
          valueMax: 5,
          img: require(`../assets/img/ratings/logo-trackico.png`),
          link: 'https://www.trackico.io/ico/imigize/'
        },

        {
          valueImigize: 8,
          valueMax: 10,
          img: require(`../assets/img/ratings/foxico-logo.svg`),
          link: 'https://foxico.io/project/theimigizeserviceblockchain'
        },

        {
          valueImigize: 7.67,
          valueMax: 10,
          img: require(`../assets/img/ratings/coinlauncher-logo-b.png`),
          link: 'https://coinlauncher.io/imigize-ico'
        },

        {
          valueImigize: 7.6,
          valueMax: 10,
          img: require(`../assets/img/ratings/logo-ico-marks.svg`),
          link: 'https://icomarks.com/ico/imigize'
        },

        {
          valueImigize: 7.4,
          valueMax: 10,
          img: require(`../assets/img/press/logo-foundico.png`),
          link: 'https://foundico.com/ico/the-imigize-service-blockchain.html'
        },

        {
          valueImigize: 3.69,
          valueMax: 5,
          img: require(`../assets/img/ratings/logo-icoholder.png`),
          link: 'https://icoholder.com/en/ico/imigize-17543'
        },

        {
          valueImigize: 3.5,
          valueMax: 5,
          img: require(`../assets/img/ratings/logo-newsbtc.png`),
          link: 'https://ico.newsbtc.com/ico/imigize/'
        },

        {
          valueImigize: 6.9,
          valueMax: 10,
          img: require(`../assets/img/ratings/logo-coinmarketplus.png`),
          link: 'https://www.coinmarketplus.com/token/imigize/'
        }
      ]
    }),
    components: {
      RatingIcon
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .ratings {
        padding: 3em 4% 3em 4%;
        position: relative;
        background-color: #fff;

        .bevel-container-wrap.bottom {
            top: 100%;
        }

        &__bottom-left {
            border: 4vw solid transparent;
            border-right: 100vw solid #fff;
            border-top: .2vw solid #fff;
        }

        &__title {
            margin-bottom: 1.3em;

            @include titleSection;
        }

        &__wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            &_show-all {
                position: relative;

                .ratings__item_toggle,
                &__btn-more span:nth-child(2) {
                    display: block;
                }

                .ratings__btn-more span:nth-child(1) {
                    display: none;
                }
            }

            @media only screen and (max-width: 575px) {
                justify-content: center;
            }
        }

        &__item {
            margin: 0 2% 3.7em 0;
            width: 100%;
            min-width: 100px;
            max-width: 245px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            order: 2;

            &_toggle {
                display: none;
            }

            &_order {
                order: 1;
            }

            &_no-mobile {
                @include w320-767 {
                    display: none;
                }
            }

            img,
            svg {
                vertical-align: middle;
                max-width: 100%;
                max-height: 100%;
                filter: grayscale(100%);
                transition: filter 0.5s, opacity 0.5s;
                cursor: pointer;
                opacity: 0.5;

                &:hover {
                    filter: grayscale(0);
                    opacity: 1;
                }
            }
            &_small {
                img, svg {
                    max-width: 80%;
                }
            }
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

            & span:nth-child(2) {
                display: none;
            }
        }

        &__placeholder {
            visibility: hidden;
            height: 0;
            padding: 0;
            margin-bottom: 0;
            border-top-width: 0;
            border-bottom-width: 0;
        }
    }
</style>
