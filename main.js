import './styles.css';

// const width = window.innerWidth;
// const height = window.innerHeight;

// console.log('width:' + width + 'height:' + height);

const about = document.querySelector('#abt');
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

console.log(width);
console.log(height);

window.addEventListener('scroll', function () {
  const html = document.documentElement;
  //getting the document height, reference: https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
  //   const documentHeight = Math.max(
  //     body.scrollHeight,
  //     body.offsetHeight,
  //     html.clientHeight,
  //     html.scrollHeight,
  //     html.offsetHeight
  //   );
  const scrollY = window.scrollY;
  console.log(scrollY);
  if (scrollY + height >= height + 0.5 * height) {
    about.style.scale = 2.5;
  }
});
