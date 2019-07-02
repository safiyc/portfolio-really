// sticky the horizontal navbar to the top after scroll to its div
window.onscroll = function () { fixedToTop() };

let navLinks = document.getElementById("nav_links");
// let navLinksSticky = navLinks.offsetTop;

// navbar sticks to top on scroll
function fixedToTop() {
  // if (window.pageYOffset > navLinksSticky) {
  if (window.pageYOffset > 1) {
    navLinks.classList.add("nav_links_sticky");
  } else {
    navLinks.classList.remove("nav_links_sticky");
  }
}

// multi sliders on a single page
var sliderObjects = [];
createSliderObjects();

function slideImage(obj, n) {
  var parentDiv = $(obj).parent();
  var matchedDiv;
  $.each(sliderObjects, function (i, item) {
    if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
      matchedDiv = item;
      return false;
    }
  });
  matchedDiv.slideIndex = matchedDiv.slideIndex + n;
  showDivs(matchedDiv, matchedDiv.slideIndex);
}

function createSliderObjects() {
  var sliderDivs = $('.slider');
  $.each(sliderDivs, function (i, item) {
    var obj = {};
    obj.id = $(item).attr('id');
    obj.divContent = item;
    obj.slideIndex = 1;
    obj.slideContents = $(item).find('.slide');
    showDivs(obj, 1);
    sliderObjects.push(obj);
  });
}

function showDivs(divObject, n) {
  var i;
  if (n > divObject.slideContents.length) {
    divObject.slideIndex = 1
  }
  if (n < 1) {
    divObject.slideIndex = divObject.slideContents.length
  }
  for (i = 0; i < divObject.slideContents.length; i++) {
    divObject.slideContents[i].style.display = "none";
  }
  divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
}
//end multi sliders

// get current year
let date = new Date();
document.getElementById("copyright").textContent = date.getFullYear();