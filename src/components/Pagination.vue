<template>
    <div class="pagination-container">
        <div data-nav_to="1">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav1')}}</span>
        </div>
        <div data-nav_to="1.3">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav1_3')}}</span>
        </div>
        <div data-nav_to="1.6">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav1_6')}}</span>
        </div>
        <div data-nav_to="1.7">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav1_7')}}</span>
        </div>
        <div data-nav_to="2">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav2')}}</span>
        </div>
        <div data-nav_to="2.2">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav2_2')}}</span>
        </div>
        <div data-nav_to="2.5">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav2_5')}}</span>
        </div>
        <div data-nav_to="2.9">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav2_9')}}</span>
        </div>
        <div data-nav_to="3">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav3')}}</span>
        </div>
        <div data-nav_to="5">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav5')}}</span>
        </div>
        <div data-nav_to="4">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav4')}}</span>
        </div>
        <div data-nav_to="1.5">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav1_5')}}</span>
        </div>
        <div data-nav_to="6">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav6')}}</span>
        </div>
        <div data-nav_to="7">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav7')}}</span>
        </div>
        <div data-nav_to="8">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav8')}}</span>
        </div>
        <div data-nav_to="9">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav9')}}</span>
        </div>
        <div data-nav_to="10">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav10')}}</span>
        </div>
        <div data-nav_to="12">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav12')}}</span>
        </div>
        <div data-nav_to="13">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav13')}}</span>
        </div>
        <div data-nav_to="11">
            <span class="circle"></span>
            <span class="pagination-container__text">{{ $t('mainTimer.pagination.nav11')}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Pagination'
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $ns: ".pagination-container";

    #{$ns} {
        position: absolute;
        right: 1.5vw;
        top: 50%;
        min-width: 220px;
        transform: translateY(calc(-50% + 62px / 2));
        z-index: 10;

        &__fixed {
            position: fixed;
        }

        div {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 15px;
            margin-bottom: 1.4vw;
            border-radius: 50%;
            transition: background-color 0.3s;
            position: relative;
            cursor: pointer;

            &:hover, &.active {
                .circle {
                    margin: 5px 0 0 10px;
                    width: 14px;
                    height: 14px;
                    background-color: #d8d6d6;
                }

                #{$ns}__text {
                    font-weight: 600;
                }
            }
        }

        .circle {
            display: inline-block;
            vertical-align: top;
            margin: 5px 5px 0 15px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #ccc;
            transition: background-color 0.3s;
            order: 1;
        }

        &:hover {
            #{$ns}__text {
                display: inline-block;
            }
        }
    }

    #{$ns}__text {
        display: none;
        vertical-align: top;
        color: #A1ACAF;

        @include responsiveFont(17px, 10px);

        white-space: nowrap;
        cursor: default;
        pointer-events: none;
        order: 0;
        user-select: none;
    }

    @media only screen and (max-width: 1399px) {
        #{$ns} {
            display: none;
        }
    }
</style>


