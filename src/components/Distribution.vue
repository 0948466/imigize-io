<template>
    <section class="distribution" data-nav="7" ref="distribution">
        <div class="container">
            <div class="row">
                <h2 class="distribution__title">
                    {{ $t('distribution.title')}}
                </h2>
                <div class="distribution__buttons">
                    <button class="distribution__button"
                            :class="{distribution__button_active: diagActive === 1}"
                            @click="onButtonClick(1)">
                        {{ $t('distribution.btn1')}}
                        <span class="distribution__button__border"
                              :class="{distribution__button__border_active: diagActive === 1}"
                        ></span>
                    </button>
                    <button class=" distribution__button"
                        :class="{distribution__button_active: diagActive === 2}"
                        @click="onButtonClick(2)">
                        {{ $t('distribution.btn2')}}
                        <span class="distribution__button__border"
                              :class="{distribution__button__border_active: diagActive === 2}"
                        ></span>
                    </button>
                </div>

                <div class="distribution__img-container">
                    <svg v-if="diagActive === 2" class="distribution__img__svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="204.488mm" height="123.446mm" version="1.1" style="margin-left: 2%; shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 19000 10800"
 xmlns:xlink="http://www.w3.org/1999/xlink">
     <g class="distribution__diagr2" :class="{ distribution__diagr2_active: diagActive === 2 }">
         <defs>
  <radialGradient id="id0a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.983057 -0 -0 1.0119 167 -70)" cx="9837.86" cy="5863.05" r="3506.32" fx="9837.86" fy="5863.05">
   <stop offset="0" style="stop-opacity:1; stop-color:#0967EB"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id1a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.929418 -0 -0 1.49067 675 -2734)" cx="9567.84" cy="5571.91" r="2081.19" fx="9567.84" fy="5571.91">
   <stop offset="0" style="stop-opacity:1; stop-color:#E31E24"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id2a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.77318 -0 -0 1.84783 -7321 -5188)" cx="9468.33" cy="6118.98" r="1996.65" fx="9468.33" fy="6118.98">
   <stop offset="0" style="stop-opacity:1; stop-color:#64C70E"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id3a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.35629 1.05687 -0.908487 2.02547 -7863 -16171)" cx="9678.59" cy="5794.41" r="1341.59" fx="9678.59" fy="5794.41">
   <stop offset="0" style="stop-opacity:1; stop-color:#F4BD43"/>
   <stop offset="0.141176" style="stop-opacity:1; stop-color:#F4BD43"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
 </defs>
         <g>
  <metadata id="CorelCorpID_0Corel-Layer"/>
             <path class="fil0" d="M9766 1093c2680,0 4853,2173 4853,4854 0,2680 -2173,4853 -4853,4853 -2680,0 -4853,-2173 -4853,-4853 0,-2681 2173,-4854 4853,-4854zm0 679c2305,0 4174,1869 4174,4175 0,2305 -1869,4174 -4174,4174 -2305,0 -4174,-1869 -4174,-4174 0,-2306 1869,-4175 4174,-4175z"/>
          <g class="distribution__graf distribution__graf1__path">
              <path class="fil1a str3a" d="M9766 1417c2501,0 4529,2028 4529,4530 0,2501 -2028,4529 -4529,4529 -483,0 -948,-76 -1384,-216"/>
               <path class="fil10a" d="M9767 5947l-1297 3968c408,134 844,206 1297,206 2305,0 4174,-1869 4174,-4174 0,-2306 -1869,-4175 -4174,-4175l0 4175z"/>
         </g>
         <g class="distribution__graf distribution__graf1__text">
               <text x="14157" y="746"  class="fil6a fnt0a">{{ $t('distribution.graf1aText1')}}</text>
               <text x="14157" y="1100"  class="fil6a fnt0a">{{ $t('distribution.graf1aText2')}}</text>
               <text x="14157" y="1470"  class="fil6a fnt0a">{{ $t('distribution.graf1aText3')}}</text>
               <text x="14158" y="2225"  class="fil2a fnt1a">5</text>
               <text x="14918" y="2225"  class="fil2a fnt1a">%</text>
               <text x="14538" y="2225"  class="fil2a fnt1a">5</text>
               <polyline class="fil1a str4a" points="12071,1931 12387,1382 13753,1382 "/>
               <circle class="fil2a str5a" cx="13782" cy="1384" r="87"/>
         </g>

         <g class="distribution__graf distribution__graf2__path">
             <path class="fil1a str2a" d="M7947 10096c-26,-12 -52,-24 -78,-36 -41,-19 -82,-38 -122,-58 -1488,-743 -2510,-2280 -2510,-4055 0,-177 10,-351 29,-521 4,-28 7,-56 11,-84"/>
             <path class="fil9a" d="M7740 9600c-961,-532 -1689,-1432 -1996,-2509l-89 -418 -39 -275 -21 -294 1 -338 28 -342 4136 523 -1683 3818 -108 -50 -229 -115z"/>
         </g>
         <g class="distribution__graf distribution__graf2__text">
             <polyline class="fil1a str10a" points="6288,8966 5971,9515 4513,9515 "/>
             <circle class="fil5a str11a" cx="4470" cy="9513" r="87"/>
             <text x="449" y="9253"  class="fil6a fnt0a">{{ $t('distribution.graf2aText1')}}</text>
             <text x="449" y="9607"  class="fil6a fnt0a">{{ $t('distribution.graf2aText2')}}</text>
             <text x="526" y="10452"  class="fil5a fnt2a">27%</text>
         </g>

           <g class="distribution__graf distribution__graf3__path">
            <path class="fil8a" d="M5700 4975c3,-13 6,-25 9,-38 59,-236 139,-469 242,-699 366,-816 962,-1457 1677,-1880l416 -215 1716 3804 -4066 -925 6 -47z"/>
               <path class="fil1a str1a" d="M5364 4875c324,-1333 1237,-2435 2447,-3015"/>
         </g>
         <g class="distribution__graf distribution__graf3__text">
               <polyline class="fil1a str6a" points="6306,2795 6114,2463 5505,2463 "/>
               <circle class="fil3a str7a" cx="5475" cy="2464" r="87"/>
               <text x="-29" y="2559"  class="fil6a fnt0a">{{ $t('distribution.graf3aText1')}}</text>
               <text x="-74" y="3367"  class="fil3a fnt2a">1</text>
               <text x="686" y="3367"  class="fil3a fnt2a">%</text>
               <text x="306" y="3367"  class="fil3a fnt2a">5</text>
         </g>

          <g class="distribution__graf distribution__graf4__path">
             <path class="fil1a str0a" d="M8258 1674c333,-117 685,-197 1048,-234"/>
              <path class="fil7a" d="M9760 5947l-1372 -3942 352 -107c228,-57 463,-96 703,-114l317 4163z"/>
         </g>
         <g class="distribution__graf distribution__graf4__text">
                <polyline class="fil1a str8a" points="8892,1360 8575,812 6932,812 "/>
                <circle class="fil4a str9a" cx="6968" cy="813" r="87"/>
                <text x="1433" y="914"  class="fil6a fnt0a">{{ $t('distribution.graf4aText1')}}</text>
                <text x="5472" y="497"  class="fil4a fnt2a">3</text>
                <text x="5852" y="497"  class="fil4a fnt2a">%</text>
         </g>
         </g>
     </g>
