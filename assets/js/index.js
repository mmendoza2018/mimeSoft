import muestraNavBar from './components/muestraNavBar.js';
import scrollButton from './components/arrowScrollTop.js';


document.addEventListener("click", (e) => {
  if(e.target.matches("[data-navegacion]")) {
    AbrirNavegacion();
  }
})


const AbrirNavegacion = () => {
  let elemento = document.querySelector(".modal_options");
  if (elemento.classList.contains("show-options")) {
    elemento.classList.remove("show-options");
    document.querySelector("body").classList.remove("overflow-y-hidden");
  } else {
    document.querySelector("body").classList.add("overflow-y-hidden");
    elemento.classList.add("show-options");
  }
};

document.addEventListener("DOMContentLoaded", ()=> {

  muestraNavBar('#barraNavegacion')
  scrollButton('#botonScroll')

})

const showShowMore = (element) => {
  let number = element.dataset.show;
  let boxShow = document.querySelectorAll(`[data-showtwo="${number}"]`);
  boxShow.forEach((element) => element.classList.add("show"))
  console.log('boxShow', boxShow)
}

const hideShowMore = (element) => {
  element.parentElement.classList.remove("show");
  console.log('hide')
}


/* efecto wave servicios */
VanillaTilt.init(document.querySelector(".cardVanillaTilt"), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".cardVanillaTilt"));

/* efecto slides */

let sliderPersonal = document.querySelector(".glide2");
let glidePersonal = new Glide(sliderPersonal, {
  type: "carousel",
  gap: 30,
  animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  animationDuration: 1000,
  autoplay: 1500,
  hoverpause: false,
  breakpoints: {
    2000: {
      perView: 10,
    },
    992: {
      perView: 6,
    },
    720: {
      perView: 3,
    },
  },
});

glidePersonal.mount();
