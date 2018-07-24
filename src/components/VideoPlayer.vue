<template>
    <section class="video">
        <a class="video__link" ref="link"
           @click.prevent="onLinkClick"
           :href="videoLink"
           :style="{ backgroundImage: 'url(' + backgroundImage + ')', height}">
            <h2 class="video__title">{{ title}}</h2>
            <div class="video__icon-play" :style="iconPlayStyle">
                <div class="video__icon-play__icon" :style="iconStyle"></div>
            </div>
        </a>
        <div class="ytPlayer" ref="ytPlayer"></div>
    </section>
</template>

<script>
  export default {
    name: 'videoPlayer',
    props: {
      title: {
        defaulf: '',
        type: String
      },
      videoId: {
        required: true
      },
      aspectRatio: {
        type: [String, Number],
        default: 0.73
      },
      backgroundImage: {
        type: String
      },
      colorIconPlay: {
        type: String
      }
    },
    data: () => ({
      height: 0,
      iconPlaySize: 0
    }),

    computed: {
      iconPlayStyle() {
        let style = {}

        if (this.height) {
          this.iconPlaySize = Math.max(parseInt(this.height) / 6, 46) + 'px'
          style = {
            width: this.iconPlaySize,
            height: this.iconPlaySize
          }
        }

        if (this.colorIconPlay) {
          style = Object.assign(style, {borderColor: this.colorIconPlay, backgroundColor: this.colorIconPlay})
        }

        return style
      },

      iconStyle() {
        if (this.iconPlaySize) {
          const size = parseInt(this.iconPlaySize) / 5
          return {
            borderTop: `${size}px solid transparent`,
            borderLeft: `${2 * size}px solid #fff`,
            borderBottom: `${size}px solid transparent`
          }
        }
      },

      videoLink() {
        return `https://www.youtube.com/embed/${this.videoId}?rel=0`
      },

      getLinkHeight() {
        return `${this.$el.clientWidth * +this.aspectRatio || 280}px`
      }
    },
    methods: {
      onLinkClick() {
        this.$refs.link.style.display = 'none'
        this.onYouTubeIframeAPIReady()
      },

      onYouTubeIframeAPIReady() {
        // eslint-disable-next-line
        new YT.Player(this.$refs.ytPlayer,
          {
            height: this.height,
            width: '100%',
            videoId: this.videoId,
            playerVars: {
              'rel': 0
            },
            events: {
              'onReady': this.onPlayerReady
            }
          })
      },

      onPlayerReady(event) {
        event.target.playVideo()
      },

      _initVideoOpen() {
        let tag = document.createElement('script')

        tag.src = 'https://www.youtube.com/iframe_api'
        let firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      }
    },
    mounted() {
      this.height = this.getLinkHeight
      this._initVideoOpen()
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .video {
        position: relative;
        text-align: center;

        a:nth-child(2) {
            position: relative;

            &::after {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                content: "";
                opacity: 0;
                transition: opacity 0.2s, transform 0.2s;
                transform: translateY(8px);
            }

            &:hover::after,
            &:focus::after {
                opacity: 1;
                transform: translateY(0px);
            }
        }

        &__link {
            display: block;
            background: no-repeat center;
            background-size: contain;
        }

        &__title {
            position: absolute;
            top: 7%;
            left: 0;
            width: 100%;

            @include responsiveFont(24px, 18px);

            line-height: 1.22;
            letter-spacing: 0;
            text-align: center;
            color: #fff;
        }

        &__icon-play {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            box-sizing: border-box;
            background-color: transparent;
            border: 2px solid #fff;
            border-radius: 100%;
            z-index: 1;
        }

        &__icon-play__icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-35%, -50%);
            width: 0;
            height: 0;
            border-top: 10px solid transparent;
            border-left: 20px solid #fff;
            border-bottom: 10px solid transparent;
            background-color: transparent;
            z-index: 5;
        }
    }
</style>
