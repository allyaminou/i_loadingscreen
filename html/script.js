// JS Configuration
const PicDuration = 4000 // In MS
const MusicVolume = 0.1 // Anything more than 0.2 is usually too loud.

class LoadingScreen {

  constructor() {
    this.initImgs();
    this.initLoadingscreen();
  }

  initImgs() {
    this.container = $('[data-loadingscreen]');
    this.imgs = this.container.find('img');
    this.imgs.each((idx, slide) => $(slide).attr('data-slide', idx));
  }

  initLoadingscreen() {
    this.imagesLoaded = 0;
    this.currentIndex = 0;
    this.setNextSlide();
    this.imgs.each((idx, slide) => {
      $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
    });
  }

  loadImage() {
    this.imagesLoaded++;
    if (this.imagesLoaded >= this.imgs.length) { this.playLoadingscreen() }
  }

  playLoadingscreen() {
    this.loadingscreen = window.setInterval(() => { this.performSlide() }, PicDuration);
  }

  performSlide() {
    if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }

    this.nextSlide.removeClass('next');
    this.prevSlide = this.nextSlide;
    this.prevSlide.addClass('prev');

    this.currentIndex++;
    if (this.currentIndex >= this.imgs.length) { this.currentIndex = 0 }

    this.setNextSlide();

    this.prevSlide.addClass('fade-out');
  }

  setNextSlide() {
    this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
    this.nextSlide.addClass('next');
  }

}

$(document).ready(function() {
  var music = document.getElementById("music");
  music.volume = MusicVolume;
  new LoadingScreen;
});