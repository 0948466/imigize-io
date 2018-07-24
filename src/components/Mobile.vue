<template>
    <section class="mobile">
        <div class="bevel-container-wrap top">
            <div class="mobile__babel_top"></div>
        </div>
        <div class="mobile__container">
        <h2 class="mobile__title">
            {{ $t('mobile.title')}}
        </h2>
        <div class="mobile__wrap">
            <div class="mobile__left">
                <img class="mobile__left__img" :src="srcImgPhone" alt="Cell phones">
            </div>
            <div class="mobile__right">
                <div class="mobile__top">
                    <h3 class="mobile__top__title">{{ $t('mobile.topTitle')}}
                        <a :href="$t('url.mobileGoogle')" class="mobile__imiscan__span" target="_blank" rel="noopener">imiscan</a>
                    </h3>
                    <p class="mobile__top__text">
                        {{ $t('mobile.topText')}}
                    </p>
                    <div class="mobile__mobile">
                        <div class="mobile__mobile-item">
                            <a :href="$t('url.mobileGoogle')" class="mobile__mobile-google" target="_blank" rel="noopener"></a>
                            <br>
                            <a :href="$t('url.mobileApple')" class="mobile__mobile-apple" target="_blank" rel="noopener"></a>
                        </div>
                    </div>
                </div>
                <h3 class="mobile__bottom__title">
                    {{ $t('mobile.bottomTitle1')}}
                    <br>
                    {{ $t('mobile.bottomTitle2')}}
                </h3>
                <br>
                <a href="https://imigize.com/faq" class="mobile__btn" target="_blank" rel="noopener">
                    {{ $t('mobile.btn')}}
                </a>
            </div>
        </div>
        <a :href="$t('url.chartTelegram')" class="mobile__link" target="_blank" rel="noopener">
            {{ $t('mobile.link')}}
        </a>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Mobile',
    computed: {
      srcImgPhone() {
        return require(`../assets/img/mobile/background-phone-${this.$i18n.locale}.png`)
      }
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .mobile {
        padding: 7em 4% 4em;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        color: #3a3535;
        position: relative;
        background-color: #eaf1f3;

        &__container {
            margin: 0 auto;
            max-width: 1100px;
        }

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #fff;
            border-top: .2vw solid #fff;
        }

        &__title {
            @include titleSection;
            margin-bottom: 1.5em;
            text-align: left;
        }

        &__wrap {
            margin-bottom: 2em;
            display: flex;
            justify-content: space-around;
            align-items: center;
            @include w320-767 {
                flex-wrap: wrap;
            }
        }
        &__left {
            margin-right: 5%;
            width: 50%;
            @include w320-767 {
                margin: 0 auto;
                width: 70%;
            }
        }

        &__left__img {
            width: 100%;
        }

        &__right {
            max-width: 460px;
        }

        &__top {
            margin: 0 auto 2.5em;
        }

        &__top__title,
        &__bottom__title {
            position: relative;
            display: inline-block;
            vertical-align: top;
            padding: 0 48px;
            @include responsiveFont(20px, 16px);
            line-height: 1.5;
            font-weight: 400;
            letter-spacing: -0.005em;
            color: #474646;
        }

        &__top__title::before,
        &__bottom__title::before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            margin-top: -5px;
            width: 38px;
            height: 38px;
            font-weight: 600;
            background-color: #9aecf6;
            border-radius: 50%;
            @include responsiveFont(24px, 20px);
            line-height: 37px;
            color: #fff;
        }

        &__top__title {
            margin: 0 auto 0.4em;
        }

        &__top__title::before {
            content: '1';
        }

        &__top__text {
            margin-bottom: 1.1em;
            @include responsiveFont(14px, 12px);
            line-height: 1.4;
            color: #131313;
            letter-spacing: -0.05em;
        }

        &__imiscan__span {
            display: inline;
            font-weight: bold;
            color: #4cdbef;
            cursor: pointer;
        }

        &__mobile {
            margin: 0 auto 25px;
            font-size: 15px;
            font-weight: 300;
            text-align: center;
        }

        &__mobile-apple,
        &__mobile-google {
            display: inline-block;
            vertical-align: top;
            width: 179px;
            height: 55px;
            cursor: pointer;
        }

        &__mobile-google {
            margin-bottom: 1em;
            background: url("../assets/img/mobile/google-icon.png") center no-repeat;
            background-size: 80%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
        }

        &__mobile-apple {
            background: url("../assets/img/mobile/icon-app-store.png") center no-repeat;
            background-size: 80%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.22);
            border-radius: 5px;
        }

        &__bottom__title {
            margin-bottom: 1.5em;
        }

        &__bottom__title::before {
            content: '2';
        }

        &__btn {
            display: inline-block;
            vertical-align: top;
            padding: 12px;
            min-width: 212px;
            box-sizing: border-box;
            border-radius: 7px;
            font-style: normal;
            font-size: 19px;
            color: #fff;
            background-color: #60d3e8;
            text-align: center;
            cursor: pointer;
            font-weight: 600;
            letter-spacing: -.045em;
            &:hover {
                background-color: #4cdbef;
            }
        }

        &__link {
            @include responsiveFont(20px, 16px);
            font-style: italic;
            color: #38a8bc;
            letter-spacing: -0.005em;
            cursor: pointer;
        }

        &__link__span {
            position: relative;
            margin-left: 20px;
            display: inline-block;
            color: #474646;
            padding-left: 36px;
            &:hover {
                color: #03cce5;
            }
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                margin-top: calc(-27px / 2);
                left: 0;
                width: 30px;
                height: 27px;
                background: url("../assets/img/mobile/icon-tel-blue.svg") no-repeat;
                background-size: contain;
            }
        }
    }
</style>