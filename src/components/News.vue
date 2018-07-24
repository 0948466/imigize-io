<template>
    <div class="news news_active">
        <a :href="$t(link)" target="_blank" rel="noopener" class="news__title">
            {{ $t(`${news}.title`) }}
        </a>
        <p class="news__text" v-html="$t(`${news}.text`)"></p>
        <div class="news__link-wrap">
            <a class="news__link" :href="$t(link)" target="_blank" rel="noopener">
                {{ $t('blogNews.readMore') }}
            </a>
        </div>
        <div class="news__wrap">
            <a class="news__link" :href="$t(link)" target="_blank" rel="noopener">
                <img class="news__img"
                     :src="imgUrl"
                     alt="News">
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'News',
    props: ['newsId'],
    computed: {
      imgUrl() {
        return require(`../assets/img/blogNews/${this.newsIdReplaced}.jpg`)
      },
      newsIdReplaced() {
        return this.newsId.replace(/\./g, '_').replace('2018', '18').replace('2017', '17')
      },
      news() {
        return `blogNews.items.${this.newsIdReplaced}`
      },
      link() {
        return `${this.news}.link`
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins";

    .news {
        &__title {
            display: block;
            margin-bottom: 1em;
            @include responsiveFont(35px, 20px);
            line-height: 1.5;
            color: #333;
            @include w320-767 {
                text-align: justify;
            }
        }

        &__text {
            margin-bottom: 1em;
            @include responsiveFont(18px, 14px);
            line-height: 1.5;
            color: #2e2e2e;
            @include w320-767 {
                text-align: justify;
            }
        }

        &__link-wrap {
            margin-bottom: 1em;
        }

        &__link {
            color: #1d9da3;
        }

        &__img {
            margin-bottom: 2em;
            width: 750px;
            max-width: calc(100vw - 8vw - 200px);
            @include w320-767 {
                max-width: calc(100vw - 8vw);
            }
        }

        &__wrap {
            display: flex;
            justify-content: space-between;
        }
    }

</style>