<template>
    <section class="legal-consulting" data-nav="13">
        <div class="container">
            <h2 class="legal-consulting__title">{{ $t('legalConsulting.title')}}</h2>

            <div class="legal-consulting__wrapper">
                <a class="legal-consulting__item"
                   href="https://lawstrust.com/ru/ico"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/legalPartners/logo-lawstrust.png" alt="lawstrust">
                </a>
                <a class="legal-consulting__item"
                   href="http://gmtlegal.com/practice/19.html"
                   target="_blank" rel="noopener">
                    <img src="../assets/img/legalPartners/logo-gmt-legal.jpg" alt="gmt-legal">
                </a>

                <a class="legal-consulting__item legal-consulting__item_no-mobile"></a>
                <a class="legal-consulting__item legal-consulting__item_no-mobile"></a>
                <a class="legal-consulting__item legal-consulting__item_no-mobile"></a>
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="legal-consulting__bevel-container"></div>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'LegalPartners'
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .legal-consulting {
        padding: 4em 4% 4em 4%;
        position: relative;
        background-color: #fafafa;

        &__bevel-container {
            border: 4vw solid #fff;
            border-right: 100vw solid transparent;
            border-top: .2vw solid transparent;
        }

        &__title {
            margin-bottom: 1.3em;

            @include titleSection;
        }

        &__wrapper {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            &_show-all {
                position: relative;

                .legal-consulting__item_toggle,
                &__btn-more span:nth-child(2) {
                    display: block;
                }

                .legal-consulting__btn-more span:nth-child(1) {
                    display: none;
                }
            }
        }

        &__item {
            margin: 0 2% 3.7em 0;
            width: 15%;
            min-width: 100px;
            max-width: 200px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            order: 2;

            &_toggle {
                display: none;
            }

            &_order {
                order: 1;
            }

            &_no-mobile {
                @include w320-767 {
                    display: none;
                }
            }

            img,
            svg {
                vertical-align: middle;
                max-width: 100%;
                max-height: 100%;
                filter: grayscale(100%);
                transition: filter 0.5s, opacity 0.5s;
                cursor: pointer;
                opacity: 0.5;

                &:hover {
                    filter: grayscale(0);
                    opacity: 1;
                }
            }
        }

        &__btn-more {
            position: absolute;
            bottom: 0;
            right: 0;

            @include responsiveFont(17px, 14px);

            font-weight: 100;
            line-height: 1.3;
            color: #00accd;
            cursor: pointer;

            &:hover {
                color: #4cdbef;
            }

            & span:nth-child(2) {
                display: none;
            }
        }

        &__placeholder {
            visibility: hidden;
            height: 0;
            padding: 0;
            margin-bottom: 0;
            border-top-width: 0;
            border-bottom-width: 0;
        }
    }
</style>