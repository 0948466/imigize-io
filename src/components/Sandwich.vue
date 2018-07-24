<template>
    <div class="sandwich">
        <div v-if="!open"
             @click="open = !open"
             class="sandwich__icon-wrap">
            <div class="sandwich__icon"></div>
        </div>
        <template v-else>
            <div @click="open = !open"
                 class="sandwich__icon-close">
            </div>
            <side-bar @onLinkClick="onSideBarLinkClick"></side-bar>
        </template>
    </div>
</template>

<script>
  import SideBar from '@/components/SideBar'

  export default {
    name: 'Sandwich',
    data: () => ({
      open: false
    }),
    computed: {
      overlay() {
        return document.querySelector('.content__overlay')
      }
    },
    methods: {
      onSideBarLinkClick() {
        this.open = false
      },
      onOverlayClick(e) {
        e.preventDefault()
        this.open = false
      },

      showOverlay() {
        this.overlay.style.display = 'block'
        this.overlay.addEventListener('click', this.onOverlayClick)
      },

      hideOverlay() {
        this.overlay.style.display = ''
        this.overlay.removeEventListener('click', this.onOverlayClick)
      }
    },

    watch: {
      open(val) {
        if (val) {
          this.showOverlay()
        } else {
          this.hideOverlay()
        }
      },

      '$route'(to, from) {
        this.open = false
      }
    },
    beforeDestroy() {
      this.hideOverlay()
    },
    components: {
      SideBar
    }
  }
</script>

<style lang="scss" scoped>
    .sandwich {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 4%;

        @media only screen and (max-width: 320px) {
            padding: 0 2%;
        }

        &__icon-wrap {
            display: flex;
            align-items: center;
            height: 27px;
            cursor: pointer;
            &:hover {
                .sandwich__icon,
                .sandwich__icon::before,
                .sandwich__icon::after {
                    background-color: #32d0e7;
                }
            }
        }

        &__icon,
        &__icon::before,
        &__icon::after {
            position: relative;
            margin: 0 auto;
            width: 27px;
            height: 2px;
            background-color: #797979;
        }

        &__icon::before {
            content: '';
            position: absolute;
            top: -6px;
            left: 0;
        }

        &__icon::after {
            content: '';
            position: absolute;
            top: 6px;
            left: 0;
        }

        &__icon-close {
            position: relative;
            width: 27px;
            height: 27px;
            font-size: 0;
            background-color: transparent;
            border: 0;
            outline: 0;
            cursor: pointer;
            &::before,
            &::after {
                content: "";
                top: 12px;
                left: 2px;
                position: absolute;
                width: 24px;
                height: 1.6px;
                background-color: #848484;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }
            &:hover {
                &::before,
                &::after {
                    background-color: #32d0e7;
                }
            }
        }
    }
</style>