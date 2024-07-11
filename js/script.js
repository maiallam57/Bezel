var myNav = document.getElementById("nav");
var myLogo = document.getElementById("logo");

function onScroll() {

    if ((document.body.scrollTop>= 100)  || (document.documentElement.scrollTop >= 100)) {
        myNav.classList.add("navbar-light");
        myNav.classList.remove("navbar-dark");
        myLogo.classList.remove("logo-light");
        myLogo.classList.add("logo-dark");
    } else {
        myNav.classList.add("navbar-dark");
        myNav.classList.remove("navbar-light");
        myLogo.classList.add("logo-light");
        myLogo.classList.remove("logo-dark");
    }
}

onScroll();

window.onscroll = onScroll;
