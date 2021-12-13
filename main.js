let mainImage = document.querySelectorAll(".view-img");

if(mainImage) {
  mainImage.forEach(function(image) {
    image.onclick = function() {

      let container = document.body;
      let imageActive = document.createElement("div");
      container.appendChild(imageActive);
      imageActive.setAttribute("class", "img-window");
      imageActive.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      imageActive.appendChild(newImg);
      newImg.setAttribute("src", "images/image-equilibrium.jpg");
    }
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
}
