document.addEventListener("DOMContentLoaded", () => {

    let toggler = document.getElementById("toggler");

    toggler.addEventListener("click", () => {
        toggler.checked === true ? (document.body.style.backgroundColor = "black") : (document.body.style.backgroundColor = "white");
    });
});