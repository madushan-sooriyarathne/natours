

let imgItem = document.querySelectorAll(".composition__image");
let navItems = document.querySelectorAll('.navigation__item');

let popupOverlay = document.querySelector("#popup");
let popupClose = document.querySelector(".popup__close");

//script responsible to keep hovered image on top of other two images in the image composition
imgItem.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
        event.target.classList.add("composition__image-perm");
        imgItem.forEach((item) => {
            if(event.target != item) {
                item.classList.remove("composition__image-perm");
            }
        });
    });
});

//script responsible to close the nav menu once a navigation item is clicked
navItems.forEach((item) => {
    item.addEventListener("click", event => {
        document.querySelector(".navigation__button").click();
    });
});

//script responsible to close the Booking popup once user clicked on blurred area
popupOverlay.addEventListener("click", (event) =>  {
    if(event.target.classList.contains("popup")) {
        popupClose.click();
    }
});