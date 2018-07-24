<template>
    <div :class="['local-change',{'local-change_flex': isFlex}]">
        <a class="link-local-change link-local-change__active"
           @click.prevent="changeLocal('en')"
           data-locale="en">en
        </a>
        <a class="link-local-change"
           @click.prevent="changeLocal('ru', event)"
           data-locale="ru">ru
        </a>
    </div>
</template>

<script>
  export default {
    name: 'LocalChange',
    props: ['isFlex'],
    methods: {
      changeLocal(lang, event) {
        this.$i18n.locale = lang
        history.pushState(null, null, event.target.getAttribute('href'))
        document.querySelector('html').setAttribute('lang', lang)
        try {
          localStorage.setItem('locale', lang)
        } catch (e) {
          console.log(e.message)
        }
        switch (lang) {
          case 'ru':
            document.title = 'Бесконтактная примерка обуви в интернете'
            break
          default:
            document.title = 'Contactless shoe fitting in on-line shopping'
        }
      }
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .local-change {
        font-size: 0;
        &_flex {
            @include w320-767 {
                display: flex;
                flex-direction: column-reverse;
            }

            .link-local-change::after {
                @include w320-767 {
                    width: 0 !important;

                }
            }
        }
    }

    .link-local-change {
        position: relative;
        padding: 6px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 14px;
        color: #d8d6d6;
        text-transform: uppercase;
        cursor: pointer;

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            margin-top: -5px;
            width: 1px;
            height: 12px;
            background-color: #d8d6d6;
        }

        &:last-child {
            &::after {
                background-color: transparent;
            }
        }
    }
</style>


