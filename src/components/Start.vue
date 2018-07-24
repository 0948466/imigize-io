<template>
    <section class="start">
        <LocalChange v-bind:linkRu="'/index-ru.html'"
                     v-bind:linkEn="'/index.html'"></LocalChange>
        <div class="start__container">
            <img class="start__logo" src="../assets/img/logo-imigize-blockchain.png" alt="Imigize">
            <h1 class="start__title">
                {{ $t('start.title1')}}
                <br>
                {{ $t('start.title2')}}
            </h1>
            <div class="start__btn-container">
                <button class="btn continue-btn js-continue-btn">{{ $t('start.btn')}}</button>
            </div>
        </div>
    </section>
</template>

<script>
  import LocalChange from './LocalChange.vue'

  export default {
    name: 'Start',
    components: {
      LocalChange
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";
    $ns: ".start";

    #{$ns} {
        position: relative;
        height: 100vh;
        background: #000617 url("../assets/img/background/top-background.jpg") no-repeat;
        background-size: cover;

        .local-change {
            position: absolute;
            right: 3vw;
            top: 3vh;
            z-index: 11;
        }
    }

    #{$ns}__container {
        position: absolute;
        padding: 0 4%;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        left: 0;
        width: 100%;
    }

    #{$ns}__logo {
        margin-bottom: 5em;
        max-width: 75%;
        min-width: 300px;
        max-height: 17vh;
        @media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (orientation: landscape) {
            margin-bottom: 3em;
        }
    }

    #{$ns}__title {
        margin-bottom: 1.5em;

        @include responsiveFont(50px, 22px);

        color: #fff;
        line-height: 1.25;

        span {
            color: #02CEE5;
        }
    }

    #{$ns}__btn-container {
        button {
            color: #fff;

            @include responsiveFont(22px, 18px);

            background-image: url("../assets/img/icons/arrow-down.png");
            height: 5em;
            background-repeat: no-repeat;
            background-position: bottom center;
            background-size: 3em 1em;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>


