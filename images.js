//https://www.w3schools.com/jsref/met_element_requestfullscreen.asp

//Images to fullscreen on click.

var elem = document.querySelectorAll(".pop-img");

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
