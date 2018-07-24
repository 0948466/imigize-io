/* eslint-disable */
import $ from 'jquery'
import './video.scss'

let ns = 'video-tmpl';

export class Video {
    constructor(option) {
        this.title = option.title || '';
        this.videoLink = option.videoLink;
        this.container = option.container;
        this.aspectRatio = option.aspectRatio;
        this.linkBackgroundUrl = option.linkBackgroundUrl;
        this.colorIconPlay = option.colorIconPlay;

        this.getTmpl();
        this.render();
        this._initLink();

        this._initVideoOpen();
        this.addEvents();
    }

    addEvents() {
        this.getLink().addEventListener('click', (e) => {
            e.preventDefault();
            this.getLink().style.display = 'none';
            this.onYouTubeIframeAPIReady();
        });
    }

    onYouTubeIframeAPIReady() {
        let height = this._getLinkHeight();

        new YT.Player(this.getEl().querySelector('.ytPlayer'),
            {
                height: height,
                width: '100%',
                videoId: this.videoLink,
                playerVars: {
                    'rel': 0
                },
                events: {
                    'onReady': this.onPlayerReady
                }
            });
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

    _initVideoOpen() {
        var tag = document.createElement('script');

        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    getTmpl() {
        if (this.tmpl) {
            return this.tmpl;
        }

        this.tmpl =
            `<div class="${ns}">
                <a class="${ns}__link" href="https://www.youtube.com/embed/${this.videoLink}?rel=0" aria-label="${this.title}">
                <h2 class="${ns}__title">${this.title}</h2>
                <div class="${ns}__icon-play"></div>
                </a>
            <div class="ytPlayer"></div>
    </div>`;

        this.getTmpl();
    }

    render() {
        let div = document.createElement('div');
        div.innerHTML = this.getTmpl();
        this.el = div.firstElementChild;

        this.container.append(this.getEl());
    }

    getEl() {
        return this.el;
    }

    getLink() {
        if (this.link) {
            return this.link;
        }

        return this.link = this.getEl().querySelector(`.${ns}__link`);
    }

    _initLink() {
        this.getLink().style.minHeight = this._getLinkHeight();

        if (this.linkBackgroundUrl) {
            this.getLink().style.backgroundImage = `url('${this.linkBackgroundUrl}')`;
        }

        if (this.colorIconPlay) {

            this.getIconPlay().style.borderColor = this.colorIconPlay;
            this.getIconPlay().style.backgroundColor = this.colorIconPlay;
        }

    }

    getIconPlay() {
        if (this.iconPlay) {
            return this.iconPlay;
        }

        return this.iconPlay = this.getEl().querySelector(`.${ns}__icon-play`);
    }

    _getLinkHeight() {
        if (this.linkHeight) {
            return this.linkHeight;
        }
        return this.linkHeight = `${$(this.container).width() * this.aspectRatio}px`;
    }
}