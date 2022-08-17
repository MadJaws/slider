const slides = [
  {
    img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    text: 'Caption Text 1',
  },
  {
    img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    text: 'Caption Text 2',
  },
  {
    img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    text: 'Caption Text 3',
  },
];
class Slider {
  constructor(slides, id, config) {
    this.slides = slides;
    this.id = id;
    this.config = config;
    this.render();
  }
  render() {
    let container = document.getElementById(this.id);
    for (let slide of this.slides) {
      let imgWrapper = document.createElement('div');
      imgWrapper.setAttribute('class', 'imgWrapper');
      let img = document.createElement('img');
      let text = document.createElement('span');
      text.innerText = slide.text;
      img.setAttribute('src', slide.img);
      img.setAttribute('class', 'slide');
      imgWrapper.appendChild(text);
      imgWrapper.appendChild(img);
      container.appendChild(imgWrapper);
    }
  }

  buttonBack() {
    let buttonBack = document.getElementById(back);
    onclick.back = console.log;
  }
}

new Slider(
  slides, // слайды
  'slider', // id для вставки в html
  {
    loop: true,
    navs: true,
    pags: true,
    auto: true,
    delay: 3,
  }
);
