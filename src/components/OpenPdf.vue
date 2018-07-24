<template>
    <div class="open-pdf">
        <h2 class="open-pdf__title">Loading...</h2>
    </div>
</template>

<script>
  export default {
    name: 'open-pdf',
    beforeMount() {
      window.location.href = `/static${this.$router.currentRoute.path}`
    }
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins";

    .open-pdf {
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
    }
</style>