function initClientGallery() {
    const contenedor = document.getElementById("clients-gallery");

    if (!contenedor) return;

    const basePath = "Assets/image/ClientsUs/";

    CLIENT_IMAGES.forEach(imgName => {
        const img = document.createElement("img");

        img.src = basePath + imgName;
        img.classList.add("clients-img");

        contenedor.appendChild(img);
    });
}