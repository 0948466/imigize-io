<template>
    <section class="contact-map">
        <div class="contact-map__wrap">
            <div class="contact-map__item">
                <p class="contact-map__text-city">Wanchai, Hong Kong</p>
                <p class="contact-map__text-adress">Imigize Group | Hong Kong Office information<br>&nbsp;</p>
                <img src="../assets/img/contactMap/mapHongKong.png" alt="Hong Kong Office" width="100%">
            </div>
            <div class="contact-map__item">
                <p class="contact-map__text-city">Saint-Petersburg, Russia</p>
                <p class="contact-map__text-adress">Imigize Group | RUS/CIS Office information <br>Developers office</p>
                <img src="../assets/img/contactMap/mapSpb.png" alt="RUS/CIS Office" width="100%">
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'ContactMap'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .contact-map {
        margin-bottom: 4em;
        &__wrap {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
        }

        &__item {
            position: relative;
            padding-top: 55px;
            width: 45%;
            text-align: center;
            @include w320-767 {
                margin-bottom: 5em;
                width: 100%;
            }
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 55px;
                background: url("../assets/img/contactMap/icon-location.png") no-repeat center;
                background-size: contain;
            }
        }

        &__text-city {
            @include responsiveFont(21px, 17px);
            line-height: 1.5;
            color: #333;
            margin-bottom: 0.6em;
        }

        &__text-adress {
            @include responsiveFont(18px, 14px);
            line-height: 1.5;
            color: #575e5e;
            margin-bottom: 1.5em;
        }
    }
</style>