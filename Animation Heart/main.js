document.addEventListener("DOMContentLoaded", () => {

    const grayHeart = document.querySelector(".grayHeart");
    const redHeart = document.querySelector(".redHeart");

    grayHeart.addEventListener("click", () => {
        redHeart.classList.add("animation");
        grayHeart.classList.add("fill-color");
    });

    redHeart.addEventListener("click", () => {
        redHeart.classList.remove("animation");
        grayHeart.classList.remove("fill-color");
    });
});