document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("button");

    let hex = document.getElementById("hexcode");

    function randomColor(){
        let letter = "0123456789ABCDFEF";
        let color = "#";

        for(let i = 0; i < 6; i++){
            color += letter[Math.floor(Math.random() * 16)];
        }

        return color;
    }

    button.addEventListener("click", () => {

        document.body.style.backgroundColor = randomColor();
        hex.innerHTML = randomColor();
    });
});