document.addEventListener("DOMContentLoaded", () => {

    const toggler = document.getElementById("toggler");
    const nav = document.getElementById("nav");

    toggler.addEventListener("click", () => nav.classList.toggle("active"));
    
});