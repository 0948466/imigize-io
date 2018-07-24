<template>
    <section class="sector">
        <canvas ref="cnvs" width="94px" height="94px"></canvas>
        <div class="sector__value" v-bind:style="{color}">{{value}}%</div>
    </section>
</template>

<script>
  export default {
    name: 'Sector',
    props: ['color', 'value'],
    mounted() {
      this.initCanvas()
    },
    methods: {
      initCanvas() {
        let degree = 270 * this.value / 100
        let canvas = this.$refs.cnvs
        let context = canvas.getContext('2d')
        let x = canvas.width / 2
        let y = canvas.height / 2
        context.clearRect(0, 0, canvas.width, canvas.height)
        let radius = canvas.width / 2 - 3
        let startAngle = 270 * (Math.PI / 180)
        let endAngle = degree * (Math.PI / 180)
        let counterClockwise = false

        context.beginPath()
        context.arc(x, y, radius, startAngle, endAngle, counterClockwise)
        context.lineWidth = 4
        context.strokeStyle = this.color
        context.stroke()
      }
    },

    watch: {
      value: 'initCanvas'
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .sector {
        position: relative;
        margin-bottom: 0.2em;
        width: 94px;
        height: 94px;
        font-size: 27.79px;
        line-height: 95px;
        font-weight: 600;
        border-radius: 50%;
        text-align: center;

        &__value {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>


