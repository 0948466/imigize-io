<template>
  <section class="blockchain" data-nav="4">
    <div class="bevel-container-wrap top">
      <div class="blockchain__babel_top"></div>
    </div>
    <div class="container">
      <h2 class="blockchain__title">{{ $t('blockchain.title') }}</h2>
      <i18n class="blockchain__text" path="blockchain.text" tag="p">
        <a :href="$t('url.distinction')" class="blockchain__text__link" target="_blank" rel="noopener">
          {{ $t('blockchain.textLink') }}
        </a>
      </i18n>
      <div class="blockchain__items">
        <h3 class="blockchain__items__title">{{ $t('blockchain.items.title') }}</h3>
        <img class="blockchain__img" :src="require('../assets/img/blockchain/why-blockchain.jpg')">
        <div class="blockchain__items-wrap">
          <div class="blockchain__col blockchain__col2">
            <div class="blockchain__col__icon blockchain__col__icon2"></div>
            <p class="blockchain__col__text" v-html="$t('blockchain.items.text2')"></p>
          </div>
          <div class="blockchain__col blockchain__col1">
            <div class="blockchain__col__icon blockchain__col__icon1"></div>
            <p class="blockchain__col__text" v-html="$t('blockchain.items.text1')"></p>
          </div>
          <div class="blockchain__col blockchain__col3">
            <div class="blockchain__col__icon blockchain__col__icon3"></div>
            <p class="blockchain__col__text" v-html="$t('blockchain.items.text3')"></p>
          </div>
          <div class="blockchain__col blockchain__col4">
            <div class="blockchain__col__icon blockchain__col__icon4"></div>
            <p class="blockchain__col__text" v-html="$t('blockchain.items.text4')"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'blockchain',
    mounted() {
      this.loadCheck()
    },
    watch: {},
    methods: {
      loadCheck() {
        if (document.readyState === 'complete') {
          this.preloadImg()
        } else {
          window.addEventListener('load', this.preloadImg)
        }
      },

      preloadImg() {
        const urlImages = ['shoes-cloth-gold.png', 'antropom-gold.png', 'comf-gold.png', 'analitiks-gold.png']

        for (let url of urlImages) {
          const image = new Image()
          image.src = require(`../assets/img/blockchain/${url}`)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../scss/mixins.scss";

  .blockchain {
    background-size: cover;
    padding: 6em 4% 4em;
    position: relative;
    background: #fafafa url("../assets/img/background/blockchain-background.png") no-repeat center;
    @include w320-767 {
      filter: grayscale(.1);
    }

    &__babel_top {
      border: 4vw solid transparent;
      border-right: 100vw solid #07051d;
      border-top: 0.2vw solid #07051d;
    }

    &__title {
      margin: 0 auto;
      @include titleSection;
      margin-bottom: 1.5em;
    }

    &__text {
      position: relative;
      margin-bottom: 1.5em;
      @include responsiveFont(18px, 14px);
      line-height: 1.5;
      color: #575757;
      text-align: justify
    }

    &__text__link {
      color: #3eabb1;
    }

    &__items {
      margin-bottom: 0;
    }

    &__items-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__items__title {
      @include responsiveFont(18px, 15px);
      line-height: 1.5;
      color: #575757;
      margin-bottom: 1.1em;
    }

    &__img {
      margin-bottom: 2.3em;
      width: 100%;
    }

    &__col {
      margin-bottom: 1em;
      display: inline-block;
      width: 24%;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      &:hover {
        .blockchain__col__icon {
          transform: scale(1.1);
          transition: transform 0.4s;
        }
      }

      @include w320-767 {
        width: 47%;
        &:nth-child(even) {
          margin-right: 4%;
        }
      }
    }

    $iconWidth: 80px;

    &__col__icon1 {
      background: url("../assets/img/blockchain/shoes-cloth.png") no-repeat;
    }

    &__col:hover > &__col__icon1 {
      background: url("../assets/img/blockchain/shoes-cloth-gold.png") no-repeat;
      background-size: contain;
    }

    &__col__icon2 {
      background: url("../assets/img/blockchain/antropom.png") no-repeat;
    }

    &__col:hover > &__col__icon2 {

      background: url("../assets/img/blockchain/antropom-gold.png") no-repeat;
      background-size: contain
    }

    &__col__icon3 {
      background: url("../assets/img/blockchain/comf.png") no-repeat;
    }

    &__col:hover > &__col__icon3 {
      background: url("../assets/img/blockchain/comf-gold.png") no-repeat;
      background-size: contain;
    }

    &__col__icon4 {
      background: url("../assets/img/blockchain/analitiks.png") no-repeat;
    }

    &__col:hover > &__col__icon4 {
      background: url("../assets/img/blockchain/analitiks-gold.png") no-repeat;
      background-size: contain;
    }

    &__col__icon {
      margin: 0 auto;
      width: $iconWidth;
      height: $iconWidth;
      background-size: contain
    }

    $textWidth: 520px;

    &__col__text {
      @include responsiveFont(15px, 11px);
      color: #4f4f4f;
      line-height: 1.75;
    }
  }
</style>
