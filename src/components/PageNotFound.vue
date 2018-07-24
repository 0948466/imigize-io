<template>
    <div class="page-not-found">
        <div class="page-not-found__content">
            <h2 class="page-not-found__title">
                {{ $t('pageNotFound.title')}}
            </h2>
            <router-link :to="{name: 'homepage'}" class="page-not-found__link">
                {{ $t('pageNotFound.linkToHome')}}
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'page-not-found'
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";

    .page-not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 150px);
        text-align: center;
        &__title {
            margin-bottom: 3em;
            @include responsiveFont(20px, 16px);
            color: #636363;
        }
        &__link {
            @include responsiveFont(18px, 14px);
            color: #636363;
            text-decoration: underline;
        }
    }

</style>