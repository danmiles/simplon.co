let nav = document.getElementById('main');

let logo = document.querySelector("nav > ul > li");

function showLogo()  {
    if (window.pageYOffset >= 200) {
        nav.classList.add("nav-fixed")
        nav.classList.remove("nav")
        logo.classList.add("logo-show")
    } else if (window.pageYOffset >= 50) {
        nav.classList.remove("nav-fixed")
        nav.classList.add("nav")
        logo.classList.remove("logo-show")
    } 
    
}





document.addEventListener("scroll", showLogo)