document.addEventListener("DOMContentLoaded", () => {

    let setectField = document.getElementById("setectField");
    let selectText = document.getElementById("selectText");
    let list = document.getElementById("list");
    let arrowIcon = document.getElementById("arrowIcon");
    let options = document.getElementsByClassName("options");

    setectField.addEventListener("click", () => {

        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");

    });

    for(option of options){

        option.onclick = function() {
            selectText.innerHTML = this.textContent;
            list.classList.toggle("hide");
            arrowIcon.classList.toggle("rotate");
        }

    }
});