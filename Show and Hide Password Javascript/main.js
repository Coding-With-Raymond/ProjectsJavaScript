document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("input");
    const eye = document.querySelector("#eyeIcon");

    eye.addEventListener("click", () => {

        input.type === "password" ? (input.type = "text") : (input.type = "password");
        
    });
});