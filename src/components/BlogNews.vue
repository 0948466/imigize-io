<template>
    <section class="blog-news" data-nav="1.7" id="blog-news">
        <div class="container">
            <h2 class="blog-news__title">{{ $t('blogNews.title') }}
                <a class="blog-news__title__link"
                   :href="$t('imigizeComLink')"
                   target="_blank" rel="noopener">imigize.com
                </a>
            </h2>

            <div class="blog-news__menu">
                <h4 class="blog-news__menu__title" data-nav="1.75">{{ $t('blogNews.menuTitle') }}</h4>
                <div class="blog-news__menu__ul">
                    <div>
                        <a class="blog-news__menu__link  blog-news__menu__link_active" @click.prevent="onMenuLinkClick">20.07.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">11.07.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">26.06.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">19.06.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">01.06.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">29.05.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">10.04.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">22.03.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">16.03.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">15.03.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">05.03.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">14.02.2018</a>
                    </div>
                    <div>
                      <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">08.02.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">06.02.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">29.01.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">23.01.2018</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">20.12.2017</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">19.12.2017</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">17.12.2017</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">18.12.2017</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">11.12.2017</a>
                        <a class="blog-news__menu__link" @click.prevent="onMenuLinkClick">01.12.2017</a>
                    </div>

                </div>
            </div>

            <news :news-id="newsId"></news>
        </div>
    </section>
</template>

<script>
  import News from './News'

  export default {
    name: 'BlockNews',
    data: () => ({
      newsId: '20_07_18'
    }),
    methods: {
      onMenuLinkClick(event) {
        const MENU_LINK_ACTIVE = 'blog-news__menu__link_active'
        let menuLinks = Array.from(document.querySelectorAll('.blog-news__menu__link'))
        let target = event.target
        if (!target.classList.contains(MENU_LINK_ACTIVE)) {
          for (let menuLink of menuLinks) {
            menuLink.classList.remove(MENU_LINK_ACTIVE)
          }
          target.classList.add(MENU_LINK_ACTIVE)
        }

        this.scrollTop()
        this.newsId = target.textContent.trim()
      },

      scrollTop() {
        let $ = require('jquery')
        $('html, body').animate({
          scrollTop: document.getElementById('blog-news').getBoundingClientRect().top + window.scrollY
        }, 600)
      },

      preloadImg(img) {
        const image = new Image()
        image.src = require(`../assets/img/blogNews/${img}.jpg`)
      },

      preload() {
        let menuLinks = Array.from(document.querySelectorAll('.blog-news__menu__link'))
        for (let menuLink of menuLinks) {
          this.preloadImg(menuLink.textContent.trim().replace(/\./g, '_').replace('2018', '18').replace('2017', '17'))
        }
      },

      loadCheck() {
        if (document.readyState === 'complete') {
          this.preload()
        } else {
          window.addEventListener('load', this.preload)
        }
      }
    },

    mounted() {
      this.loadCheck()
    },

    components: {
      News
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .blog-news {
        position: relative;
        padding: 4em 4%;
        background-color: #f0f0f0;
        & .container {
            position: relative;
        }

        &__babel_top {
            border: 4vw solid transparent;
            border-right: 100vw solid #fff;
            border-top: .2vw solid #fff;
        }

        &__title {
            @include titleSection;
            margin-bottom: 1em;
            color: #333;
            &__link {
                margin-left: 1px;
                padding-left: 15px;
                position: relative;
                color: #1d9da3;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin-top: 6%;
                    width: 1px;
                    height: 70%;
                    background-color: #333;
                }
            }
        }

        &__menu {
            position: absolute;
            top: 376px;
            right: -27px;
            width: 200px;
            margin-bottom: 2em;
            color: #2e2e2e;
            @include w320-767 {
                position: static;
                width: auto;
                text-align: center;
            }
        }
        &__menu__ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            @include w320-767 {
                padding-left: 0;
            }

            div {
                width: 50%;
            }

            a {
                display: block;
                margin-bottom: 0.7em;
                @include w320-767 {
                    margin-right: 2%;
                }
            }
        }

        &__menu__title {
            margin-bottom: 1em;
            @include responsiveFont(16px, 13px);
        }

        &__menu__link {
            @include responsiveFont(16px, 13px);
            color: #2e2e2e;
            cursor: pointer;
            &_active,
            &:hover {
                color: #1d9da3;
            }
        }

        &__item__link {
            display: block;
        }
    }
</style>
