document.addEventListener("DOMContentLoaded", () => {

    const close = document.getElementById("close");
    const open = document.getElementById("open")
    const modal = document.getElementById("modal");

    open.addEventListener("click", () => modal.classList.add("showModal"));
    close.addEventListener("click", () => modal.classList.remove("showModal"));

    window.addEventListener("click", (e) => {
        e.target === modal ? modal.classList.remove("showModal") : false;
    });

});