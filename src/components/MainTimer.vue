<template>
    <section class="main js-main-section" data-nav="1" id="pre-sale">

        <div class="video-foot-container">
            <video class="video-foot-container__video video-foot-container__video_hide" width="100%" height="100%"
                   muted>
                <source src="../assets/video/videlRolik1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                <source src="../assets/video/videlRolik.webm" type='video/webm; codecs="vp8, vorbis"'/>
                <source src="../assets/video/videlRolik.ogv" type='video/ogg; codecs="theora, vorbis"'/>
            </video>
            <div class="video-replay-wrap">
                <button class="video-replay-btn video-replay-btn_mobile-show">{{ $t('mainTimer.videoBtn')}}</button>
            </div>
        </div>

        <div :class="['info-container', {'info-container-test': ifTest()}]">
            <h2 class="main__title">
                {{ $t('mainTimer.title1')}}
            </h2>

            <div class="timer-container">
                <div class="days js-days">
                    <span>0</span>
                    <span>0</span>
                    <div class="days-title">{{ $t('mainTimer.days')}}</div>
                </div>
                <div class="delimiter">:</div>
                <div class="hours js-hours">
                    <span>0</span>
                    <span>0</span>
                    <div class="hours-title">{{ $t('mainTimer.hours')}}</div>
                </div>
                <div class="delimiter">:</div>
                <div class="minutes js-minutes">
                    <span>0</span>
                    <span>0</span>
                    <div class="minutes-title">{{ $t('mainTimer.minutes')}}</div>
                </div>
                <div class="delimiter">:</div>
                <div class="seconds js-seconds">
                    <span>0</span>
                    <span>0</span>
                    <div class="seconds-title">{{ $t('mainTimer.seconds')}}</div>
                </div>
            </div>
            <form class="btn-container" id="subscribe-form" method="post" action="/subscribe.php" data-lang="ru">
                <div class="btn-container_input__wrapper">
                    <input class="btn-container_input" type="email" name="email" placeholder="Ваш email" required>
                </div>
                <a href="https://sale.imigize.io/register"
                   class="btn main-btn main__btn" target="_blank" rel="noopener">{{ $t('mainTimer.btn')}}</a>
            </form>
            <div class="link-wrap">
                <a class="link__waitlist-form"
                   href="https://sale.imigize.io/login"
                   target="_blank" rel="noopener">Log in
                </a>
            </div>
        </div>

        <div class="btns-container">
            <div class="social-btns">
                <a href="https://medium.com/@imigize" target="_blank" rel="noopener" class="btn"
                   aria-label="medium">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 1490 1490">
                        <g>
                            <circle class="fil0 str0 str0_medium" cx="745" cy="745" r="711"/>
                            <g>
                                <path class="fil1"
                                      d="M1189 512l-273 -136c-1,-1 -2,-1 -3,-1 -1,0 -1,0 -1,0 -3,0 -6,2 -8,5l-168 272 187 305 269 -436c1,-3 0,-7 -3,-9z"/>
                                <polygon class="fil1" points="647,557 647,851 909,981 "/>
                                <path class="fil1" d="M931 992l240 120c13,7 24,0 24,-14l0 -534 -264 428z"/>
                                <path class="fil1"
                                      d="M618 514l-251 -126 -16 -8c-2,-1 -4,-2 -6,-2 -3,0 -6,1 -7,3 -2,2 -3,5 -3,9l0 574c0,9 7,21 16,25l247 124c3,1 7,2 10,2 8,0 14,-6 14,-17l0 -579c0,-2 -2,-4 -4,-5z"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="https://www.reddit.com/user/Frogginton/" target="_blank" rel="noopener" class="btn"
                   aria-label="reddit">
                    <svg baseProfile="full"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 274 274">
                        <g>
                            <g>
                                <path class="fil1 fil1_reddit"
                                      d="M262 137c0,-34 -14,-66 -37,-88 -22,-23 -54,-37 -88,-37 -34,0 -66,14 -88,37 -23,22 -37,54 -37,88 0,34 14,66 37,88 22,23 54,37 88,37 34,0 66,-14 88,-37 23,-22 37,-54 37,-88zm-28 -97c25,25 40,59 40,97 0,38 -15,72 -40,97 -25,25 -59,40 -97,40 -38,0 -72,-15 -97,-40 -25,-25 -40,-59 -40,-97 0,-38 15,-72 40,-97 25,-25 59,-40 97,-40 38,0 72,15 97,40z"/>
                                <path class="fil1 fil1-reddit"
                                      d="M107 161c0,0 -1,1 -1,1 -2,3 -3,8 -3,12 0,5 1,9 3,12 1,1 2,2 2,3 0,-2 0,-4 0,-6 -1,-4 -1,-8 -1,-13 0,-3 0,-5 0,-8l0 -1zm8 48l0 0c-3,1 -6,1 -8,3 -1,1 -2,3 -2,5l0 0 16 0 0 0c0,0 0,-1 0,-1l-1 0c0,-1 -1,-2 -2,-3l0 -1 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0c0,0 -1,-1 -1,-1zm6 -4l0 0c1,3 3,5 4,7 2,2 3,3 5,4l0 0 0 0 0 0 0 0c0,1 1,1 1,1l11 0c0,0 1,0 1,-1l1 0c1,-1 2,-3 4,-4 1,-1 1,-3 2,-4l0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0c1,-2 2,-4 3,-6 3,-8 5,-19 5,-31 0,-3 0,-7 -1,-10 0,-2 0,-4 0,-6l-1 0 0 0 0 0 0 0c-5,1 -11,2 -17,2l0 0 0 0 0 1 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 -1 0 0 -1 0c-5,0 -11,-1 -16,-2l0 0 0 0 -1 0 0 0c0,2 -1,4 -1,6 0,3 0,7 0,10 0,12 2,23 5,31 0,1 1,3 2,4zm9 18l-30 0 -1 -2c0,0 0,-1 0,-2 0,0 -1,-1 -1,-2l0 0c0,-4 2,-7 5,-10 3,-2 6,-3 10,-4l0 0c0,-1 -1,-3 -2,-5 -4,0 -8,-3 -11,-7 -3,-4 -5,-10 -5,-17 0,-6 2,-12 5,-16 2,-3 4,-6 8,-7 -4,-1 -7,-3 -10,-5 -10,-7 -16,-16 -16,-27 0,-1 0,-2 0,-3 0,0 0,-1 -1,-1 -3,-2 -5,-5 -5,-9 -1,-3 0,-7 2,-10 2,-4 5,-6 9,-7 3,-1 7,-1 10,1 1,1 2,1 2,2 10,-6 22,-9 36,-10l7 -25c1,-2 2,-3 4,-2l20 4c1,-1 1,-2 2,-3 3,-2 6,-3 9,-3 3,0 6,1 8,3 3,2 4,5 4,9 0,3 -1,6 -4,8l0 0c-2,3 -5,4 -8,4 -3,0 -6,-1 -9,-4 -2,-2 -3,-5 -3,-8l-18 -4 -6 21c12,1 24,5 32,10 1,-1 2,-1 2,-2 4,-2 7,-2 11,-1 3,1 6,3 9,7 2,3 2,7 2,10 -1,4 -3,7 -6,9 0,0 0,1 0,1 0,1 0,2 0,3 0,11 -6,20 -17,27 -2,2 -6,4 -9,5 3,1 6,4 8,7 3,4 5,10 5,16l0 0c0,7 -2,12 -5,17 -3,4 -7,7 -12,7 0,2 -1,4 -2,5l0 0c4,0 8,2 11,4 3,2 5,6 5,10 0,1 0,1 0,2 0,1 0,2 -1,2l0 2 -30 0 0 0 0 0 -1 0 -13 0 0 0zm29 -14c-1,0 -2,1 -2,1l-1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 -1 0 0 0c0,1 -1,2 -1,2 -1,1 -1,2 -2,2l18 0 0 0c0,-2 -1,-4 -3,-5 -2,-2 -4,-3 -7,-3zm4 -19c2,-1 3,-2 4,-4 2,-3 3,-7 3,-12l0 0c0,-5 -1,-9 -4,-12 0,-1 -1,-2 -1,-2 0,3 0,7 0,10 0,7 -1,14 -2,20zm-50 -43l1 0c1,0 3,1 4,1l0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 0c4,1 8,1 12,1l0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0c4,0 9,-1 13,-2l0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0c1,0 1,0 2,0l0 -1c0,0 1,0 2,0l0 0c5,-2 9,-4 12,-6 8,-6 14,-13 14,-22 0,-2 -1,-4 -2,-7l0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 -1 0 0 0 0 0 0 0c0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-2l0 0 0 -1 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 0c-1,-1 -3,-3 -5,-4 -9,-6 -21,-10 -35,-10 -13,0 -26,4 -34,10l-1 0 0 1c-4,2 -6,4 -8,7 -1,1 -1,1 -1,2l0 0 0 0 0 0 -1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 -1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -1 0 0 0 0 0 0 0c-1,3 -1,5 -1,7 0,9 5,16 14,22 3,2 7,4 11,6zm41 -42c5,0 8,3 8,7 0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8 0,-4 4,-7 8,-7zm-36 0c5,0 8,3 8,7 0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8 0,-4 4,-7 8,-7zm35 26c1,-1 3,-1 5,0 1,2 1,4 0,5l-1 0c-2,2 -5,4 -9,5 -3,1 -7,2 -12,2 -4,0 -8,-1 -12,-2 -3,-1 -7,-3 -9,-5 -1,-1 -1,-3 0,-5 1,-1 3,-1 4,0 2,2 4,3 7,4 3,1 7,2 10,2 4,0 7,-1 10,-2 3,-1 5,-2 7,-3l0 -1zm25 -35c5,4 9,8 11,13 1,-1 2,-2 2,-3 0,-3 0,-5 -2,-7 -1,-2 -3,-4 -5,-4 -2,-1 -4,-1 -5,0l-1 1zm-94 13c2,-4 4,-8 8,-12l0 0c1,0 1,-1 2,-1l0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1c-2,-1 -4,-1 -5,0 -2,0 -4,2 -6,4 -1,2 -1,4 -1,7 0,1 1,2 2,3zm97 -48c-1,-1 -2,-2 -4,-2 -2,0 -3,1 -4,2 -1,1 -2,2 -2,4 0,1 1,3 2,4 1,1 2,2 4,2 2,0 3,-1 4,-2l0 0c1,-1 2,-3 2,-4 0,-2 -1,-3 -2,-4z"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <a :href="$t('url.bitcoin')" target="_blank" rel="noopener" class="btn"
                   aria-label="bitcoin">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 325 325">
                        <g>
                            <circle class="fil0 str0 str0_bitcoin" cx="162" cy="162" r="155"/>
                            <g>
                                <path class="fil1"
                                      d="M181 116c-4,-1 -10,-2 -19,-2l-16 0 0 35 16 0c8,0 14,-1 18,-2 4,-2 7,-3 9,-6 2,-3 3,-6 3,-10 0,-4 -1,-7 -3,-10 -2,-2 -5,-4 -8,-5zm40 -8c4,5 6,12 5,18 0,5 -1,9 -3,13 -2,5 -4,8 -8,12 -4,3 -9,5 -15,8l0 0 -90 16 1 -53c0,-4 -1,-7 -1,-8 -1,-1 -2,-2 -3,-3 -1,0 -4,-1 -8,-1l-5 0 0 -19 37 0 0 -24 24 0 0 24 16 0 0 -24 24 0 0 26c3,0 7,1 10,2 7,3 12,8 16,13z"/>
                                <path class="fil1"
                                      d="M192 179c2,3 2,7 3,11 0,5 -2,9 -5,13 -3,3 -6,5 -10,7 -4,1 -9,1 -15,1l-11 0c-3,0 -5,0 -6,0 -1,-1 -1,-1 -2,-2 0,-1 0,-4 0,-8l0 -31 19 0c8,0 14,1 18,2 4,2 7,4 9,7zm-81 -14l-1 37c0,4 0,7 0,8 -1,2 -2,2 -3,3 -2,1 -4,1 -8,1l-6 0 0 20 37 0 0 23 25 0 0 -23 13 0c1,0 1,0 2,0l0 24 24 0 0 -26c5,-1 8,-2 11,-3 9,-3 15,-8 20,-14 4,-7 7,-14 7,-21 0,-7 -2,-12 -5,-18 -3,-5 -7,-9 -12,-12 -4,-2 -9,-4 -15,-5 6,-3 11,-5 15,-8 2,-2 3,-4 5,-5l-109 19z"/>
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="https://t.me/imigize" target="_blank" rel="noopener" class="btn"
                   aria-label="t.me/imigize">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         viewBox="0 0 25.85 25.85">
                        <g class="cls-1">
                            <path class="fil1"
                                  d="M19.07,7.7c-.25,1.23-.52,2.59-.81,3.94q-.71,3.43-1.44,6.86c-.19.89-.36,1-1.12.42s-1.67-1.17-2.48-1.8a1,1,0,0,0-1.43.06c-.37.35-.78.66-1.18,1s-.74.35-1-.3c-.32-1-.66-1.93-.89-2.92a1.47,1.47,0,0,0-1.1-1.14c-.66-.21-1.31-.45-1.94-.72a3.51,3.51,0,0,1-.67-.5c.23-.2.42-.48.69-.59,2.79-1.1,5.59-2.16,8.39-3.24,1.37-.53,2.74-1.07,4.11-1.59C18.88,6.9,19.08,7,19.07,7.7ZM9.25,14c.24.83.44,1.58.67,2.32,0,.12.17.21.26.31a1.11,1.11,0,0,0,.16-.37,3.11,3.11,0,0,1,1.22-2.37C13,12.63,14.34,11.31,15.72,10a1.43,1.43,0,0,0,.2-.34,1.14,1.14,0,0,0-.32.08c-2,1.2-3.94,2.4-5.89,3.62A2.21,2.21,0,0,0,9.25,14Z"/>
                            <circle class="fil0 str0" cx="12.92" cy="12.92" r="12.42"/>
                        </g>
                    </svg>
                </a>
                <a href="https://twitter.com/imigize" target="_blank" rel="noopener" class="btn"
                   aria-label="twitter">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         viewBox="0 0 25.85 25.85">
                        <g>
                            <path class="fil1"
                                  d="M11.32,16.18A3.47,3.47,0,0,1,9,14.24l.83-.16C8.93,13.4,8,12.79,8.1,11.41H8.9a3.32,3.32,0,0,1-.52-3.64,8.05,8.05,0,0,0,5.39,2.89,14.81,14.81,0,0,1,1.15-2.43,2.51,2.51,0,0,1,3.39-.59,1.59,1.59,0,0,0,2,.07,4.65,4.65,0,0,1,.6-.18L20,8.89l.94-.07c0,.13,0,.25-.06.27-1.07.67-1,1.81-1.19,2.84a7.94,7.94,0,0,1-4.51,5.89,8.24,8.24,0,0,1-6.67,0,8.88,8.88,0,0,1-.93-.53C9,17.1,10.25,17.14,11.32,16.18Z"/>
                            <circle class="fil0 str0" cx="12.92" cy="12.92" r="12.42"/>
                        </g>
                    </svg>
                </a>
                <a href="https://www.facebook.com/Imigize/"
                   target="_blank" rel="noopener" class="btn" aria-label="facebook">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         viewBox="0 0 25.85 25.85">
                        <g>
                            <path class="fil1"
                                  d="M11.41,13.65c-.63,0-1.12,0-1.61,0-.33,0-.5-.09-.49-.45q0-.77,0-1.55c0-.35.14-.48.48-.47.49,0,1,0,1.55,0,0-.24,0-.45,0-.65,0-.55,0-1.11.07-1.66a2.75,2.75,0,0,1,2.71-2.61A10.19,10.19,0,0,1,16,6.35a.58.58,0,0,1,.38.41c.05.45,0,.91,0,1.37s-.11.49-.46.47a8.28,8.28,0,0,0-1.09,0,.89.89,0,0,0-.95,1c0,.36,0,.73,0,1.09,0,.13,0,.27,0,.49h2.35c-.11.81-.19,1.52-.31,2.22,0,.11-.27.23-.42.24-.51,0-1,0-1.62,0v6.11H11.41Z"/>
                            <circle class="fil0 str0" cx="12.92" cy="12.92" r="12.42"/>
                        </g>
                    </svg>
                </a>
                <a href="https://vk.com/imigize_com" target="_blank" rel="noopener" class="btn"
                   aria-label="vk.com">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         viewBox="0 0 25.85 25.85">
                        <g>
                            <path class="fil1"
                                  d="M18.81,18.87h0a3.16,3.16,0,0,1-3.26-1.47,3,3,0,0,0-.57-.57c-.32-.26-.63-.2-.78.18a4.47,4.47,0,0,0-.23,1.1c-.06.52-.21.68-.72.73a6.18,6.18,0,0,1-5.76-2.7,28.5,28.5,0,0,1-3.2-5.61c-.24-.54-.07-.8.52-.81s1.46,0,2.19,0a.89.89,0,0,1,.84.58c.5,1,1,1.95,1.57,2.91a2.41,2.41,0,0,0,.5.58c.29.26.63.18.65-.2a24.78,24.78,0,0,0,0-2.85c0-.2-.36-.38-.56-.56A1.85,1.85,0,0,0,9.65,10c.07-.11.12-.28.22-.32a4.66,4.66,0,0,1,1.22-.34,13.06,13.06,0,0,1,2,.06c.6.05.83.27.86.87,0,.85,0,1.7,0,2.55a2.93,2.93,0,0,0,.09.8c.1.36.32.42.6.16a3.37,3.37,0,0,0,.65-.77c.51-.9,1-1.82,1.45-2.75a.79.79,0,0,1,.8-.53c.82,0,1.65,0,2.47,0s1.05.36.66,1c-.54.93-1.18,1.8-1.79,2.69-.17.26-.38.49-.55.75a.71.71,0,0,0,.08,1.05c.46.48,1,.92,1.4,1.4a7.25,7.25,0,0,1,.86,1.12c.35.58.08,1-.6,1.07-.4,0-.81,0-1.21,0Z"/>
                            <circle class="fil0 str0" cx="12.92" cy="12.92" r="12.42"/>
                        </g>
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCvksyWOvypSWFjy9cFoS-FQ" target="_blank" rel="noopener"
                   class="btn yt-btn" aria-label="youtube">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         baseProfile="full"
                         version="1.1"
                         viewBox="0 0 25.85 25.85">
                        <g>
                            <path class="fil1"
                                  d="M12.94,8.69c1.37,0,2.76.09,4.15.15,1.08.05,1.71.52,1.77,1.59a46.24,46.24,0,0,1,0,5.11,1.56,1.56,0,0,1-1.77,1.59c-2.75,0-5.5,0-8.25,0C7.58,17.1,7,16.55,7,15.26c-.07-1.53-.07-3.07,0-4.59C7,9.41,7.63,8.9,8.89,8.84S11.58,8.74,12.94,8.69Zm-1.2,2.63v3.32L14.93,13Z"/>
                            <circle class="fil0 str0" cx="12.92" cy="12.92" r="12.42"/>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="other-btns">
                <a :href="$t('url.wp')" target="_blank" rel="noopener" class="btn">White-paper</a>
                <a :href="$t('url.op')" target="_blank" rel="noopener" class="btn">One-pager</a>
            </div>
        </div>

        <pagination/>

        <div class="bevel-container-wrap bottom">
            <div class="bevel-container bottom  bottom-ru"></div>
        </div>
    </section>
