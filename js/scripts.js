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


// serverless
(() => {
  const form = document.querySelector('form');
  const formResponse = document.getElementById('js_form_response');

  form.onsubmit = e => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        // The form submission was successful
        form.reset();
        formResponse.innerHTML = 'Thanks. I’ll be in touch shortly.';
      } else {
        // The form submission failed
        formResponse.innerHTML = 'No! An error. Please, try again later.';
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();
// end serverless