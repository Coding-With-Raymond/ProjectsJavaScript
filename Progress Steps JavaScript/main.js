document.addEventListener("DOMContentLoaded", () => {

    const progress = document.getElementById("progress");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");

    let activeIndex = 1;

    nextBtn.addEventListener("click", () => {

        activeIndex++;

        if (activeIndex > circles.length) {
            activeIndex = circles.length;
        }

        updateProgress();
    });

    prevBtn.addEventListener("click", () => {

        activeIndex--;

        if (activeIndex < 1) {
            activeIndex = 1;
        }

        updateProgress();
    });

    function updateProgress() {

        circles.forEach((circle, index) => {

            if (index < activeIndex) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }

        });

        const actives = document.querySelectorAll(".acitve");

        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

        if (activeIndex === 1) {
            prevBtn.disabled = true;
        } else if (activeIndex === circles.length) {
            nextBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }

});

