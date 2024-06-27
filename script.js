let slideIndex = 0;
let slider = [
    { src: 'chima.jpg', alt: 'Chima' },
    { src: 'kante.jpg', alt: 'Kante' },
    { src: 'lebron.jpg', alt: 'LeBron' },
    { src: 'ping.jpg', alt: 'Ping' }
];

showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    
    // Increment index and reset to 0 if end is reached
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  
    }  
    
    // Display the current slide
    slides[slideIndex - 1].style.display = 'block';  
    
    // Update favicon with the current slide image
    updateFavicon(slider[slideIndex - 1].src);
    
    // Change slide every 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 3000); 
}

function updateFavicon(newFaviconUrl) {
    let favicon = document.querySelector('link[rel="icon"]');
    favicon.href = newFaviconUrl;
}

