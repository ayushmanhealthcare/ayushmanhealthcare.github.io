// Function to show images for diseases
function showImage(imagePath, element) {
    const allDiseases = document.querySelectorAll(".disease img");
    allDiseases.forEach((img) => img.remove());
  
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = "Disease Image";
    img.style.marginTop = "10px";
    img.style.maxWidth = "100%";
    element.appendChild(img);
  }
