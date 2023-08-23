import './styles.css';

const scrollContainer = document.querySelector('.scroll-container');
const sectionOneAnchor = document.querySelector('#sectionOneAnchor');
const sectionTwoAnchor = document.querySelector('#sectionTwoAnchor');
const sectionThreeAnchor = document.querySelector('#sectionThreeAnchor');
const sectionFourAnchor = document.querySelector('#sectionFourAnchor');
const sectionFiveAnchor = document.querySelector('#sectionFiveAnchor');
const sectionSixAnchor = document.querySelector('#sectionSixAnchor');
const sectionSevenAnchor = document.querySelector('#sectionSevenAnchor');


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
  });
}

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

scrollContainer.addEventListener('scroll', function () {
  // const html = document.documentElement;

  const scrollY = scrollContainer.scrollTop;

  if (scrollY + height <= height * 1.5 || scrollY == 0) {
    resetNavScaleing(navItems);
    sectionOneAnchor.style.scale = 1.3;
  }

  if (scrollY + height >= height * 1.5) {
    resetNavScaleing(navItems);
    // sectionOneAnchor.style.scale = 1.0;
    sectionTwoAnchor.style.scale = 1.3;
  }
  if (scrollY + height >= height * 2.5) {
    resetNavScaleing(navItems);
    // sectionTwoAnchor.style.scale = 1.0;
    sectionThreeAnchor.style.scale = 1.3;
  }
  if (scrollY + height >= height * 3.5) {
    resetNavScaleing(navItems);
    // sectionThreeAnchor.style.scale = 1.0;
    sectionFourAnchor.style.scale = 1.3;
  }
  if (scrollY + height >= height * 4.5) {
    resetNavScaleing(navItems);
    sectionFiveAnchor.style.scale = 1.3;
  }
  if (scrollY + height >= height * 5.5) {
    resetNavScaleing(navItems);
    sectionSixAnchor.style.scale = 1.3;
  }
  if (scrollY + height >= height * 6.5) {
    resetNavScaleing(navItems);
    sectionSevenAnchor.style.scale = 1.3;
  }
});
