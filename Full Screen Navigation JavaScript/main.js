document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll("li");
    const hightlight = document.querySelector(".hightlight");
    const btn = document.querySelector(".btn");

    btn.addEventListener("click", function(){

        if(this.dataset.open === "close"){

            menu.style.clipPath = "circle(100% at 50% 50%)";
            this.dataset.open = "open";

        }else{

            menu.style.clipPath = "";
            this.dataset.open = "close";
            hightlight.style = "";

        }

    });

    links.forEach((link) => {

        link.addEventListener("pointerover", function(){

            const w = this.offsetWidth, h = this.offsetHeight, t = this.offsetTop;
            hightlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px;`;

        });
    });

});