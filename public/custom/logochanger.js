var myImage = document.getElementById("logo");

var imageArray = ["/public/img/logo/1.png",
"/public/img/logo/2.png",
"/public/img/logo/3.png",
"/public/img/logo/4.png",
"/public/img/logo/5.png",
"/public/img/logo/6.png",
"/public/img/logo/7.png",
"/public/img/logo/8.png"]

var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage,300);