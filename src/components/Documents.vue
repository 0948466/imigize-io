<template>
    <section class="documents" data-nav="1.6">
        <div class="bevel-container-wrap top">
            <div class="documents__babel_top"></div>
        </div>
        <div class="container">
            <h2 class="documents__title">{{ $t('documents.title')}}</h2>
            <div class="documents__wrap">
                <div class="documents__item">
                    <a class="documents__item__link" :href="$t('url.wp')" target="_blank" rel="noopener">
                        <img class="documents__item__img" src="../assets/img/documents/img-doc-paper.jpg"
                             alt="Whitepaper">
                    </a>
                    <a class="documents__item__link" :href="$t('url.wp')" target="_blank" rel="noopener">Whitepaper</a>
                </div>
                <div class="documents__item">
                    <a class="documents__item__link" :href="$t('url.op')" target="_blank" rel="noopener">
                        <img class="documents__item__img" src="../assets/img/documents/img-doc-pager.jpg"
                             alt="One-pager">
                    </a>
                    <a class="documents__item__link" :href="$t('url.op')" target="_blank" rel="noopener">One pager</a>
                </div>
                <div class="documents__item">
                    <a class="documents__item__link" :href="$t('url.pitchDeck')" target="_blank" rel="noopener">
                        <img class="documents__item__img" src="../assets/img/documents/img-doc-release.jpg"
                             alt="Imigize pitch deck">
                    </a>
                    <p class="documents__item__text">Imigize pitch deck</p>
                    <a class="documents__item__link documents__item__link_small" :href="$t('url.pitchDeck')" target="_blank" rel="noopener">{{ $t('documents.lang') }} </a>
                    <br>
                    <a class="documents__item__link documents__item__link_small" href="static/pitch-deck/chinese/index.html" target="_blank" rel="noopener"> {{ $t('documents.langCh') }}</a>
                </div>
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="documents__bevel-container"></div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'Documents'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $ns: ".documents";

    #{$ns} {
        position: relative;
        padding: 6em 4% 8em;
    }

    #{$ns}__babel_top {
        border: 4vw solid transparent;
        border-right: 100vw solid #f0f0f0;
        border-top: 0.2vw solid #f0f0f0;
    }

    #{$ns}__title {
        margin-bottom: 1.5em;

        @include titleSection;
    }

    #{$ns}__wrap {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        @include w320-767 {
            flex-direction: column;
            align-items: center;
        }
    }

    #{$ns}__item {
        width: 18%;
        min-width: 170px;
        text-align: center;

        &:last-child {
            margin-right: 0;
        }

        @include w320-767 {
            margin-bottom: 5em;
        }
    }

    #{$ns}__item__img {
        margin-bottom: 3em;
        width: 100%;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);

        &:hover {
            box-shadow: 0 3px 10px 5px rgba(29, 157, 163, 0.4);
        }
    }

    #{$ns}__item__link {
        @include responsiveFont(18px, 14px);

        line-height: 1.5;
        color: #bcbcbc;
        text-decoration: underline;
        text-transform: uppercase;

        &:hover {
            color: #1d9da3;
        }

        &_small {
            text-transform: none;
            @include responsiveFont(16px, 13px);
        }
    }

    #{$ns}__item__text {
        @include responsiveFont(18px, 14px);

        line-height: 1.3;
        color: #bcbcbc;
        text-decoration: underline;
        text-transform: uppercase;
    }

    #{$ns}__bevel-container {
        border: 4vw solid #f0f0f0;
        border-right: 100vw solid transparent;
        border-top: .2vw solid transparent;
    }

</style>