<template>
    <section class="functionality-token" data-nav="1.5">
        <div class="bevel-container-wrap top">
            <div class="functionality-token__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="functionality-token__title">{{ $t('functionalityToken.title') }}</h2>
            <div class="functionality-token__description">
                <div class="functionality-token__text-wrap">
                    <p class="functionality-token__text">
                        {{ $t('functionalityToken.text1') }}
                    </p>
                    <i18n class="functionality-token__text" path="functionalityToken.text2" tag="p">
                        <a :href="$t('url.tokenWP')" class="functionality-token__text__link" target="_blank" rel="noopener">
                            {{ $t('functionalityToken.text2Link') }}
                        </a>
                    </i18n>

                    <p class="functionality-token__text">
                        {{ $t('functionalityToken.text3') }}
                    </p>
                    <p class="functionality-token__text-price">{{ $t('functionalityToken.text4') }}</p>
                </div>
                <img class="functionality-token__img" src="../assets/img/token/img-imigize-coin.png" width="233"
                     height="227"
                     alt="Bitcoin">
            </div>
            <div class="btn-container functionality-token__btn-container">
                <a class="btn functionality-token__btn arrow-colors-btn" :href="$t('url.tokenWP')" target="_blank" rel="noopener">
                    <div class="arrow-colors-btn__border"></div>
                    {{ $t('functionalityToken.btn') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'functionalityToken'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .functionality-token {
        position: relative;
        padding: 6em 4% 4em;
        background-color: #f0f0f0;
        @include w320-767 {
            padding: 3em 4%;
        }

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #fafafa;
            border-top: .2vw solid #fafafa;
        }

        &__title {
            margin-bottom: 1em;
            @include titleSection;
        }

        &__description {
            display: flex;
            margin-bottom: 5em;
            align-items: center;
            @include w320-767 {
                flex-direction: column-reverse;
            }
        }

        &__text-wrap {
            margin-right: 5%;
            max-width: calc(100% - 5% - 233px);
            @include w320-767 {
                max-width: none;
            }
        }

        &__text {
            position: relative;
            margin-bottom: 1em;
            padding-left: 30px;
            @include responsiveFont(18px, 15px);
            line-height: 1.5;
            color: #575e5e;
            text-align: justify;
            &:last-child {
                margin-bottom: 0
            }
            &:before {
                content: '';
                position: absolute;
                background-image: url("../assets/img/icons/arrow-right-li.svg");
                background-repeat: no-repeat;
                background-position: center center;
                height: 20px;
                width: 15px;
                top: 4px;
                left: 0;
            }
        }

        &__text__link {
            color: #3eabb1;
        }

        &__text-price {
            @include responsiveFont(18px, 15px);
            line-height: 1.5;
            color: #474c4c;
            text-align: center;
        }

        &__text__link {
            color: #3eabb1;
        }
        &__img {
            display: block;
            width: 233px;
            height: 230px;
            max-width: 35vw;
            max-height: 35vw;
            @include w320-767 {
                margin-bottom: 4em;
            }
        }

        &__btn-container {
            text-align: center;
        }

        &__btn {
            @include responsiveFont(18px, 15px);
            color: #414141;
        }
    }
</style>
