<template>
    <section class="product-modal product-modal__animation" ref="productModal">
        <div class="product-modal__wrap">
            <div class="product-modal__wrap__left">
                <p class="product-modal__description"
                   v-html="$t(description, { size: size, sectorTextBottom: $t(sectorTextBottom) })"></p>
                <p class="product-modal__tagline" v-html="$t(tagline)"></p>
            </div>
            <div class="product-modal__wrap__right">
                <Sector class="product-modal__sector"
                        v-bind:color="color"
                        v-bind:value="value">
                </Sector>
                <div class="product-modal__sector-text-top">{{ $t('productModal.sectorTextTop') }}</div>
                <div class="product-modal__sector-text">{{ $t(sectorTextBottom)}}</div>
            </div>
        </div>
        <div class="product-modal__btn">{{ $t('productModal.btn') }}</div>
    </section>
</template>

<script>
  import Sector from './Sector.vue'

  const value = {
    NEW: '',
    PERFECT: 96,
    VERY_GOOD: 90,
    GOOD: 80,
    ACCEPTABLE: 60,
    SOSO: 40,
    BAD: 20
  }

  export default {
    name: 'productModal',
    props: ['size', 'value', 'img'],
    computed: {
      tagline() {
        switch (true) {
          case this.perfect:
            return 'productModal.tagline.perfect'
          case this.veryGood:
            return 'productModal.tagline.veryGood'
          case this.good:
            return 'productModal.tagline.good'
          case this.acceptable:
            return 'productModal.tagline.acceptable'
          case this.soso:
            return 'productModal.tagline.soso'
          case this.bad:
            return 'productModal.tagline.bad'
          default:
            return 'productModal.tagline.default'
        }
      },

      description() {
        switch (true) {
          case this.soso:
            return 'productModal.description.good'
          default:
            return 'productModal.description.default'
        }
      },

      sectorTextBottom() {
        switch (true) {
          case this.perfect:
            return 'productModal.sectorTextBottom.perfect'
          case this.veryGood:
            return 'productModal.sectorTextBottom.veryGood'
          case this.good:
            return 'productModal.sectorTextBottom.good'
          case this.acceptable:
            return 'productModal.sectorTextBottom.acceptable'
          case this.soso:
            return 'productModal.sectorTextBottom.soso'
          case this.bad:
            return 'productModal.sectorTextBottom.bad'
          default:
            return 'productModal.sectorTextBottom.default'
        }
      },

      perfect() {
        return this.value >= value.PERFECT
      },

      veryGood() {
        return this.value >= value.VERY_GOOD
      },

      good() {
        return this.value >= value.GOOD
      },

      acceptable() {
        return this.value >= value.ACCEPTABLE
      },

      soso() {
        return this.value >= value.SOSO
      },

      bad() {
        return this.value >= value.BAD
      },

      color() {
        switch (true) {
          case this.perfect:
            return '#01bf4d'
          case this.veryGood:
            return '#31d80f'
          case this.good:
            return '#93db0f'
          case this.acceptable:
            return '#f7d444'
          case this.soso:
            return '#eba215'
          case this.bad:
            return '#e6e6e6'
          default:
            return '#e6e6e6'
        }
      }
    },

    watch: {
      img() {
        this.addAnimation()
      }
    },

    methods: {
      addAnimation() {
        const productModal = this.$refs.productModal
        const CLASS_ANIMATION = `${productModal.classList[0]}__animation`

        productModal.classList.remove(CLASS_ANIMATION)

        setTimeout(() => {
          productModal.classList.add(CLASS_ANIMATION)
        }, 100)
      }
    },

    components: {
      Sector
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $modalWidth: 536px;

    @keyframes around {
        0% {
            left: 100%;
        }
        55% {
            left: calc(65% - #{$modalWidth} / 2)
        }
        100% {
            left: calc(100% - #{$modalWidth});
        }
    }

    @media only screen and (max-width: 767px) {
        @keyframes around {
            0% {
                left: 100%;
            }
            55% {
                left: -10%;
            }
            100% {
                left: 0;
            }
        }
    }

    .product-modal {
        position: absolute;
        top: 0;
        left: 100%;
        padding: 1.3em 8.75%;
        width: $modalWidth;
        max-width: 100%;
        box-sizing: border-box;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 47%, rgba(200, 200, 200, 0.4) 100%);
        @include w320-767 {
            background: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 47%, rgba(200, 200, 200, 0.9) 100%);
        }

        &__animation {
            animation: around 2s linear 0s both;
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1em;
        }

        &__wrap__left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__description,
        &__tagline {
            @include responsiveFont(16.68px, 14px);
            line-height: 1.44;
            color: #3a3535;
        }

        &__wrap__right {
            text-align: center;
        }

        &__sector-text-top {
            font-size: 12.67px;
            line-height: 1.4;
            color: #5f5f5f;
        }

        &__sector-text {
            @include responsiveFont(16.32px, 13.32px);
            line-height: 1.4;
            font-weight: 600;
            color: #181818;
            text-transform: capitalize;
        }

        &__btn {
            width: 100%;
            @include responsiveFont(16px, 13px);
            line-height: 2.44;
            text-transform: uppercase;
            text-align: center;
            color: #181818;
            background-color: rgba(129, 230, 255, 0.42);
        }
    }
</style>
