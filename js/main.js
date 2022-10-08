// Cambiar navbar en scrollY
const nav = document.getElementById("navbar");
window.addEventListener("scroll", () =>
    window.scrollY >= 50
        ? nav.classList.add("active-nav")
        : nav.classList.remove("active-nav")
);
// Form inputs
document.querySelectorAll( ".input__text" )
.forEach( element => {
    element.addEventListener( "blur", event => {
        ( event.target.value != "" )
        ? event.target.nextElementSibling.classList.add("filled")
        : event.target.nextElementSibling.classList.remove("filled")
    });
});