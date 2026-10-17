document.addEventListener("DOMContentLoaded", () => {

    const loadText = document.querySelector(".loadingText");
    const background = document.querySelector(".background");

    let load = 0;
    let int = setInterval(blurring, 30);

    function blurring() {

        load++;

        if (load > 99) {
            clearInterval(int);
        }

        loadText.innerText = `${load}%`;

        loadText.style.opacity = scale(load, 0, 100, 1, 0);

        background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

    }

    const scale = (num, inMin, inMax, outMin, outMax) => {
        return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

});