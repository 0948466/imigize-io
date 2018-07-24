/* eslint-disable */
import $ from 'jquery'
import {Video} from '../template/video/video';
import polyfillClosest from '../js/polyfill'

export default function () {
    polyfillClosest((Element.prototype))
    const continueBtn = document.querySelector('.js-continue-btn')
    let mainSection = document.querySelector('.js-main-section')
    const headerInner = document.querySelector('.header__inner')

    continueBtn.addEventListener('click', () => {
      let {top} = mainSection.getBoundingClientRect()
      $('html, body').animate({scrollTop: top + window.scrollY - headerInner.offsetHeight}, 600)
    })

    $('a').on('click', function (event) {
      if ($(this).attr('href') === '') {
        event.preventDefault()
      }
    })

    let countDownDate = new Date(Date.UTC(2018, 8, 20))

    let timeArr = ['days', 'hours', 'minutes', 'seconds']
    let elements = {}

    timeArr.forEach(item => {
      elements[item] = document.querySelectorAll(`.js-${item} span`)
    })

    let interval = setInterval(() => {
      let distance = countDownDate - Date.now()

      let timer = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)) + '',
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + '',
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + '',
        seconds: Math.floor((distance % (1000 * 60)) / 1000) + ''
      }

      for (let container in elements) {
        [].forEach.call(elements[container], (item, index, arr) => {
          item.innerHTML = timer[container][index]
          if (!timer[container][index]) {
            arr[0].innerHTML = 0
            arr[1].innerHTML = timer[container][0]
          }
        })
      }
      if (distance < 0) {
        clearInterval(interval)
      }
    }, 1000)

    let pagination = document.querySelector('.pagination-container')

    const CLASS_PAGGINATION_HOVER = ('pagination-container_hover')

    pagination.addEventListener('mouseenter', onPaginationHover)
    pagination.addEventListener('mouseleave', onPaginationHover)

    function onPaginationHover() {
      pagination.classList.toggle(CLASS_PAGGINATION_HOVER)
    }

    window.addEventListener('scroll', onWindowScroll)
    window.addEventListener('resize', onWindowResize)

    function onWindowResize() {
      onWindowScroll()
      changeVideoHeight()
    }

    function onWindowScroll() {
      addPaginationFixed()
      checkActiveSector()
      addHeaderFixed()
    }

    function checkActiveSector() {
      let navSector = [...document.querySelectorAll('[data-nav]')]

      for (let i = 0; i < navSector.length; i++) {
        let rect = navSector[i].getBoundingClientRect()

        if (rect.top < 200 && rect.bottom > 200) {
          paginationScroll(navSector[i].dataset.nav, true)
          checkVideoVisible(navSector[i].dataset.nav)
          break
        }
      }
    }

    function addPaginationFixed() {
      const topMainSection = mainSection.getBoundingClientRect().top
      const CLASS_PAGINATOR_FIXED = 'pagination-container__fixed'

      if (topMainSection < 0 && !pagination.classList.contains(CLASS_PAGINATOR_FIXED)) {
        pagination.classList.add(CLASS_PAGINATOR_FIXED)
      }

      if (topMainSection > 0 && pagination.classList.contains(CLASS_PAGINATOR_FIXED)) {
        pagination.classList.remove(CLASS_PAGINATOR_FIXED)
      }
    }

    function addHeaderFixed() {
      let mainSection = document.querySelector('.js-main-section')
      if (!mainSection) {
        return;
      }
      let header = document.querySelector('.header')
      let headerInner = document.querySelector('.header__inner')

      const headerTop = header.getBoundingClientRect().top
      const bottomMainSection = mainSection.getBoundingClientRect().bottom - 100
      const CLASS_HEADER_INNER_FIXED = ('header__inner_fixed')
      const CLASS_HEADER_INNER_CHANGE_COLOR = ('header__inner_change-color')

      if (headerTop < 0 && !headerInner.classList.contains(CLASS_HEADER_INNER_FIXED)) {
        headerInner.classList.add(CLASS_HEADER_INNER_FIXED)
      }

      if (headerTop > 0 && headerInner.classList.contains(CLASS_HEADER_INNER_FIXED)) {
        headerInner.classList.remove(CLASS_HEADER_INNER_FIXED)
      }

      if (bottomMainSection < 0 && !headerInner.classList.contains(CLASS_HEADER_INNER_CHANGE_COLOR)) {
        headerInner.classList.add(CLASS_HEADER_INNER_CHANGE_COLOR)
      }

      if (bottomMainSection > 0 && headerInner.classList.contains(CLASS_HEADER_INNER_CHANGE_COLOR)) {
        headerInner.classList.remove(CLASS_HEADER_INNER_CHANGE_COLOR)
      }
    }

    pagination.addEventListener('click', (e) => {
      let dataNav = e.target.closest('div').dataset.nav_to
      let marginTop

      if (!dataNav) {
        return
      }

      if (+dataNav === 9) {
        marginTop = 50
      }

      paginationScroll(dataNav, 0, marginTop)
    })

    function paginationScroll(dataNav, notScroll, marginTop = 0) {
      let sector = document.querySelector('[data-nav="' + dataNav + '"]')
      let div = pagination.querySelector('[data-nav_to="' + dataNav + '"]')
      let headerInner = document.querySelector('.header__inner')
      let active

      if (div && !div.classList.contains('active')) {
        active = pagination.querySelector('.active')

        if (active) {
          active.classList.remove('active')
        }
        div.classList.add('active')
      }

      if (!notScroll) {
        $('html, body').animate({
          scrollTop: sector.getBoundingClientRect().top + marginTop +
          window.scrollY - headerInner.offsetHeight
        }, 600)
      }
    }

    let pressBtnMore = document.querySelector('.press-about-us__btn-more'),
      pressWrapper = document.querySelector('.press-about-us__wrapper')
    const CLASS_WRAPPER_SHOW_ALL = 'press-about-us__wrapper_show-all'

    pressBtnMore.addEventListener('click', onPressBtnMoreClick)

    function onPressBtnMoreClick() {
      pressWrapper.classList.toggle(CLASS_WRAPPER_SHOW_ALL)
    }

    let locale = document.querySelector('html').getAttribute('lang')

    let years = document.querySelector('.road-map__years'),
      roadMap = document.querySelector('.road-map')

    const CLASS_YEAR_ACTIVE = 'road-map__years__item_active'

    years.addEventListener('click', onYearsCLick)

    function onYearsCLick(e) {
      let target = e.target

      if (target.tagName !== 'SPAN' || target.classList.contains(CLASS_YEAR_ACTIVE)) {
        return
      }

      this.querySelector('.' + CLASS_YEAR_ACTIVE).classList.remove(CLASS_YEAR_ACTIVE)
      target.classList.add(CLASS_YEAR_ACTIVE)

      roadMap.classList.remove(roadMap.classList.item(1))
      roadMap.classList.add(`road-map_${target.textContent}`)
    }

    changeVideoHeight()

    function changeVideoHeight() {
      let $videoFootContainer = $('.video-foot-container'),
        $video = $('.video-foot-container__video')

      $video.css('height', $videoFootContainer.width() / 1.77777)
    }

    let videoReplayBtn = document.querySelector('.video-replay-btn'),
      video = document.querySelector('.video-foot-container__video')

    const CLASS_REPLAY_BTN_SHOW = 'video-replay-btn_show',
      CLASS_REPLAY_BTN_MOBILE_SHOW = 'video-replay-btn_mobile-show',
      CLASS_VIDEO_HIDE = 'video-foot-container__video_hide'

    video.addEventListener('ended', videoStop)

    function videoStop() {
      video.classList.add(CLASS_VIDEO_HIDE)
      locale = document.querySelector('html').getAttribute('lang')
      if (locale === 'en') {
        videoReplayBtn.textContent = 'Replay'
      } else {
        videoReplayBtn.textContent = 'Повторить'
      }
      videoReplayBtn.classList.add(CLASS_REPLAY_BTN_SHOW)
    }

    videoReplayBtn.addEventListener('click', videoReplay)

    function videoReplay(e) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        return
      }

      if (!videoCanPlay) {
        initAudioItems(e)
        setTimeout(function () {
          videoPlay()
        }, 1000)
        return
      }
      videoPlay()
    }

    function videoPlay() {
      videoCounter = 1
      video.currentTime = 0
      video.classList.remove(CLASS_VIDEO_HIDE)
      videoReplayBtn.classList.remove(CLASS_REPLAY_BTN_MOBILE_SHOW)
      videoReplayBtn.classList.remove(CLASS_REPLAY_BTN_SHOW)
      video.play()
    }

    let videoCounter = 0
    let videoCanPlay = 0

    canPlay(video, onVideoCanPlay)

    function canPlay(video, callback) {
      let i = 0
      let volume = video.volume
      let onCanPlay = function () {
        video.removeEventListener('canplaythrough', onCanPlay)
        callback(null)
      }

      // firefox canplay events fix
      video.volume = 0
      video.play()
      video.pause()
      video.currentTime = 0
      video.volume = volume

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        onCanPlay()
      } else if ('oncanplaythrough' in video) {
        return video.addEventListener('canplaythrough', onCanPlay)
      } else {
        (function waitCanPlay() {
          if (video.readyState == video.HAVE_ENOUGH_DATA) {
            return callback(null)
          } else if (++i == 15) {
            return callback('Failed download video')
          }

          setTimeout(waitCanPlay, 300)
        }())
      }
    }

    video.addEventListener('canplaythrough', onVideoCanPlay)

    if (video.readyState > 3) {
      onVideoCanPlay()
    }

    function onVideoCanPlay() {
      if (videoCanPlay) {
        return
      }

      videoCanPlay = true
      checkActiveSector()
    }

    function checkVideoVisible(nav) {
      if (!videoCanPlay) {
        return
      }

      if (!videoCounter && nav === '1') {
        videoReplay()
      }

      if (videoCounter && nav !== '1' && !video.paused) {
        videoStop()
      }
    }

    function initAudioItems(e) {
      if (videoCanPlay) {
        $('body').off('click', initAudioItems)
        return
      }
      if (e.originalEvent !== undefined) {
        videoCanPlay = true
        video.muted = true
        video.play()
          .catch(function (e) {
            console.log(e)
          })
        video.pause()
        video.muted = false
        $(video).data('init', true)
        $('body').off('click', initAudioItems)
      }
    }

    $('body').on('click', initAudioItems)
  }
