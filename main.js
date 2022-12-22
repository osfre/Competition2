let myName = "Deliver";
let index = 1;

function writeText() {
  document.querySelector( ".span").textContent = myName.slice(0,index);
  index++;
  if (index > myName.length) {
    index = 1;
  }
}

setInterval(() => {
  writeText();
},300)


ScrollReveal().reveal(".image-one", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-twohalf", {
  origin: "right",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-two", {
  origin: "bottom",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-three", {
  origin: "right",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-four", {
  origin: "left",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-final", {
  origin: "left",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".image-five", {
  origin: "right",
  distance: "500px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal(".img1", {
  origin: "left",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".sc1", {
  origin: "left",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".sc2", {
  origin: "right",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".section .second-div-section img", {
  origin: "top",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".section .first-div-section img", {
  origin: "bottom",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".section .third-div-section img", {
  origin: "bottom",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".sc3", {
  origin: "bottom",
  distance: "300px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});


