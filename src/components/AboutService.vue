<template>
    <section class="about-service" data-nav="2.2">
        <div class="bevel-container-wrap top">
            <div class="about-service__babel_top"></div>
        </div>
        <div class="container">
            <div class="row">
                <h2 class="about-service__title">{{ $t('aboutService.title')}}</h2>
                <p class="about-service__text about-service__text2">
                    {{ $t('aboutService.text1')}}

                </p>
                <p class="about-service__text">
                    {{ $t('aboutService.text2')}}
                </p>
                <i18n class="about-service__text" path="aboutService.text3" tag="p">
                    <a class="about-service__text__link" :href="$t('url.annotationWP')" target="_blank" rel="noopener">
                        {{ $t('aboutService.text3Link')}}
                    </a>
                </i18n>
                <div class="about-service__img-wrap">
                    <p class="about-service__textID">
                        <span :class="['about-service__textID__span', {'about-service__textID__span_woman': isWoman}]">
                            User ID: </span> {{getUserId}} &#183;&#183;&#183;
                    </p>
                    <ProductModal :size="size"
                                  :img="img"
                                  :value="value">
                    </ProductModal>
                    <div class="about-service__img"
                        :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
                    </div>
                </div>
            </div>

            <div class="about-service__about-wrap">
                <p class="about-service__about__text" v-html="$t('aboutService.textBottom1')"></p>
                <p class="about-service__about__text" v-html="$t('aboutService.textBottom2')"></p>
            </div>
        </div>
    </section>
</template>

<script>
  import ProductModal from './Product_modal.vue'

  export default {
    name: 'AboutService',
    data: () => ({
      size: 8.5,
      value: 97,
      img: 'footwear1.jpg',
      gender: 'man'
    }),

    computed: {
      backgroundImage() {
        return require(`../assets/img/product/${this.img}`)
      },

      isWoman() {
        return this.gender === 'woman'
      },

      getUserId() {
        if (this.gender === 'man') {
          return '7F203AB77'
        } else {
          return '75B4A88A8'
        }
      }
    },

    mounted() {
      this.addInterval()
    },

    methods: {
      addInterval() {
        const products = [
          {'size': 8.5, 'value': 97, 'img': 'footwear1.jpg', 'gender': 'man'},
          {'size': 9, 'value': 96, 'img': 'footwear2.jpg', 'gender': 'man'},
          {'size': 42, 'value': 95, 'img': 'footwear3.jpg', 'gender': 'man'},
          {'size': 8, 'value': 92, 'img': 'footwear6.png', 'gender': 'man'},
          {'size': 'XL', 'value': 87, 'img': 'jeans0.png', 'gender': 'man'},
          {'size': 6, 'value': 97, 'img': 'footwear4.jpg', 'gender': 'woman'},
          {'size': 6.5, 'value': 87, 'img': 'footwear5.jpg', 'gender': 'woman'},
          {'size': 36, 'value': 97, 'img': 'women_shoes1.jpg', 'gender': 'woman'},
          {'size': 37, 'value': 86, 'img': 'women_shoes2.jpg', 'gender': 'woman'},
          {'size': 36, 'value': 97, 'img': 'women_shoes3.jpg', 'gender': 'woman'},
          {'size': 36.5, 'value': 90, 'img': 'women_shoes4.jpg', 'gender': 'woman'},
          {'size': 36.5, 'value': 97, 'img': 'women_shoes5.jpg', 'gender': 'woman'},
          {'size': 37, 'value': 96, 'img': 'women_shoes6.jpg', 'gender': 'woman'},
          {'size': 'S', 'value': 96, 'img': 'jeans2.jpg', 'gender': 'woman'},
          {'size': '27/28', 'value': 92, 'img': 'jeans4.jpg', 'gender': 'woman'},
          {'size': 36, 'value': 96, 'img': 'jeans5.jpg', 'gender': 'woman'},
          {'size': 38, 'value': 89, 'img': 'jeans6.jpg', 'gender': 'woman'},
          {'size': 10, 'value': 96, 'img': 'jeans7.jpg', 'gender': 'woman'}
        ]
        let currentIndex = 1
        setInterval(() => {
          this.size = products[currentIndex].size
          this.value = products[currentIndex].value
          this.img = products[currentIndex].img
          this.gender = products[currentIndex].gender

          currentIndex += 1

          if (currentIndex === +products.length) {
            currentIndex = 0
          }
          this.preloadImg(products[currentIndex].img)
        }, 7000)
      },

      preloadImg(img) {
        const image = new Image()
        image.src = require(`../assets/img/product/${img}`)
      }
    },

    components: {
      ProductModal
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .about-service {
        padding: 4em 4%;
        background: #fff;
        position: relative;

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #fafafa;
            border-top: .2vw solid #fafafa;
        }

        &__title {
            margin-bottom: 1em;
            @include titleSection;
        }

        &__text {
            margin-bottom: 1.5em;
            @include responsiveFont(18px, 15px);
            line-height: 1.5;
            font-weight: 100;
            color: #575e5e;
            text-align: justify;
        }

        &__text__link {
            color: #3eabb1;
        }

        &__text2 {
            margin-bottom: 0.7em;
        }

        &__about-wrap {
            width: 100%;
            display: flex;
            justify-content: space-between;
            background: url("../assets/img/product/plashki.jpg") no-repeat center;
            background-size: contain;
            @include w320-767 {
                flex-direction: column;
                background: none;
            }
        }

        &__about__text {
            padding-left: 3%;
            width: 47%;
            @include responsiveFont(18px, 15px);
            line-height: 1.81;
            color: #111212;
            &:first-child {
                padding-left: 0;
            }
            @include w320-767 {
                margin-bottom: 1em;
                padding: 0;
                width: 100%;
            }
        }

        &__img-wrap {
            position: relative;
            padding: 1em 0;
            box-sizing: border-box;
            overflow: hidden;
        }

        &__textID {
            margin-bottom: 3em;
            line-height: 1.44;
            @include responsiveFont(18px, 15px);
            color: #3d4040;
            &__span {
                color: #14aac0;
                &_woman {
                    color: rgba(173, 78, 141, 0.8);
                }
            }
        }

        &__img {
            width: 100%;
            height: 490px;
            max-height: calc(100vw * 0.734);
            background: center no-repeat;
            background-size: contain;
        }
    }
</style>