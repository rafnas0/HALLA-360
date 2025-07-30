if (navigator.getVRDisplays || navigator.xr) {
  const vrButton = document.createElement("button");
  vrButton.innerText = "Enter VR";
  vrButton.style.position = "absolute";
  vrButton.style.top = "10px";
  vrButton.style.right = "10px";
  vrButton.style.zIndex = "9999";
  document.body.appendChild(vrButton);

  vrButton.addEventListener("click", function () {
    viewer.enterVr(); // requires viewer to be defined globally
  });
}
