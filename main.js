import './styles.css';

const scrollContainer = document.querySelector('.scroll-container');
const sectionOneAnchor = document.querySelector('#sectionOneAnchor');
const sectionTwoAnchor = document.querySelector('#sectionTwoAnchor');
const sectionThreeAnchor = document.querySelector('#sectionThreeAnchor');
const sectionFourAnchor = document.querySelector('#sectionFourAnchor');
const sectionFiveAnchor = document.querySelector('#sectionFiveAnchor');
const sectionSixAnchor = document.querySelector('#sectionSixAnchor');
const sectionSevenAnchor = document.querySelector('#sectionSevenAnchor');
const sectionEightAnchor = document.querySelector('#sectionEightAnchor');

const navItems = [];

//function pushing all the navanchors into array.
function navElementsToArray(
  element1,
  element2,
  element3,
  element4,
  element5,
  element6,
  element7
) {
  navItems.push(
    element1,
    element2,
    element3,
    element4,
    element5,
    element6,
    element7
  );
}

navElementsToArray(
  sectionOneAnchor,
  sectionTwoAnchor,
  sectionThreeAnchor,
  sectionFourAnchor,
  sectionFiveAnchor,
  sectionSixAnchor,
  sectionSevenAnchor
);

//function reseting the scale of navitems to 1.0.
function resetNavScaleing(navItems) {
  navItems.forEach((element) => {
    element.style.scale = 1.0;
    element.classList.remove('scale-up-anchor');
  });
}

function scaleUpNavElement(anchor) {
  anchor.classList.add('scale-up-anchor');
}

//getting window height.
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

//eventlistener to determine which section of the page is visible and scale the corresponding navanchor.
scrollContainer.addEventListener('scroll', function () {
  const scrollY = scrollContainer.scrollTop;

  if (scrollY + height <= height * 1.5 || scrollY == 0) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionOneAnchor);
  }

  if (scrollY + height >= height * 1.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionTwoAnchor);
  }
  if (scrollY + height >= height * 2.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionThreeAnchor);
  }
  if (scrollY + height >= height * 3.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionFourAnchor);
  }
  if (scrollY + height >= height * 4.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionFiveAnchor);
  }
  if (scrollY + height >= height * 5.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionSixAnchor);
  }
  if (scrollY + height >= height * 6.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionSevenAnchor);
  }
  if (scrollY + height >= height * 7.5) {
    resetNavScaleing(navItems);
    scaleUpNavElement(sectionSevenAnchor);
  }
});
