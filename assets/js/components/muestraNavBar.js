function muestraNavBar (idNavBar) {
  const d =document;
  let navBar = d.querySelector(idNavBar);
  window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
          navBar.classList.remove("hidden")
      } else {
          navBar.classList.add("hidden", "animate__slideInUp")
      }
  });
}
export default muestraNavBar;