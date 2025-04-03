// Preload images to avoid delay when switching
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

// Inject and toggle opacity of borough maps
function injectImage(borough) {
    const container = document.getElementById("maps");

    // Clear the current map
    container.innerHTML = '';

    // Create new image element for selected borough
    const img = document.createElement("img");
    img.id = borough + "Map";  // Add unique id for each map
    img.alt = borough + " Map";
    
    // Set the source based on the borough clicked
    switch (borough) {
        case 'manhattan':
            img.src = "images/MN.png";
            break;
        case 'brooklyn':
            img.src = "images/BK.png";
            break;
        case 'queens':
            img.src = "images/QN.png";
            break;
        case 'thebronx':
            img.src = "images/BX.png";
            break;
        case 'statenisland':
            img.src = "images/SI.png";
            break;
        default:
            img.src = "images/NYC.png";  // Default map
    }

    // Append the image to the container
    container.appendChild(img);

    // Set opacity of other maps to 0, and the selected map to 1 (fully visible)
    const maps = container.querySelectorAll('img');
    maps.forEach(image => {
        if (image.id !== borough + "Map") {
            image.style.opacity = 0;  // Hide other maps
        } else {
            image.style.opacity = 1;  // Show the selected map
        }
    });
}

// Initialize default map on load
window.onload = function () {
    preloadImages();
    injectImage('default');  // Show the default map when the page loads
};
