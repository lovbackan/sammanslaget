//https://www.w3schools.com/jsref/met_element_requestfullscreen.asp
/* Get the element you want displayed in fullscreen mode (a video in this example): */

// /* When the openFullscreen() function is executed, open the video in fullscreen.
// Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */
// elem.forEach((item) => {
//   item.addEventListener("click", () => {
//     openFullscreen(item);
//   });
// });

// function openFullscreen(elem) {
//   if (elem.requestFullscreen) {
//     elem.requestFullscreen();
//   } else if (elem.webkitRequestFullscreen) {
//     /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) {
//     /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }
var elem = document.querySelectorAll(".pop-img");

elem.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("hejehej");
    item.classList.add("focus");
  });
});
