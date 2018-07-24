<template>
    <section class="partners" data-nav="2.9">
        <div class="bevel-container-wrap top">
            <div class="partners__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="partners__title">{{ $t('partners.title')}}</h2>

            <div class="partners__wrapper">

                <a class="partners__item"
                   v-for="(item, index) in items" :key="item.alt"
                   :href="item.href"
                   @click.prevent="onItemClick(index)"
                   target="_blank" rel="noopener">
                    <img :src="item.src" :alt="item.alt">
                </a>

                <a class="partners__item partners__item_no-mobile"></a>
                <a class="partners__item partners__item_no-mobile"></a>
                <!--<a class="partners__item partners__item_no-mobile"></a>-->
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="bevel-container partners__bottom-left"></div>
        </div>

        <PartnersPopup v-if="showModal"
                       :show="showModal"
                       :slides="activeSlides"
                       @popupHide="popupHide"
        ></PartnersPopup>
    </section>
</template>

<script>
  const PartnersPopup = () => import(/* webpackChankName: "PartnersPopup" */'./PartnersPopup.vue')

  export default {
    name: 'Partners',
    data: () => ({
      showModal: false,
      activeSlides: []
    }),

    beforeCreate() {
      this.items = [
        {
          href: 'https://www.runlab.ru/',
          src: require('../assets/img/partners/runlub.png'),
          alt: 'Runlab',
          slides: [
            require('../assets/img/partnersPopup/runlab0.jpg'),
            require('../assets/img/partnersPopup/runlab1.jpg'),
            require('../assets/img/partnersPopup/runlab2.jpg'),
            require('../assets/img/partnersPopup/runlab3.jpg'),
            require('../assets/img/partnersPopup/runlab4.jpg'),
            require('../assets/img/partnersPopup/runlab5.jpg'),
            require('../assets/img/partnersPopup/runlab6.jpg'),
            require('../assets/img/partnersPopup/runlab7.jpg')
          ]
        },

        {
          href: 'https://www.wildberries.ru/services/o-nas',
          src: require('../assets/img/partners/wb.png'),
          alt: 'Wildberries',
          slides: [
            require('../assets/img/partnersPopup/wb0.jpg'),
            require('../assets/img/partnersPopup/wb1.jpg'),
            require('../assets/img/partnersPopup/wb2.jpg'),
            require('../assets/img/partnersPopup/wb3.jpg'),
            require('../assets/img/partnersPopup/wb4.jpg'),
            require('../assets/img/partnersPopup/wb5.jpg')
          ]
        },

        {
          href: 'https://www.sportmaster.ru/about/',
          src: require('../assets/img/partners/sportmaster.png'),
          alt: 'Sportmaster',
          slides: [
            require('../assets/img/partnersPopup/sportmaster0.jpg'),
            require('../assets/img/partnersPopup/sportmaster1.jpg'),
            require('../assets/img/partnersPopup/sportmaster2.jpg'),
            require('../assets/img/partnersPopup/sportmaster3.jpg'),
            require('../assets/img/partnersPopup/sportmaster4.jpg')
          ]
        },

        {
          href: 'http://keddo.ru/',
          src: require('../assets/img/partners/keddo.png'),
          alt: 'Keddo',
          slides: [
            require('../assets/img/partnersPopup/keddo0.jpg'),
            require('../assets/img/partnersPopup/keddo1.jpg'),
            require('../assets/img/partnersPopup/keddo2.jpg'),
            require('../assets/img/partnersPopup/keddo3.jpg'),
            require('../assets/img/partnersPopup/keddo4.jpg'),
            require('../assets/img/partnersPopup/keddo5.jpg')
          ]
        },

        {
          href: 'https://www.converse.com/us/en_us/c/converse',
          src: require('../assets/img/partners/converse.png'),
          alt: 'Converse',
          slides: [
            require('../assets/img/partnersPopup/convers0.jpg'),
            require('../assets/img/partnersPopup/convers1.jpg'),
            require('../assets/img/partnersPopup/convers2.jpg'),
            require('../assets/img/partnersPopup/convers3.jpg'),
            require('../assets/img/partnersPopup/convers4.jpg')
          ]
        },

        {
          href: 'http://www.strobbs.ru/',
          src: require('../assets/img/partners/strobbs.png'),
          alt: 'Strobbs',
          slides: [
            require('../assets/img/partnersPopup/strobbs0.jpg'),
            require('../assets/img/partnersPopup/strobbs1.jpg'),
            require('../assets/img/partnersPopup/strobbs2.jpg'),
            require('../assets/img/partnersPopup/strobbs3.jpg'),
            require('../assets/img/partnersPopup/strobbs4.jpg'),
            require('../assets/img/partnersPopup/strobbs5.jpg')
          ]
        },

        {
          href: 'https://www.ecco-shoes.ru/',
          src: require('../assets/img/partners/ecco.png'),
          alt: 'Ecco',
          slides: [
            require('../assets/img/partnersPopup/ecco0.jpg'),
            require('../assets/img/partnersPopup/ecco1.jpg'),
            require('../assets/img/partnersPopup/ecco2.jpg'),
            require('../assets/img/partnersPopup/ecco3.jpg'),
            require('../assets/img/partnersPopup/ecco4.jpg'),
            require('../assets/img/partnersPopup/ecco5.jpg')
          ]
        },

        {
          href: 'https://anta-sport.ru/',
          src: require('../assets/img/partners/anta.png'),
          alt: 'Anta',
          slides: [
            require('../assets/img/partnersPopup/anta0.jpg'),
            require('../assets/img/partnersPopup/anta1.jpg'),
            require('../assets/img/partnersPopup/anta2.jpg'),
            require('../assets/img/partnersPopup/anta3.jpg'),
            require('../assets/img/partnersPopup/anta4.jpg')
          ]
        },

        {
          href: 'https://heelys.com/',
          src: require('../assets/img/partners/heelys.png'),
          alt: 'Heelys',
          slides: [
            require('../assets/img/partnersPopup/heelis0.jpg'),
            require('../assets/img/partnersPopup/heelis1.jpg'),
            require('../assets/img/partnersPopup/heelis2.jpg'),
            require('../assets/img/partnersPopup/heelis3.jpg')
          ]
        },

        {
          href: 'https://vans.ru/',
          src: require('../assets/img/partners/vans.png'),
          alt: 'Vans',
          slides: [
            require('../assets/img/partnersPopup/vans0.jpg'),
            require('../assets/img/partnersPopup/vans1.jpg'),
            require('../assets/img/partnersPopup/vans2.jpg'),
            require('../assets/img/partnersPopup/vans3.jpg'),
            require('../assets/img/partnersPopup/vans4.jpg'),
            require('../assets/img/partnersPopup/vans5.jpg'),
            require('../assets/img/partnersPopup/vans6.jpg')
          ]
        }
      ]
    },

    methods: {
      popupHide() {
        this.showModal = false
      },

      onItemClick(index) {
        this.activeSlides = this.items[index].slides
        this.showModal = true
      }
    },

    components: {
      PartnersPopup
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .partners {
        padding: 6em 4% 8em 4%;
        position: relative;
        background: #fff url("../assets/img/partners/background.jpg") no-repeat;
        background-size: 100% 100%;

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #14516b;
            border-top: .2vw solid #14516b;
        }

        &__title {
            margin-bottom: 2.2em;

            @include titleSection;
        }

        &__wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            &_show-all {
                position: relative;

                .partners__item_toggle,
                &__btn-more span:nth-child(2) {
                    display: block;
                }

                .partners__btn-more span:nth-child(1) {
                    display: none;
                }
            }
        }

        &__item {
            margin-bottom: 6em;
            width: 22%;
            min-width: 150px;
            max-width: 208px;
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
                cursor: pointer;

                &:hover {
                    box-shadow: 0 1px 8.8px 0.2px rgba(101, 119, 118, 0.36), inset 0 0 5px white;
                    animation: pulse 0.5s;
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

    @keyframes pulse {
        from {
            transform: scale3d(1, 1, 1);
        }

        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
            transform: scale3d(1, 1, 1);
        }
    }
</style>