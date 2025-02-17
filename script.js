document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-wrapper");

    images.forEach((image) => {
        image.addEventListener("mousemove", (e) => {
            const rect = image.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            image.style.transform = `scale(1.1) translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px)`;
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });
    });
});
