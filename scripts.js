function injectImage(borough) {
    const img = document.createElement("img");


    switch (borough) {
      case 'manhattan':
        img.src = "https://i.imgur.com/GqXlU24.png"; 
        img.alt = "Manhattan Map";
        break;
      case 'brooklyn':
        img.src = "https://i.imgur.com/NvSz04m.png"; 
        img.alt = "Brooklyn Map";
        break;
      case 'queens':
        img.src = "https://i.imgur.com/yaOcOEO.png"; 
        img.alt = "Queens Map";
        break;
      case 'thebronx':
        img.src = "https://i.imgur.com/3Ke2OxT.png"; 
        img.alt = "The Bronx Map";
        break;
      case 'statenisland':
        img.src = "https://i.imgur.com/4G10gxH.png"; 
        img.alt = "Staten Island Map";
        break;
      default:

        img.src = "https://i.imgur.com/aqFYgjp.png"; 
        img.alt = "NYC Map";
    }
    
        const container = document.getElementById("maps");
    container.innerHTML = '';  
    container.appendChild(img); 
  }
  
    window.onload = function() {
    injectImage('default');
  }