</template>

<script>
  import Pagination from '@/components/Pagination.vue'

  export default {
    name: 'MainTimer',
    methods: {
      ifTest() {
        return ~window.location.href.indexOf('test')
      }
    },
    components: {
      Pagination
    }
  }
</script>


<style scoped lang="scss">
    @import "../scss/mixins.scss";

    $ns: ".main";

    #{$ns} {
        background: radial-gradient(circle farthest-corner at 70% 1%, #04809d 0, #01788a 20%, #006476 30%, #014055 50%, #063c4b 70%, #04303d 100%);
        max-height: calc(100vh - 108px + 8vw);
        min-height: 400px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        text-align: center;

        @include w320-767 {
            height: auto;
            max-height: none;
            min-height: 620px;
            padding-bottom: 130px;
            background: radial-gradient(circle farthest-corner at 70% 1%, #04809d 0, #01788a 20%, #006476 30%, #014457 50%, #014457 70%, #014457 100%);
        }

        .bevel-container.bottom-ru {
            border-left: 100vw solid #f0f0f0;
            border-bottom: 0.2vw solid #f0f0f0;
        }

        .utc {
            position: relative;
        }

        .info-container {
            position: absolute;
            top: 10vw;
            left: 10vw;
            display: inline-block;
            text-align: center;
            z-index: 1;

            @include w320-767 {
                position: relative;
                padding: 5em 0;
                top: auto;
                left: auto;
                min-width: 250px;
            }

            .icon-question {
                position: absolute;
                top: 0;
                right: 0;

                &::after {
                    content: "?";
                    position: absolute;
                    top: -0.2vw;
                    right: -1.5vw;
                    width: 1vw;
                    height: 1vw;
                    box-sizing: content-box;
                    border: 1.5px solid #03cfe6;
                    border-radius: 50%;
                    font-size: 0.9vw;
                    font-weight: 400;
                    line-height: 1vw;
                    color: #03cfe6;
                }
            }

            .info-container-text {
                position: relative;
                margin-bottom: 1em;
                color: rgba(255, 255, 255, 0.4);
                text-transform: uppercase;

                @include responsiveFont(19px, 15px);

                @include w320-767 {
                    text-align: right;
                }
            }

            .link-wrap {
                margin-top: 1em;
                text-align: left !important;

                @include w320-767 {
                    text-align: right;
                }
            }

            .link__waitlist-form {
                @include responsiveFont(15px, 12px);

                line-height: 1.3;
                color: #fff;

                &:hover {
                    color: #03cfe6;
                }
            }

            .timer-container {
                display: flex;

                .delimiter {
                    margin: 0 0.3vw;
                    font-size: 2.4vw;
                    color: #fff;
                    padding-top: 0.1vw;
                }

                > div {
                    span {
                        color: #fff;
                        font-weight: 100;
                        font-size: 2.4vw;
                        display: inline-block;
                        border: 0.07vw solid rgba(255, 255, 255, 0.3);
                        width: 2vw;
                        height: 3vw;
                        border-radius: 0.3vw;
                        line-height: 2.7vw;
                        position: relative;
                        z-index: 2;

                        &:before {
                            content: "";
                            position: absolute;
                            display: block;
                            height: 50%;
                            top: -0.07vw;
                            border-radius: 0.3vw 0.3vw 0 0;
                            left: 0;
                            width: 100%;
                            background-color: rgba(255, 255, 255, 0.1);
                            z-index: -1;
                        }
                    }

                    div {
                        color: #fff;
                        opacity: 0.4;
                        font-size: 0.8vw;
                        margin-top: 0.3em;
                    }
                }
            }

            .btn-container {
                margin-top: 3vw;
                text-align: right;

                .btn {
                    width: 100%;
                }
            }

            .btn-container_input__wrapper {
                display: none;
                vertical-align: top;
                width: 0;
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s, opacity 1s linear;

                &__show {
                    display: inline-block;
                    width: calc(100% - 69px);
                    box-sizing: border-box;
                }

                &__visible {
                    visibility: visible;
                    opacity: 1;
                }
            }

            .btn-container_input {
                width: 100%;
                border: 0.05vw solid rgba(255, 255, 255, 0.5);
                background-color: transparent;
                font-size: 1vw;
                height: 3vw;
                line-height: 3vw;
                padding: 0 1vw;
                color: rgba(255, 255, 255, 0.5);

                &::placeholder {
                    text-transform: uppercase;
                }
            }
        }

        .info-container-text__link {
            position: absolute;
            top: 0;
            left: 0;
            color: #d82e32;
            text-transform: capitalize;
        }

        .video-foot-container {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            background: url("../assets/img/mainTimer/video-nogi.jpg") no-repeat 50% top;
            background-size: cover;
            text-align: center;

            @include w320-767 {
                position: relative;
                left: 4px;
                background-image: url("../assets/img/mainTimer/video-nogi.png");
                background-size: contain;
            }
        }

        .player-container {
            margin-top: 5vw;
            padding-left: 9vw;
        }

        .btns-container {
            display: flex;
            align-items: center;
            position: absolute;
            right: 23vw;
            bottom: 7vw;

            @include w320-767 {
                left: 4%;
                right: 4%;
                justify-content: space-around;
            }

            .social-btns {
                margin-right: 2vw;

                .btn {
                    width: 2.6vw;
                    height: 2.6vw;
                    opacity: 0.7;
                    transition: opacity 0.3s;
                    margin-right: 0.7vw;

                    @include w320-767 {
                        width: 35px;
                        height: 35px;
                    }

                    &:hover {
                        opacity: 1;
                        .fil1 {
                            fill: #03CFE6;
                            transition: fill 0.3s;
                        }

                        .str0 {
                            stroke: #03CFE6;
                            transition: stroke 0.3s;
                        }
                    }
                }
            }

            .other-btns {
                .btn {
                    color: #fff;

                    @include responsiveFont(17px, 12px);

                    line-height: 1.7;
                    font-weight: 300;
                    font-size: 0.9vw;
                    text-transform: uppercase;
                    text-decoration: underline;
                    opacity: 0.7;
                    transition: opacity 0.3s;

                    &:hover {
                        opacity: 1;
                    }

                    &:first-child {
                        margin-right: 0.5vw;
                    }
                }
            }
        }

        .video-foot-container__video {
            &_hide {
                opacity: 0;
            }

            @include w320-767 {
                transform: scale(2) translateX(-20%) translateY(20%);
            }
        }

        .video-replay-wrap {
            position: absolute;
            right: calc(23vw + 38px);
            bottom: 30%;
            opacity: 0.3;
            transition: opacity 0.3s;

            @include w320-767 {
                right: 4vw;
                bottom: 0;
            }

            &:hover {
                opacity: 1;
            }
        }

        .video-replay-btn {
            position: relative;
            padding-right: 1.2em;

            @include responsiveFont(18px, 14px);

            color: #03cfe6;
            cursor: pointer;
            opacity: 0;
            display: none;
            transition: opacity 0.5s;

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                margin-top: -0.4em;
                right: 0;
                width: 0.8em;
                height: 0.8em;
                background: url("../assets/img/icons/icon-arrow-round.svg") no-repeat;
                background-size: cover;
                border-radius: 50%;
                transition: all 0.6s ease-in-out;
            }

            &_mobile-show {
                @include w320-767 {
                    display: block;
                    opacity: 1;
                }
            }

            &_show {
                opacity: 1;
                display: block;
            }
        }
    }

    @include w320-767 {
        .main .info-container .timer-container {
            justify-content: center;
        }

        .main .info-container .timer-container .seconds,
        .main .info-container .timer-container .minutes,
        .main .info-container .timer-container .days,
        .main .info-container .timer-container .hours {
            width: 24%;
        }

        .main .info-container .timer-container > div span {
            font-size: 18px;
            display: inline-block;
            margin-right: 2%;
            border: 1px solid #ccc;
            width: 44%;
            height: 34px;
            border-radius: 3px;
            line-height: 32px;
        }

        .main .info-container .timer-container .delimiter {
            font-size: 16px;
            line-height: 30px;
        }

        .main .info-container .timer-container > div div {
            font-size: 13px;
        }
    }

    #{$ns}__title {
        margin-bottom: 1.5em;

        @include responsiveFont(29px, 18px);

        line-height: 1.2;
        color: #fff;
        opacity: 0.7;
        text-transform: uppercase;
    }

    #{$ns}__btn {
        padding: 0 0.5vw;
        color: #fff;
        font-weight: 600;

        &__hover {
            color: #03cfe6;
        }
    }

    .str0 {
        stroke: #D9DADA;
        &_bitcoin {
            stroke-width: 14.6549px;
        }

        &_medium {
            stroke-width: 67.2666px;
        }
    }

    .fil0 {
        fill: none
    }

    .fil1 {
        fill: #D9DADA;
        &_reddit,
        &_bitcoin {
            fill-rule: nonzero;
        }
    }
</style>


