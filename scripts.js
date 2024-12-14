// Hamburger menu for mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Update Avatar's skin tone
document.getElementById("skin-tone").addEventListener("input", function(event) {
  document.getElementById("head").setAttribute("fill", event.target.value);
  document.getElementById("body").setAttribute("fill", event.target.value);
  document.getElementById("arms-left").setAttribute("fill", event.target.value);
  document.getElementById("arms-right").setAttribute("fill", event.target.value);
  document.getElementById("legs-left").setAttribute("fill", event.target.value);
  document.getElementById("legs-right").setAttribute("fill", event.target.value);
});

// Update Avatar's body type
document.getElementById("body-type").addEventListener("change", function(event) {
  const body = document.getElementById("body");
  if (event.target.value === "slim") {
    body.setAttribute("width", "60");
  } else if (event.target.value === "athletic") {
    body.setAttribute("width", "80");
  } else if (event.target.value === "fat") {
    body.setAttribute("width", "100");
  } else {
    body.setAttribute("width", "80");
  }
});

// Update Avatar's height
document.getElementById("height").addEventListener("input", function(event) {
  const heightValue = document.getElementById("height-value");
  const height = event.target.value;
  heightValue.textContent = `${height} cm`;
  document.getElementById("avatar").style.height = `${height * 1.5}px`;
});

// Reset Avatar to default
document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("skin-tone").value = "#f1c27d";
  document.getElementById("body-type").value = "athletic";
  document.getElementById("height").value = 175;
  document.getElementById("height-value").textContent = "175 cm";
  document.getElementById("hair-color").value = "#000000";

  document.getElementById("head").setAttribute("fill", "#f1c27d");
  document.getElementById("body").setAttribute("fill", "#ffcc99");
  document.getElementById("arms-left").setAttribute("fill", "#f1c27d");
  document.getElementById("arms-right").setAttribute("fill", "#f1c27d");
  document.getElementById("legs-left").setAttribute("fill", "#ffcc99");
  document.getElementById("legs-right").setAttribute("fill", "#ffcc99");
});