</svg>
                    <svg v-else class="distribution__img__svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="204.488mm" height="123.446mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 10600 7400"
 xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
  <radialGradient id="id0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.382194 -0 -0 1.55976 3377 -2239)" cx="5465.65" cy="4000.38" r="1419.91" fx="5465.65" fy="4000.38">
   <stop offset="0" style="stop-opacity:1; stop-color:#E31E24"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34695 -0 -0 1.66986 -1837 -2754)" cx="5295.09" cy="4110.72" r="1344.32" fx="5295.09" fy="4110.72">
   <stop offset="0" style="stop-opacity:1; stop-color:#7E71B1"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id2" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.24775 -0 -0 1.31262 -1417 -1268)" cx="5720.66" cy="4056.94" r="2847.79" fx="5720.66" fy="4056.94">
   <stop offset="0" style="stop-opacity:1; stop-color:#09AFEB"/>
   <stop offset="0.588235" style="stop-opacity:1; stop-color:#F6F9FB"/>
   <stop offset="0.678431" style="stop-opacity:1; stop-color:#FEFEFE"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id3" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.92295 -0 -0 1.74976 -5200 -3154)" cx="5634.51" cy="4206.31" r="1068.46" fx="5634.51" fy="4206.31">
   <stop offset="0" style="stop-opacity:1; stop-color:#8DC75A"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
  <radialGradient id="id4" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.92299 -0 -0 1.46379 -5196 -1715)" cx="5629.11" cy="3698.04" r="1110.68" fx="5629.11" fy="3698.04">
   <stop offset="0" style="stop-opacity:1; stop-color:#F29E44"/>
   <stop offset="0.541176" style="stop-opacity:1; stop-color:#F9E1C6"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#FEFEFE"/>
  </radialGradient>
 </defs>
 <g>
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fil0" d="M5771 746c1829,0 3311,1482 3311,3311 0,1829 -1482,3311 -3311,3311 -1828,0 -3311,-1482 -3311,-3311 0,-1829 1483,-3311 3311,-3311zm0 463c1573,0 2848,1275 2848,2848 0,1573 -1275,2848 -2848,2848 -1573,0 -2848,-1275 -2848,-2848 0,-1509 1173,-2742 2655,-2841 64,-5 128,-7 193,-7z"/>

     <g class="distribution__diagr1" :class="{ distribution__diagr1_active: diagActive === 1 }">
          <g class="distribution__graf distribution__graf1__path">
              <path class="fil1 str4" d="M5771 967c1707,0 3090,1383 3090,3090 0,1706 -1383,3090 -3090,3090 -409,0 -812,-80 -1188,-237"/>
              <path class="fil12" d="M5771 4057l-1120 2613c344,147 722,229 1120,229 1570,0 2842,-1272 2842,-2842 0,-1570 -1272,-2842 -2842,-2842l0 2842z"/>
         </g>
         <g class="distribution__graf distribution__graf1__text">
             <polyline class="fil1 str5" points="7379,1317 7595,943 8527,943 "/>
             <circle class="fil2 str6" cx="8547" cy="944" r="60"/>
             <text x="8734" y="761"  class="fil7 fnt0">{{ $t('distribution.graf1Text1')}}</text>
             <text x="8734" y="992"  class="fil7 fnt0">{{ $t('distribution.graf1Text2')}}</text>
             <text x="8719" y="1518"  class="fil2 fnt1">58%</text>
         </g>

         <g class="distribution__graf distribution__graf2__path">
             <path class="fil1 str3" d="M4293 6771c-708,-387 -1249,-1043 -1483,-1830"/>
               <path class="fil11" d="M4396 6545c-654,-363 -1150,-975 -1359,-1709l2734 -779 -1375 2488 0 0z"/>
         </g>
         <g class="distribution__graf distribution__graf2__text">
             <polyline class="fil1 str13" points="3265,5915 3049,6289 2055,6289 "/>
             <circle class="fil6 str14" cx="2026" cy="6288" r="60"/>
             <text x="-10" y="6387"  class="fil7 fnt0">{{ $t('distribution.graf2Text1')}}</text>
             <text x="-10" y="6616"  class="fil7 fnt0">{{ $t('distribution.graf2Text2')}}</text>
             <text x="-50" y="7187"  class="fil6 fnt2">1</text>
             <text x="468" y="7187"  class="fil6 fnt2">%</text>
             <text x="209" y="7187"  class="fil6 fnt2">5</text>
         </g>

           <g class="distribution__graf distribution__graf3__path">
             <path class="fil1 str2" d="M2735 4634c-12,-62 -22,-125 -30,-189 -10,-83 -17,-166 -21,-250 -2,-46 -3,-92 -3,-138 0,-639 195,-1234 527,-1726"/>
               <path class="fil10" d="M2978 4585c-2,-9 -3,-18 -5,-27 -29,-162 -44,-330 -44,-501 0,-609 192,-1173 517,-1635l2325 1635 -2793 528z"/>
         </g>
         <g class="distribution__graf distribution__graf3__text">
               <polyline class="fil1 str11" points="2631,3570 2415,3196 1489,3196 "/>
               <circle class="fil5 str12" cx="1489" cy="3197" r="60"/>
               <text x="-10" y="3037"  class="fil7 fnt0">{{ $t('distribution.graf3Text1')}}</text>
               <text x="-10" y="3266"  class="fil7 fnt0">{{ $t('distribution.graf3Text2')}}</text>
               <text x="-40" y="3798"  class="fil5 fnt2">1</text>
               <text x="478" y="3798"  class="fil5 fnt2">%</text>
               <text x="219" y="3798"  class="fil5 fnt2">5</text>
         </g>

         <g class="distribution__graf distribution__graf4__path">
              <path class="fil8" d="M3607 2215c323,-379 744,-673 1225,-841l939 2683 -2164 -1842 0 0z"/>
             <path class="fil1 str1" d="M3420 2052c327,-383 747,-686 1224,-873 16,-6 33,-13 49,-19"/>
         </g>
         <g class="distribution__graf distribution__graf4__text">
              <polyline class="fil1 str7" points="3641,1675 3510,1449 2579,1449 "/>
              <circle class="fil3 str8" cx="2558" cy="1450" r="60"/>
              <text x="3" y="1281"  class="fil7 fnt0">{{ $t('distribution.graf4Text1')}}</text>
              <text x="3" y="1511"  class="fil7 fnt0">{{ $t('distribution.graf4Text2')}}</text>
              <text x="-40" y="2007"  class="fil3 fnt2">10%</text>
         </g>

          <g class="distribution__graf distribution__graf5__path">
             <path class="fil9" d="M5771 4057l-694 -2757c155,-38 315,-65 479,-77l215 2834z"/>
              <path class="fil1 str0" d="M5004 1063c147,-38 299,-65 454,-80"/>
         </g>
         <g class="distribution__graf distribution__graf5__text">
               <text x="3118" y="626"  class="fil7 fnt0"></text>
               <polyline class="fil1 str9" points="5210,928 4994,554 3873,554 "/>
               <circle class="fil4 str10" cx="3898" cy="555" r="60"/>
               <text x="3104" y="623"  class="fil7 fnt0">{{ $t('distribution.graf5Text')}}</text>
               <text x="3123" y="339"  class="fil4 fnt2">2%</text>
         </g>
          </g>
 </g>
