
document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".gallery-image");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        const selectedImage = images[currentIndex];

        lightboxImage.src = selectedImage.dataset.full;
        lightboxImage.alt = selectedImage.alt;

        lightbox.style.display = "flex";
    }

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            showImage(index);
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    prevButton.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (event) {

        if (lightbox.style.display !== "flex") {
            return;
        }

        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }

        if (event.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        }

        if (event.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }

    });

});