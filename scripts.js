function preloadImages() {
    const imageSources = [
        "images/MN.png",
        "images/BK.png",
        "images/QN.png",
        "images/BX.png",
        "images/SI.png",
        "images/NYC.png"
    ];

    const preloadedImages = {};
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
        preloadedImages[src] = img;  // Map the source URL to the image element
    });

    return preloadedImages;
}


function injectImage(borough) {
    const img = document.createElement("img");


    switch (borough) {
        case 'manhattan':
            img.src = "images/MN.png";
            img.alt = "Manhattan Map";
            break;
        case 'brooklyn':
            img.src = "images/BK.png";
            img.alt = "Brooklyn Map";
            break;
        case 'queens':
            img.src = "images/QN.png";
            img.alt = "Queens Map";
            break;
        case 'thebronx':
            img.src = "images/BX.png";
            img.alt = "The Bronx Map";
            break;
        case 'statenisland':
            img.src = "images/SI.png";
            img.alt = "Staten Island Map";
            break;

        default:
            img.src = "images/NYC.png";
            img.alt = "NYC Map";
    }

    const container = document.getElementById("maps");
    container.innerHTML = '';
    container.appendChild(img);
}

window.onload = function () {
    preloadImages();
    injectImage('default');
}