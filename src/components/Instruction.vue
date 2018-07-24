<template>
    <section class="instruction">
        <h1 class="instruction__title">{{ $t('instruction.title')}}</h1>

        <p class="instruction__text">1 - {{ $t('instruction.text1')}}
            <a class="instruction__link" href="https://sale.imigize.io/register" target="_blank" rel="noopener">https://sale.imigize.io/register</a>
        </p>
        <p class="instruction__text">2 - {{ $t('instruction.text2')}}</p>
        <img class="instruction__img" src="../assets/img/instruction/reg1.jpg" alt="Registration instruction">
        <p class="instruction__text">3 - {{ $t('instruction.text3')}}</p>
        <img class="instruction__img" src="../assets/img/instruction/reg2.jpg" alt="Registration instruction2">
        <p class="instruction__text">4 - {{ $t('instruction.text4')}}</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg3.jpg"
             alt="Registration instruction3">
        <p class="instruction__text">5 - {{ $t('instruction.text5')}}</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg4.jpg"
             alt="Registration instruction4">
        <p class="instruction__text">6 - {{ $t('instruction.text6')}}</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg5.jpg"
             alt="Registration instruction5">
        <p class="instruction__text">7 - {{ $t('instruction.text7')}}</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg6.jpg"
             alt="Registration instruction6">
        <i18n class="instruction__text" path="instruction.text8" tag="p">
            <b>EDIT</b>
        </i18n>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg7.jpg"
             alt="Registration instruction7">
        <p class="instruction__text">9 - {{ $t('instruction.text9')}}</p>
        <p class="instruction__text instruction__text_center">Ethereum (ETH)</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg8.jpg"
             alt="Registration instruction8">
        <p class="instruction__text instruction__text_center">Bitcoin (BTC)</p>
        <img class="instruction__img instruction__img_big" src="../assets/img/instruction/reg9.jpg"
             alt="Registration instruction9">
        <p class="instruction__text">10 - {{ $t('instruction.text10a')}} <br>
            {{ $t('instruction.text10b')}}</p>
        <img class="instruction__img instruction__img_very-big" src="../assets/img/instruction/reg10.jpg"
             alt="Registration instruction8">
    </section>
</template>

<script>
  export default {
    name: 'Instruction'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .instruction {
        padding: 4em 4%;
        max-width: 1000px;
        margin: 0 auto;
        &__title {
            @include titleSection;
            margin-bottom: 1em;
        }

        &__text {
            margin-bottom: 1.5em;
            @include responsiveFont(18px, 15px);
            line-height: 1.5;
            font-weight: 100;
            color: #575e5e;
            text-align: justify;
            &_center {
                text-align: center;
            }
        }

        &__link {
            @include responsiveFont(18px, 15px);
            line-height: 1.5;
            font-weight: 100;
            color: #1d9da3;
        }

        &__img {
            display: block;
            margin: 0 auto 2em;
            width: 50%;
            min-width: 320px;
            &_big {
                width: 65%;
            }
            &_very-big {
                width: 100%;
            }
        }
    }
</style>
