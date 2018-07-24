<template>
    <section class="header">
        <div :class="['header__inner', {'header__inner_change-color': headerWhite, 'header__inner_fixed': headerFixed}]">
            <logo-imigize class="logo-imigize"/>
            <a @click="onLinkClick('#overview')" class="header__link-text header__link-text_about">
                {{ $t('header.about') }}
            </a>
            <a @click="onLinkClick('#team')" class="header__link-text header__link-text_team">
                {{ $t('header.team') }}
            </a>
            <a class="header__link-text"
               :href="$t('url.wp')" target="_blank" rel="noopener">
                Whitepaper
            </a>
            <a v-if="ifTest()" class="header__link-text"
               href="#" target="_blank" rel="noopener">
                Terms
            </a>
            <router-link :to="{name:'faq'}" class="header__link-text">
                Faq
            </router-link>
            <router-link :to="{name:'referral'}" class="header__link-text header__link-text_referral">
                Referral
            </router-link>
            <div class="header__link-wrap">
                <a class="header__link header__link_login"
                   href="https://sale.imigize.io/login"
                   target="_blank" rel="noopener">Log in</a>
                <a class="header__link header__link_register"
                   href="https://sale.imigize.io/login"
                   target="_blank" rel="noopener">{{ $t('header.buyTokens') }}</a>
                <a class="header__link header__link_telegram" href="https://t.me/imigize" target="_blank" rel="noopener">Chat</a>
            </div>
            <LocalChange :isFlex="true"
                         style="margin-right: 3vw"
            ></LocalChange>
            <sandwich v-if="isMobile"></sandwich>
        </div>
    </section>
</template>

<script>
  import LogoImigize from '@/components/LogoImigize.vue'
  import LocalChange from '@/components/LocalChange.vue'
  const Sandwich = () => import(/* webpackChunkName: "Sandwich" */'@/components/Sandwich.vue')

  export default {
    name: 'MainHeader',
    props: ['linkRu', 'linkEn', 'headerWhite', 'headerFixed'],
    computed: {
      linkHome() {
        if (`${this.$i18n.locale}` === 'ru') {
          return '/index-ru.html'
        }
        return '/index.html'
      },
      isMobile() {
        return window.innerWidth < 768
      }
    },

    methods: {
      ifTest() {
        return ~window.location.href.indexOf('test')
      },

      onLinkClick(selector) {
        try {
          if (this.$route.name === 'homepage') {
            this.$scrollTo(document.querySelector(selector))
          } else {
            this.$router.push({name: 'homepage', hash: `#${selector.slice(1)}`})
          }
        } catch (e) {
          console.error(e.message)
        }
      }
    },
    components: {
      LogoImigize,
      LocalChange,
      Sandwich
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .logo-imigize {
        display: inline-block;
        vertical-align: middle;
        margin-left: 3vw;
        height: 1.4vw;
        @include w320-767 {
            display: none !important;
        }
    }

    .header {
        position: relative;
        height: 53px;

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 53px;
            width: 100%;
            text-align: center;
            background-color: #000;
            transition: background-color .5s cubic-bezier(0.28, 0.11, 0.32, 1);
            border-bottom: 1px solid rgba(136, 136, 136, .4);
            box-sizing: border-box;
            @include w320-767 {
                flex-wrap: wrap;
            }
            &_fixed {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                box-sizing: border-box;
                z-index: 12;
            }

            &_change-color {
                background-color: rgba(255, 255, 255, 0.9);
                .header__text,
                .header__link {
                    border-color: #02c3d8;
                    color: #333;
                }
                .header__link-text {
                    color: #8a9191;
                }
            }
        }

        &__link-text {
            @include responsiveFont(18px, 14px);
            color: #165a73;
            cursor: pointer;
            &:hover {
                color: #1d9da3;
            }

            &.router-link-active {
                color: #1d9da3;
                cursor: default;
            }
            @include w320-767 {
                display: none;
            }

            &_referral {
                @media only screen and (max-width: 1000px) {
                    display: none;
                }
            }
        }

        &__link-wrap {
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
            @include w320-767 {
                margin-right: 5vw;
                margin-left: 5vw;
            }

            @media only screen and (max-width: 320px) {
                margin-right: 2vw;
                margin-left: 2vw;
            }
        }

        &__link {
            display: inline-block;
            margin-right: 4%;
            min-height: 35px;
            line-height: 36px;
            box-sizing: border-box;
            @include responsiveFont(19px, 16px);
            font-weight: 600;
            color: #fff;
            opacity: 1;
            transition: color 0s;
            border: 1px solid #fff;
            text-align: center;
            @include w768 {
                padding: 1px 1em;
            }
            @include w320-767 {
                padding: 1px 0.6em;
                margin-right: 0;
            }

            &_login {
                min-width: 100px;
                color: #03cfe6;
                &:hover {
                    color: #fff;
                    opacity: 1;
                    background-color: #03cfe6;
                    border-color: #03cfe6;
                }
                @include w320-767 {
                    display: none;
                }
            }

            &_register {
                @include w320-767 {
                    margin-right: 5vw;
                }
                &:hover {
                    opacity: 1;
                    background-color: #03cfe6;
                    color: #fff;
                    border-color: #03cfe6;
                }
            }

            &_telegram {
                margin-left: 3%;
                padding-left: calc(0.5em + 20px);
                position: relative;
                color: #fff;
                border: none;
                &:hover {
                    color: #03cfe6;
                }
                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0.2em;
                    margin-top: -10px;
                    width: 20px;
                    height: 20px;
                    background: url('../assets/img/icons/icon-telegram.svg') no-repeat center;
                }
            }
        }

    }

    @media only screen and (min-width: 1900px) {
        .header img {
            margin-left: calc(3% + 44px);
        }
    }
</style>
