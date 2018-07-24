<template>
    <section class="schedule-bonuses" data-nav="1.3" id="schedule">
        <div class="container">
            <h2 class="schedule-bonuses__title">{{ $t('scheduleBonuses.title')}}</h2>

            <div class="schedule-bonuses__procent">
                <div class="schedule-bonuses__procent_right">
                    <h3 class="schedule-bonuses__procent__title">
                        <span>Private Pre-SALE</span>
                        <span>TOKEN SALE (TGE)</span></h3>
                    <div class="schedule-bonuses__procent__item-wrapper">
                        <div class="schedule-bonuses__procent__item schedule-bonuses__procent__item_right">
                            <div class="schedule-bonuses__procent__item_right__bonus">
                                <div class="schedule-bonuses__text-relative">
                                    Individual
                                </div>
                            </div>
                        </div>
                        <div class="schedule-bonuses__procent__item schedule-bonuses__procent__item_right">
                            <div class="schedule-bonuses__procent__item_right__bonus">
                                <div class="schedule-bonuses__text-relative">
                                    <span>Bonus</span> +15% +*
                                </div>
                            </div>
                        </div>
                        <div class="schedule-bonuses__procent__item schedule-bonuses__procent__item_right">
                            <div class="schedule-bonuses__procent__item_right__start schedule-bonuses__procent__item_right__bonus">
                                <div class="schedule-bonuses__text-relative">
                                    <span>Bonus</span> +10%* +*
                                </div>
                            </div>
                            <div class="schedule-bonuses__procent__item_right__start schedule-bonuses__procent__item_right__start_icon schedule-bonuses__procent__item_right__bonus">
                                <div class="schedule-bonuses__text-relative">
                                    <span>Bonus</span> +5%* +*
                                </div>
                            </div>
                            <div class="schedule-bonuses__procent__item_right__end">
                                <div class="schedule-bonuses__text-relative">
                                    Bonus 0%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="schedule-bonuses__scale">
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_3">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date1')}}
                    </p>
                </div>
                <div class="schedule-bonuses__scale__line schedule-bonuses__scale__line_3"></div>
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_4">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date2')}}
                    </p>
                </div>
                <div class="schedule-bonuses__scale__line schedule-bonuses__scale__line_4"></div>
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_5">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date3')}}
                    </p>
                </div>
                <div class="schedule-bonuses__scale__line schedule-bonuses__scale__line_5"></div>
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_6">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date4')}}
                    </p>
                </div>
                <div class="schedule-bonuses__scale__line schedule-bonuses__scale__line_5"></div>
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_6">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date5')}}
                    </p>
                </div>
                <div class="schedule-bonuses__scale__line schedule-bonuses__scale__line_6"></div>
                <div class="schedule-bonuses__scale__circle schedule-bonuses__scale__circle_8">
                    <p class="schedule-bonuses__scale__circle__text schedule-bonuses__scale__circle__text_nowrap">
                        {{ $t('scheduleBonuses.date6')}}
                    </p>
                </div>
            </div>

            <div class="schedule-bonuses__description">
                <div class="schedule-bonuses__description_left">
                    <p class="schedule-bonuses__description__text schedule-bonuses__description__text_top">
                        Hard Cap US$ 60M (appx. 88 235 ETH)<br>
                        <span class="schedule-bonuses__description__text__span">
                         {{ $t('scheduleBonuses.left.text4span')}}
                        </span>
                    </p>
                    <h4 class="schedule-bonuses__description__title">
                        {{ $t('scheduleBonuses.left.title1a')}}
                        <br>
                        {{ $t('scheduleBonuses.left.title1b')}}
                    </h4>
                    <p class="schedule-bonuses__description__text">
                        {{ $t('scheduleBonuses.left.text0')}}
                    </p>
                </div>
                <div class="schedule-bonuses__description_right">
                    <p class="schedule-bonuses__description__text schedule-bonuses__description__text_top">
                        {{ $t('scheduleBonuses.text')}}
                    </p>
                    <h4 class="schedule-bonuses__description__title">
                        {{ $t('scheduleBonuses.right.title1a')}}
                        <br>
                        {{ $t('scheduleBonuses.right.title1b')}}
                    </h4>
                    <p class="schedule-bonuses__description__text">
                        Soft cap: US$ 1 000 000<br>
                        Hard cap: US$60 000 000 in BTC, ETH
                    </p>
                    <p class="schedule-bonuses__description__text">
                        {{ $t('scheduleBonuses.right.text1')}}
                    </p>
                    <p class="schedule-bonuses__description__text">
                        {{ $t('scheduleBonuses.right.text2')}}
                    </p>
                    <p class="schedule-bonuses__description__text">
                        {{ $t('scheduleBonuses.right.text3')}}
                        <br>
                        <span class="schedule-bonuses__description__text__span">
                            {{ $t('scheduleBonuses.right.text3span')}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'ScheduleBonuses'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins";

    $ns: ".schedule-bonuses";
    $circleWidth: 20px;

    #{$ns} {
        padding: 3em 4% 4em 4%;
        background-color: #f0f0f0;
    }

    #{$ns}__title {
        margin-bottom: 1em;

        @include titleSection;
    }

    #{$ns}__procent {
        display: flex;
        margin-bottom: 18px;
    }

    #{$ns}__description_right,
    #{$ns}__description_left {
        width: 49%;
        @include w320-767 {
            width: 100%;
        }
    }

    #{$ns}__description_right {
        display: flex;
        flex-direction: column;
        width: 51%;
    }

    #{$ns}__procent_right {
        width: 100%;
    }

    #{$ns}__procent__title {
        margin-bottom: 1em;
        display: flex;

        @include responsiveFont(22px, 16px);

        line-height: 1.5;
        color: #1d9da3;
        span {
            width: 50%;
            text-align: left;
        }
    }

    #{$ns}__procent__item-wrapper {
        display: flex;
    }

    #{$ns}__procent__item {
        position: relative;
        padding: 0.7em 1em;
        box-sizing: border-box;

        @include w320-767 {
            padding: 0.7em 0;
        }

        @include responsiveFont(16px, 10px);

        line-height: 1.5;
        color: #666;
        text-align: center;

        &_left {
            width: 70%;

            @include responsiveFont(18px, 12px);

            background-color: #cfcfcf;

            &::after {
                content: "";
                position: absolute;
                bottom: -8px;
                right: 10px;
                width: 16px;
                height: 16px;
                transform: rotate(45deg);
                background-color: inherit;
            }
        }

        &_right {
            display: flex;
            align-items: center;
            background-color: #d6d6d6;
            padding: 0.7em 1em;
            line-height: 1.3;
            text-align: left;

            &:first-child,
            &:nth-child(2) {
                margin-right: 1.15%;
                width: 17%;
            }

            &:last-child {
                display: flex;
                padding: 0;
                width: 63.7%;

                &::after {
                    content: "";
                    position: absolute;
                    bottom: -8px;
                    right: 10px;
                    width: 16px;
                    height: 16px;
                    transform: rotate(45deg);
                    background-color: inherit;
                }
            }

            div {
                position: relative;
            }

            @include w320-767 {
                span {
                    display: none;
                }
            }
        }

        &::before {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 10px;
            width: 16px;
            height: 16px;
            transform: rotate(45deg);
            background-color: inherit;
        }
    }

    #{$ns}__procent__item_right__start {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.7em 1em;
        width: 26%;
        height: 100%;

        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: -10%;
            width: 1px;
            height: 125%;
            background-image: linear-gradient(to bottom, grey 3px, transparent 5px);
            background-size: 1px 8px;
            background-repeat: repeat-y;
            background-position: 0 bottom;
        }

        &_icon {
            &::before {
                content: "";
                position: absolute;
                bottom: -8px;
                left: 10px;
                width: 16px;
                height: 16px;
                transform: rotate(45deg);
                background-color: #d6d6d6;
            }
        }
    }

    #{$ns}__procent__item_right__end {
        padding: 0.7em 1em;
        width: 48%;
        &::before {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 10px;
            width: 16px;
            height: 16px;
            transform: rotate(45deg);
            background-color: #d6d6d6;
        }
    }

    #{$ns}__scale {
        display: flex;
        margin-bottom: 3em;
        @include w320-767 {
            margin-bottom: 6em;
        }
    }

    #{$ns}__scale__circle {
        position: relative;
        width: $circleWidth;
        height: $circleWidth;
        border: 1px solid;
        border-radius: 50%;

        &_1 {
            margin-left: 10px;
            border-color: #fcc52e;
        }

        &_2 {
            border-color: #cfd1af;
        }

        &_3 {
            margin-left: 8px;
            border-color: #b7cfba;
        }

        &_4 {
            border-color: #a2cdc4;
        }

        &_5 {
            border-color: #92cccb;
        }

        &_6 {
            border-color: #92cccb;
        }

        &_7 {
            border-color: #92cccb;
        }

        &_8 {
            border-color: #37aea0;

            @include w320-767 {
                & #{$ns}__scale__circle__text {
                    left: inherit;
                    right: 0;
                    text-align: right;
                }
            }
        }
    }

    #{$ns}__scale__circle__text {
        position: absolute;
        top: 25px;
        left: 0;

        @include responsiveFont(18px, 10px);

        line-height: 1.5;
        color: #808080;

        &_nowrap {
            white-space: nowrap;

            @include w320-767 {
                white-space: inherit;
            }
        }
    }

    #{$ns}__text-relative {
        position: relative;
    }

    $differ: 1.15%;
    $differ2: calc(50% * 0.637 * 0.26);
    $differ3: calc(50% * 0.637 * 0.48);

    #{$ns}__scale__line {
        margin-top: calc(#{$circleWidth} / 2 - 2px);
        height: 2px;

        &_1 {
            width: calc(50% * 0.7 - 2 * #{$circleWidth} - 16px);
            background: linear-gradient(to right, #fcc52e 0%, #cfd1af 100%);
        }

        &_2 {
            width: calc(50% * 0.3 + 15px);
            background: linear-gradient(to right, #cfd1af 0%, #b7cfba 100%);
        }

        &_3 {
            width: calc(100% * 0.17 - #{$circleWidth} + 1.15%);
            background: linear-gradient(to right, #b7cfba 0%, #a2cdc4 100%);
        }

        &_4 {
            width: calc(100% * 0.17 - #{$circleWidth} + 1.15%);
            background: linear-gradient(to right, #a2cdc4 0%, #92cccb 100%);
        }

        &_5 {
            width: calc(100% * 0.637 * 0.26 - #{$circleWidth});
            background: linear-gradient(to right, #a2cdc4 0%, #92cccb 100%);
        }

        &_6 {
            width: calc(100% * 0.637 * (0.48) - 2.7 * #{$circleWidth});
            background: linear-gradient(to right, #a2cdc4 0%, #92cccb 100%);
        }
    }

    #{$ns}__description {
        display: flex;
        flex-wrap: wrap;
    }

    #{$ns}__description_left {
        padding-right: 5%;
    }

    #{$ns}__description__title {
        margin-bottom: 1em;

        @include responsiveFont(18px, 14px);

        font-weight: 100;
        line-height: 1.5;
        color: #1d9da3;
    }

    #{$ns}__description__text {
        margin-bottom: 1em;

        @include responsiveFont(16px, 12px);

        font-weight: 100;
        line-height: 1.5;
        color: #575e5e;

        &_top {
            margin-bottom: 3em;
            @include responsiveFont(18px, 14px);
            span {
                @include responsiveFont(16px, 12px);
            }
        }
    }

    #{$ns}__description__text__span {
        position: relative;

        &::before {
            content: "*";
            position: absolute;
            top: -1px;
            left: -9px;
            width: 5px;
            height: 100%;
        }
    }
</style>