</svg>
                </div>
                <div class="btn-container">
                    <a v-if="diagActive === 2" :href="$t('url.useOfProceeds')" class="btn arrow-grey-btn distribution__link" target="_blank" rel="noopener">{{ $t('distribution.link2')}}
                    </a>
                    <a v-else :href="$t('url.tokenDistributionChart')" class="btn arrow-grey-btn distribution__link" target="_blank" rel="noopener">{{ $t('distribution.link1')}}
                    </a>
                </div>
            </div>
        </div>
        <div class="bevel-container-wrap bottom">
            <div class="bevel-container bottom-right"></div>
        </div>
    </section>
</template>
<script>
  export default {
    name: 'Distribution',
    data: () => ({
      diagActive: null
    }),
    methods: {
      onButtonClick(btn) {
        this.diagActive = btn
      },

      onWindowScroll() {
        if (this.diagActive) {
          return
        }

        let top = this.$refs.distribution.getBoundingClientRect().top
        let bottom = this.$refs.distribution.getBoundingClientRect().bottom

        if (top < 200 && bottom > 200) {
          this.diagActive = 1
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onWindowScroll)
    },

    destroyed() {
      window.removeEventListener('scroll', this.onWindowScroll)
    }
  }
</script>

<style scoped lang="scss">
    @import "../scss/mixins.scss";

    .distribution {
        padding: 6em 4% 4em;
        position: relative;

        &__title {
            @include titleSection;
            margin-bottom: 1em;
        }

        &__buttons {
            margin: 0 auto 3em;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            max-width: 820px;
            flex-wrap: wrap;
        }

        $border-width: 2px;

        &__button {
            position: relative;
            margin-bottom: 1em;
            padding: 1em 2%;
            max-width: 370px;
            width: 100%;
            @include responsiveFont(17px, 15px);
            line-height: 1.5;
            color: rgba(1, 1, 1, 0.57);
            box-shadow: -1px 3px 8px 0px rgba(0, 0, 0, 0.2);

            &::before {
                background: linear-gradient(90deg, #fff, #fefefd);
            }
            &::after {
                background: linear-gradient(90deg, #7c7d7d, #7b7b7c);
            }

            &_active {
                cursor: default;
                color: #000;
                &::before {
                    background: linear-gradient(to bottom, #d3f6fc, #d1f5fb);
                }
                &::after {
                    background: linear-gradient(to bottom, #398e9b, #388d9a);
                }
            }
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: $border-width;
            }

            &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: $border-width;
            }
        }

        &__button__border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: $border-width;
                height: 100%;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: $border-width;
                height: 100%;
            }

            &::before {
                background: linear-gradient(to bottom, #fff 0, #7b7b7c);
            }
            &::after {
                background: linear-gradient(to bottom, #fff 0, #7b7b7c);
            }

            &_active {
                &::before {
                    background: linear-gradient(to bottom, #d3f6fc 0, #388d9a);
                }
                &::after {
                    background: linear-gradient(to bottom, #d3f6fc 0, #388d9a);
                }
            }
        }

        &__img-container {
            margin: 0 auto 4em;
            width: 100%;
        }

        &__img {
            width: 100%;
        }

        &__img__svg {
            width: 100%;
            max-height: 90vw;
        }

        &__graf {
            opacity: 0;
        }

        &__link {
            @include responsiveFont(18px, 11px);
        }
        $time: 8s;

        @for $i from 1 through 5 {
            &__diagr1_active &__graf#{$i}__path {
                animation: hideshowPath#{$i} #{$time} forwards;
            }

            &__diagr1_active &__graf#{$i}__text {
                animation: hideshowText#{$i} #{$time} forwards;
            }

            &__diagr2_active &__graf#{$i}__path {
                animation: hideshowPath#{$i} #{$time} forwards;
            }

            &__diagr2_active &__graf#{$i}__text {
                animation: hideshowText#{$i} #{$time} forwards;
            }

            @keyframes hideshowPath#{$i} {
                0% {
                    opacity: 0;
                }

                15% {
                    @if $i < 2 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                25% {
                    @if $i < 3 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                35% {
                    @if $i < 4 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                45% {
                    @if $i < 5 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                55% {
                    @if $i < 6 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                65% {
                    @if $i < 7 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes hideshowText#{$i} {
                0% {
                    opacity: 0;
                }
                7% {
                    opacity: 0;
                }
                20% {
                    @if $i < 2 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                30% {
                    @if $i < 3 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                40% {
                    @if $i < 4 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                50% {
                    @if $i < 5 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                60% {
                    @if $i < 6 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                70% {
                    @if $i < 7 {
                        opacity: 1;
                    } @else {
                        opacity: 0;
                    }
                }
                100% {
                    opacity: 1;
                }
            }
        }

        .bevel-container.bottom-right {
            border-right: 100vw solid #fafafa;
            border-bottom: 0.2vw solid #fafafa;
        }

        .btn-container {
            text-align: center;
        }
    }

    @keyframes hideshowText {
        0% {
            opacity: 0;
        }

        20% {
            opacity: 0;
        }

        25% {
            opacity: 1;
        }

        80% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .str9 {
        stroke: #E31E24;
        stroke-width: 29.8428px
    }

    .str7 {
        stroke: #7E71B1;
        stroke-width: 29.8428px
    }

    .str5 {
        stroke: #09AFEB;
        stroke-width: 29.8428px
    }

    .str13 {
        stroke: #8DC75A;
        stroke-width: 29.8428px
    }

    .str12 {
        stroke: #EF7F1A;
        stroke-width: 11.9371px
    }

    .str11 {
        stroke: #EF7F1A;
        stroke-width: 29.8428px
    }

    .str10 {
        stroke: #E31E24;
        stroke-width: 11.9371px
    }

    .str8 {
        stroke: #7E71B1;
        stroke-width: 11.9371px
    }

    .str6 {
        stroke: #09AFEB;
        stroke-width: 11.9371px
    }

    .str14 {
        stroke: #8DC75A;
        stroke-width: 11.9371px
    }

    .str2 {
        stroke: #EF7F1A;
        stroke-width: 238.743px;
        stroke-linecap: round
    }

    .str0 {
        stroke: #E31E24;
        stroke-width: 238.743px;
        stroke-linecap: round
    }

    .str1 {
        stroke: #7E71B1;
        stroke-width: 238.743px;
        stroke-linecap: round
    }

    .str4 {
        stroke: #09AFEB;
        stroke-width: 238.743px;
        stroke-linecap: round
    }

    .str3 {
        stroke: #8DC75A;
        stroke-width: 238.743px;
        stroke-linecap: round
    }

    .fil1 {
        fill: none
    }

    .fil0 {
        fill: #EBECEC
    }

    .fil7 {
        fill: #2B2A29
    }

    .fil5 {
        fill: #EF7F1A
    }

    .fil4 {
        fill: #E31E24
    }

    .fil3 {
        fill: #7E71B1
    }

    .fil2 {
        fill: #09AFEB
    }

    .fil6 {
        fill: #8DC75A
    }

    .fil9 {
        fill: url(#id0)
    }

    .fil8 {
        fill: url(#id1)
    }

    .fil12 {
        fill: url(#id2)
    }

    .fil11 {
        fill: url(#id3)
    }

    .fil10 {
        fill: url(#id4)
    }

    .fnt0 {
        font-weight: normal;
        font-size: 214.767px;
    }

    .fnt1 {
        font-weight: normal;
        font-size: 466.025px;
    }

    .fnt2 {
        font-weight: normal;
        font-size: 466.031px;
    }

    .str8a {
        stroke: #E31E24;
        stroke-width: 43.7426px
    }

    .str6a {
        stroke: #F4BD43;
        stroke-width: 43.7426px
    }

    .str4a {
        stroke: #0967EB;
        stroke-width: 43.7426px
    }

    .str10a {
        stroke: #64C70E;
        stroke-width: 43.7426px
    }

    .str9a {
        stroke: #E31E24;
        stroke-width: 17.497px
    }

    .str7a {
        stroke: #F4BD43;
        stroke-width: 17.497px
    }

    .str5a {
        stroke: #0967EB;
        stroke-width: 17.497px
    }

    .str11a {
        stroke: #64C70E;
        stroke-width: 17.497px
    }

    .str0a {
        stroke: #E31E24;
        stroke-width: 349.941px;
        stroke-linecap: round
    }

    .str1a {
        stroke: #F4BD43;
        stroke-width: 349.941px;
        stroke-linecap: round
    }

    .str3a {
        stroke: #0967EB;
        stroke-width: 349.941px;
        stroke-linecap: round
    }

    .str2a {
        stroke: #64C70E;
        stroke-width: 349.941px;
        stroke-linecap: round
    }

    .fil1a {
        fill: none
    }

    .fil0a {
        fill: #EBECEC
    }

    .fil6a {
        fill: #2B2A29
    }

    .fil4a {
        fill: #E31E24
    }

    .fil3a {
        fill: #F4BD43
    }

    .fil2a {
        fill: #0967EB
    }

    .fil5a {
        fill: #64C70E
    }

    .fil10a {
        fill: url(#id0a)
    }

    .fil7a {
        fill: url(#id1a)
    }

    .fil9a {
        fill: url(#id2a)
    }

    .fil8a {
        fill: url(#id3a)
    }

    .fnt0a {
        font-weight: normal;
        font-size: 314.798px;
    }

    .fnt1a {
        font-weight: normal;
        font-size: 683.084px;
    }

    .fnt2a {
        font-weight: normal;
        font-size: 683.093px;
    }

</style>