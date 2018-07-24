<template>
    <section class="trade" data-nav="3">
        <div class="bevel-container-wrap top">
            <div class="trade__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="trade__title">{{ $t('trade.title') }}</h2>
            <div class="trade__chart-container">
                <p class="trade__text">{{ $t('trade.text1') }}
                    <br>
                    {{ $t('trade.text2') }}
                </p>
                <div class="trade__img-container">
                    <span v-bind:class="spanClass">{{ $t('trade.imgSpanSmall') }}</span>
                    <img src="../assets/img/chart.png" alt="">
                    <span v-bind:class="spanClass">{{ $t('trade.imgSpanBig') }}</span>
                </div>
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="trade__babel_bottom"></div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'trade',
    computed: {
      spanClass() {
        switch (this.$i18n.locale) {
          case 'ru':
            return 'span-ru'
          default:
            return 'span'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .trade {
        padding: 7em 4% 4em;
        min-height: 700px;
        position: relative;
        background: #063649 url("../assets/img/background/trade-background.png") no-repeat center;

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #fff;
            border-top: .2vw solid #fff;
        }

        &__title {
            @include titleSection;
            color: #fff;
        }
        &__chart-container {
            margin-top: 60px;
            position: relative;
        }

        &__text {
            width: 50%;
            font-size: 16px;
            color: #fff;
            opacity: 0.7;
            line-height: 1.2;
            @include w320-767 {
                width: 100%;
                br {
                    display: none
                }
            }
        }
        &__img-container {
            display: inline-block;
            position: absolute;
            top: 0;
            right: 250px;
            @include w320-767 {
                top: 100px;
                right: 0;
                width: 100%;
                box-sizing: border-box;
            }
        }
        &__img-container img {
            max-width: 100%;
        }
        &__img-container span {
            font-size: 43px;
            color: #fff;
            position: absolute;
            @include w320-767 {
                font-size: 30px;
            }
        }
        &__img-container span:first-child {
            top: 190px;
            left: -136px;
            @include w320-767 {
                top: 120px;
                left: 0;
            }
        }
        &__img-container span:last-child {
            top: 8px;
            right: -159px;
            @include w320-767 {
                top: -40px;
                right: 0;
            }
        }
        &__img-container .span-ru:first-child {
            left: -90px;
            @include w320-767 {
                top: 120px;
                left: 0;
            }
        }
        &__img-container .span-ru:last-child {
            right: -110px;
            @include w320-767 {
                right: 0;
            }
        }
    }
</style>
