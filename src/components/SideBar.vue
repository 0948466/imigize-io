<template>
    <div class="sidebar">
        <ul class="sidebar__menu">
            <li>
                <a @click="onLinkClick('#pre-sale')" class="sidebar__link">
                    {{ $t('header.homepage') }}
                </a>
            </li>
            <li>
                <a @click="onLinkClick('#overview')" class="sidebar__link">
                    {{ $t('header.about') }}
                </a>
            </li>
            <li>
                <a @click="onLinkClick('#team')" class="sidebar__link">
                    {{ $t('header.team') }}
                </a>
            </li>
            <li>
                <a class="sidebar__link"
                   :href="$t('url.wp')" target="_blank" rel="noopener">
                    Whitepaper
                </a>
            </li>
            <li>
                <router-link :to="{name:'faq'}" class="sidebar__link">
                    Faq
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'referral'}" class="sidebar__link">
                    Referral
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'side-bar',
    methods: {
      onLinkClick(selector) {
        try {
          if (this.$route.name === 'homepage') {
            this.$scrollTo(document.querySelector(selector))
            this.$emit('onLinkClick')
          } else {
            this.$router.push({name: 'homepage', hash: `#${selector.slice(1)}`})
          }
        } catch (e) {
          console.error(e.message)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "../scss/mixins.scss";

    .sidebar {
        position: absolute;
        top: 100%;
        right: 0;
        padding: 2em 4em;
        min-width: 144px;
        min-height: 270px;
        opacity: 0.95;
        background-color: rgb(243, 243, 243);
        z-index: 20;
        text-align: left;

        &__menu {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        &__link {
            @include responsiveFont(20px, 15px);
            font-weight: normal;
            line-height: 3;
            letter-spacing: 2px;
            color: #4d4d4d;
            text-decoration: none;
            white-space: nowrap;
            &:hover {
                color: #32d0e7;
            }
        }
    }
</style>