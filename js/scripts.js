// sticky the horizontal navbar to the top after scroll to its div
window.onscroll = function() {fixedToTop()};

let navLinks = document.getElementById("nav_links");
let navLinksSticky = navLinks.offsetTop;

function fixedToTop() {

    if (window.pageYOffset > navLinksSticky) {
        navLinks.classList.add("nav_links_sticky");
    } else {
        navLinks.classList.remove("nav_links_sticky");
    }
}

// rotate about_me img on page load to let user realize page is interactive
// function getAttention () {
//     let aboutMe = document.querySelector(".about_me_img");

//     aboutMe.setAttribute("style", "border: 2px solid black");
    
//     setTimeout(function () {
//         aboutMe.removeAttribute("style");
//     }, 500);
    
// }

// getAttention();