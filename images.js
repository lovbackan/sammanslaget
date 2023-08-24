// const images = document.querySelector('.pop-img');
// // const popimg = document.querySelector('#pop');

// images.addEventListener('click', () => {
//   console.log('click');
// });

// const backgroundImage = 'url(' + images.src + ')';
// console.log(backgroundImage);

//https://www.w3schools.com/jsref/met_element_requestfullscreen.asp
/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.querySelectorAll(".pop-img");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */
elem.forEach((item) => {
  item.addEventListener("click", () => {
    openFullscreen(item);
  });
});

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
