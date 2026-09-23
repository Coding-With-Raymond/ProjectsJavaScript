document.addEventListener("DOMContentLoaded", () => {
    const indictor = document.querySelector(".scrolls .progress");
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener("scroll", scroll);

    function scroll(){

        const scrollTop = document.documentElement.scrollTop;
        const scrolled = (scrollTop / scrollHeight) * 100;
        indictor.style.width = `${scrolled}%`;
    }
});