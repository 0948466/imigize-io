<template>
    <router-link class="logo-imigize" :to="{name: 'homepage'}" />
</template>

<script>
  export default {
    name: 'logo-imigize'
  }
</script>

<style scoped lang="scss">
    .logo-imigize {
        display: block;
        width: 90px;
        height: 20px;
        background: url("../assets/img/logoImigize/logo-imigize.png") no-repeat center;
        background-size: contain;
    }
</style>