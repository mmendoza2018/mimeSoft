function scrollButton(idButton) {
    const d =document;
    let boton = d.querySelector(idButton);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            boton.classList.remove("hidden")
        } else {
            boton.classList.add("hidden", "animate__slideInUp")
        }
    });
    d.addEventListener("click", (e) => {
        if (e.target.matches(idButton)) {
            window.scroll(0, 0);
        }
    })
  }
  export default scrollButton;