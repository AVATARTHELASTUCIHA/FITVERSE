const avatar = document.getElementById("avatar");
const heightSlider = document.getElementById("height");
const weightSlider = document.getElementById("weight");
const heightValue = document.getElementById("height-value");
const weightValue = document.getElementById("weight-value");

heightSlider.addEventListener("input", () => {
  const height = heightSlider.value;
  avatar.style.height = `${(height / 220) * 300}px`; // Adjust avatar height
  heightValue.textContent = height;
});

weightSlider.addEventListener("input", () => {
  const weight = weightSlider.value;
  avatar.style.width = `${(weight / 120) * 100}px`; // Adjust avatar width based on weight
  weightValue.textContent = weight;
});
