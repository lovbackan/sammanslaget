import './styles.css';

// const width = window.innerWidth;
// const height = window.innerHeight;

// console.log('width:' + width + 'height:' + height);

const scrollContainer = document.querySelector('.scroll-container');
const sectionOne = document.querySelector('#sectionOne');
const sectionTwo = document.querySelector('#sectionTwo');
const sectionThree = document.querySelector('#sectionThree');
const sectionFour = document.querySelector('#sectionFour');
const sectionFive = document.querySelector('#sectionFive');
const sectionSix = document.querySelector('#sectionSix');
const sectionSeven = document.querySelector('#sectionSeven');

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

// console.log(width);
console.log(height);

scrollContainer.addEventListener('scroll', function () {
  // const html = document.documentElement;

  const scrollY = scrollContainer.scrollTop;
  console.log(scrollY);

  if (scrollY + height <= height * 1.5 || scrollY == 0) {
    sectionOne.style.scale = 1.3;
  }

  if (scrollY + height >= height * 1.5) {
    sectionOne.style.scale = 1.0;
    sectionTwo.style.scale = 1.3;
  }
  if (scrollY + height >= height * 2.5) {
    sectionTwo.style.scale = 1.0;
    sectionThree.style.scale = 1.3;
  }
  if (scrollY + height >= height * 3.5) {
    sectionThree.style.scale = 1.0;
    sectionFour.style.scale = 1.3;
  }
  if (scrollY + height >= height * 4.5) {
    sectionFive.style.scale = 1.3;
  }
  if (scrollY + height >= height * 5.5) {
    sectionSix.style.scale = 1.3;
  }
  if (scrollY + height >= height * 6.5) {
    sectionSeven.style.scale = 1.3;
  }
});
