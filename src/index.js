import './styles/main.css';
import './styles/reset-css.css';
import renderImage from './renderDom';

class ImageSlider {
  constructor(imageArray) {
    this.imageArray = imageArray;
  }

  cycleForwards() {
    const removedIndex = this.imageArray.shift();
    this.imageArray.push(removedIndex);
  }

  cycleBackwards() {
    const removedIndex = this.imageArray.pop();
    this.imageArray.unshift(removedIndex);
  }
}

const catImageSlider = new ImageSlider([
  './assets/turkish-angora.jpg',
  './assets/scottish-fold.jpg',
  './assets/norwegian-forest-cat.jpg',
  './assets/maine-coon.jpg',
  './assets/bengal.jpg',
]);

console.log(catImageSlider);
renderImage(catImageSlider);
