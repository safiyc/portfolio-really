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
