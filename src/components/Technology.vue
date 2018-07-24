<template>
    <section class="technology" data-nav="2.5">
        <div class="technology__background technology__background_wave1"></div>
        <div class="technology__background technology__background_wave2"></div>
        <div class="bevel-container-wrap top">
            <div class="technology__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="technology__title">{{ $t('technology.title') }}</h2>
            <div class="technology__items-wrap">
                <div class="technology__item" v-for="n in 6">
                    <h3 class="technology__item__title">
                        <AnimationText v-bind:text="text(n)"
                                       v-bind:n="n"></AnimationText>
                    </h3>
                    <p class="technology__item__text">
                        <span class="technology__item__text__icon"
                              :style="{ 'background-image': 'url(' + backgroundIcon(n) + ')' }">
                              </span>
                        {{ $t(`technology.item${n}.text`) }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import AnimationText from './AnimationText.vue'

  export default {
    name: 'technology',
    methods: {
      backgroundIcon(n) {
        return require(`../assets/img/technology/icon${n}.png`)
      },

      text(n) {
        return this.$i18n.t(`technology.item${n}.title`)
      }
    },
    components: {
      AnimationText
    },

    mounted() {
      this.$i18n.t('technology.title')
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    @keyframes animatedBackground {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 1920px 0;
        }
    }

    .technology {
        position: relative;
        padding: 7em 4% 4em;
        background: #14516b no-repeat center;
        overflow: hidden;

        &__background {
            position: absolute;
            left: -20%;
            width: 140%;
            background: repeat-x center;
            &_wave1 {
                bottom: 20%;
                height: 510px;
                transform: rotate(12deg);
                opacity: 0.8;
                background-image: url('../assets/img/technology/wave1.png');
                @include w768 {
                    animation: animatedBackground 45s linear infinite;
                }
            }
            &_wave2 {
                bottom: 10%;
                height: 190px;
                opacity: 0.5;
                background-image: url('../assets/img/technology/wave2.png');
                @include w768 {
                    animation: animatedBackground 60s linear infinite;
                }
            }
        }

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #eaf1f3;
            border-top: .2vw solid #eaf1f3;
        }
        &__title {
            @include titleSection;
            margin-bottom: 1em;
            color: #fff
        }

        &__items-wrap {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        &__item {
            width: 47%;
            @include w320-767 {
                width: 100%;
            }
        }

        &__item__title {
            position: relative;
            @include responsiveFont(38px, 26px);
            font-weight: 100;
            line-height: 1.5;
            letter-spacing: -0.0025em;
            color: #fff;
        }

        $widthIcon: 35px;

        &__item__text {
            position: relative;
            padding: 1em 5% 1em calc(3.5% + #{$widthIcon} / 2);
            min-height: 170px;
            @include responsiveFont(18px, 14px);
            font-weight: 400;
            line-height: 1.44;
            text-align: justify;
            color: #fff;
            @include w320-767 {
                margin-left: calc(#{$widthIcon} / 2);
                min-height: auto;
            }
        }

        &__item__text__icon {
            position: absolute;
            top: calc(1em + 5px);
            left: calc(#{$widthIcon} / -2);
            width: $widthIcon;
            height: $widthIcon;
            background: no-repeat center;
            background-size: contain;
        }
    }
</style>
