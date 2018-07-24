<template>
    <footer class="footer">
        <div class="footer__row container">
            <p class="footer__row__text">Copyright © 2018 Imigize Group</p>

            <a class="footer__link" :href="$t('url.termsCondition')" target="_blank" rel="noopener">Terms & Condition</a>
            <a class="footer__link" :href="$t('url.saleAgreement')" target="_blank" rel="noopener">Sale agreement</a>
            <a class="footer__link" :href="$t('url.privacyPolicy')" target="_blank" rel="noopener">Privacy policy</a>
        </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .footer {
        padding: 0 4%;
        background-color: #e9eeef;
        &__row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 50px;
            @include w320-767 {
                flex-wrap: wrap-reverse;
            }
        }
        &__row__text {
            font-size: 12px;
            color: #636363;
            @include w320-767 {
                width: 100%;
                text-align: center;
            }
        }

        &__link {
            @include responsiveFont(14.32px, 12px);
            line-height: 2.02;
            font-weight: 500;
            color: #636363;
            text-decoration: underline;
            cursor: pointer;
        }

        &__social-title {
            margin-bottom: 10px;
            font-size: 16px;
            @include responsiveFont(16px, 14px);
            font-weight: 400;
            line-height: 1.4375;
            color: #000;
        }

        &__social {
            display: inline-block;
            vertical-align: top;
            text-align: left;
        }

        &__social a {
            position: relative;
            padding-left: 25px;
            width: 47%;
            max-width: 105px;
            box-sizing: border-box;
            @include responsiveFont(14.32px, 12px);
            line-height: 2.02;
            font-weight: 500;
            color: #636363;
            letter-spacing: -0.025em;
            text-decoration: none;
            cursor: pointer;
            @include w320-767 {
                margin-right: 3%;
            }
            &:nth-child(even) {
                margin-right: 6%;
                @include w320-767 {
                    margin-right: 3%;
                }
            }

            &:last-child {
                margin-right: 0;
            }
            &:hover {
                color: #32d0e7;
            }
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                margin-top: -8px;
                width: 16px;
                height: 16px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }

        &__social-link_vk::before {
            background-image: url("../assets/img/footer/icon-vk.svg");
        }

        &__social-link_fb::before {
            background-image: url("../assets/img/footer/icon-fb.svg");
        }

        &__social-link_tw::before {
            background-image: url("../assets/img/footer/icon-tw.svg");
        }

        &__social-link_ytube::before {
            background-image: url("../assets/img/footer/icon-ytube.svg");
        }

        &__social-link_tel::before {
            background-image: url("../assets/img/footer/icon-tel.svg");
        }
    }
</style>
