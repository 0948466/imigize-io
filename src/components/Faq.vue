<template>
    <section class="faq">
        <h1 class="faq__title">{{ $t('faq.title')}}</h1>
        <div class="faq__section" v-for="(section, i) in $t('faq.sections')" :key="section.id">
            <h2 class="faq__section__title">
                {{ section.title }}
            </h2>
            <div class="faq__item" v-for="(item, j) in section.questions" :key="item.id">
                <h3 class="faq__item__title"
                    @click="onItemTitleClick(i, j)">
                    <span v-html="item.title"></span>
                    <span class="faq__item__title__icon"
                          :class="{faq__item__title__icon_close: showText[i][j]}"
                    ></span>
                </h3>
                <transition name="fade">
                    <p v-if="showText[i][j]" class="faq__item__text" v-html="item.text"></p>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Faq',
    data: () => ({
      showText: []
    }),
    created() {
      let sections = this.$i18n.t('faq.sections')
      for (let i = 0; i < sections.length; i++) {
        this.$set(this.showText, i, [])

        let questions = sections[i].questions
        for (let j = 0; j < questions.length; j++) {
          this.showText[i].push('')
        }
      }
    },
    methods: {
      onItemTitleClick(i, j) {
        this.$set(this.showText[i], j, !this.showText[i][j])
      }
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .faq {
        margin: 0 auto;
        padding: 3em 4%;
        max-width: 1000px;

        &__title {
            margin-bottom: 1.5em;
            @include titleSection();
            text-align: center;
        }

        &__section {
            margin-bottom: 4em;
        }

        &__section__title {
            margin-bottom: 1em;
            @include responsiveFont(26px, 22px);
            text-align: center;
        }
        &__item {
            padding: 0.5rem 1rem;
            margin-bottom: 0.5rem;
            border: 1px solid #d8d6d6;
        }

        &__item__title {
            position: relative;
            padding-right: 1.5rem;
            @include responsiveFont(18px, 15px);
            line-height: 1.3;
            font-weight: 400;
            color: #474646;
            cursor: pointer;
            text-align: justify;
        }

        &__item__title__icon {
            position: absolute;
            top: 0;
            right: -0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            padding: .25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            &::before {
                content: '';
                display: inline-block;
                width: 1rem;
                height: 2px;
                background-color: #d8d6d6;
                vertical-align: middle;
            }
            &::after {
                content: '';
                position: absolute;
                top: .25rem;
                left: calc(50% - 1px);
                width: 2px;
                height: 1rem;
                background-color: #d8d6d6;
            }
            &_close {
                &::after {
                    display: none;
                }
            }
        }

        &__item__text {
            margin-top: 1em;
            @include responsiveFont(18px, 14px);
            line-height: 1.5;
            font-weight: 100;
            color: #575e5e;
            text-align: justify;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

<style lang="scss">
    .faq {
        a {
            color: #1d9da3;
        }
    }
</style>


