let imageElement = document.getElementById("image");
let originalImageWidth = 200;
document.getElementById("imageWidth").textContent = "200px";
imageElement.style.width = originalImageWidth + "px";

function increase() {
    if (originalImageWidth < 300) {
        originalImageWidth = originalImageWidth + 5;
        let width = originalImageWidth + "px";
        imageElement.style.width = width;
        document.getElementById("imageWidth").textContent = width;
        document.getElementById("warningMessage").textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Too big. Decrease the size of the Image.";
    }
}

function decrease() {
    if (originalImageWidth > 100) {
        originalImageWidth = originalImageWidth - 5;
        let width = originalImageWidth + "px";
        imageElement.style.width = width;
        document.getElementById("imageWidth").textContent = width;
        document.getElementById("warningMessage").textContent = "";
    } else {
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the siza of the Image.";
    }
}
