// =============================
// LÓGICA DE LA GALERÍA
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("Product_Items");
    const viewer = document.getElementById("viewer");
    const viewerImg = document.getElementById("viewerImg");
    const closeBtn = document.getElementById("close");

    PRODUCT_IMAGES.forEach(file => {

        // crear contenedor miniatura
        const div = document.createElement("div");
        div.className = "val_img";

        // crear imagen
        const img = document.createElement("img");
        img.src = `/Assets/image/Products/${file}`;
        img.loading = "lazy"; // mejora rendimiento

        // abrir visorsubior 
        img.addEventListener("click", () => {
            viewerImg.src = img.src;
            viewer.classList.remove("hidden");
        });

        div.appendChild(img);
        container.appendChild(div);
    });

    // cerrar visor
    closeBtn.onclick = () => viewer.classList.add("hidden");

    viewer.onclick = (e) => {
        if (e.target === viewer) viewer.classList.add("hidden");
    };

});


