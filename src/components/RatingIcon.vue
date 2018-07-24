<template>
    <a class="rating-icon" :href="link"
       target="_blank" rel="noopener">
        <div class="rating-icon__wrap">
            <div class="rating-icon__img"
                 :style="{ 'background-image': 'url(' + img + ')' }"
            ></div>
            <div v-if="valueImigize" class="rating-icon__value">
                <div class="rating-icon__value__left">{{valueImigize}} /</div>
                <div class="rating-icon__value__right">{{valueMax}}</div>
            </div>
        </div>
        <div class="rating-icon__line"></div>
        <div v-if="valueImigize" class="rating-icon__scale"
             :style="scaleBackground"></div>
    </a>
</template>

<script>
  export default {
    name: 'RatingIcon',
    props: {
      img: {
        type: String,
        required: true
      },

      valueImigize: {
        type: [String, Number]
      },

      valueMax: {
        type: [String, Number],
      },
      link: {
        type: String,
        required: true
      }
    },

    computed: {
      scaleBackground() {
        if (!this.valueMax) {
          return
        }

        const percent = this.valueImigize / +this.valueMax * 100
        return `background: linear-gradient(to right, #20eafc 0%, #acf0fe ${percent}%, rgb(255, 165, 0) 100%)`
      }
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $height: 45px;

    .rating-icon {
        display: block;

        &__wrap {
            display: flex;
        }

        &__img {
            margin-right: 5%;
            width: calc(95% - 100px);
            height: $height;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            filter: grayscale(100%);
            transition: filter 0.5s, opacity 0.5s;
            opacity: 0.5;
        }

        &:hover &__img {
            filter: grayscale(0);
            opacity: 1;
        }

        &__value {
            display: flex;
            width: 100px;
            height: $height;
        }

        &__value__left {
            position: relative;
            padding-right: 3px;
            padding-left: 11px;
            width: 69.5%;
            height: 100%;
            background: linear-gradient(to top, #142644 0%, #49697f 100%);
            color: #fff;
            @include responsiveFont(20px, 18px);
            text-align: right;
            line-height: $height;
            font-weight: 600;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                border-top: $height solid #fff;
                border-right: 11px solid transparent;
            }
        }

        &:hover &__value__left {
            color: #aef1ff;
        }

        &__value__right {
            width: 30.5%;
            height: 100%;
            background-color: #e8e9e9;
            color: #000;
            @include responsiveFont(20px, 18px);
            text-align: center;
            line-height: $height;
            font-weight: 600;
        }

        &__line {
            margin-bottom: 3px;
            width: 100%;
            height: 2px;
            background-color: #142644;
        }

        &__scale {
            width: 0;
            opacity: 0;
            height: 2px;
        }

        &:hover &__scale {
            opacity: 1;
            width: 100%;
            transition: width 0.5s ease-out;
        }
    }
</style>