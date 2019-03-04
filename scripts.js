var position = 0;
var prev = 0;
window.addEventListener('scroll', function () {
    "use strict";
    var nav = document.querySelector("div.header-container");
    if (prev < window.scrollY) {
        console.log("down");
        nav.classList += ' small';
        
    } else {
        
        nav.classList = 'header-container';
        
        console.log("up");
    }
    prev = window.scrollY;
});
