window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".text-animate-left");

    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            // Add the 'show' class if the element is in view
            element.classList.add("show");
        } else {
            // Remove the 'show' class when the element is out of view
            element.classList.remove("show");
        }
    });
});


// Function to display the animated text letter by letter
function typeText(text, containerId, callback) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear any existing content

    // Loop through each character and create a span element for it
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char; // Set the character
        span.className = 'letter'; // Optional class for additional styling
        span.style.animationDelay = `${index * 0.2}s`; // Delay each letter
        container.appendChild(span); // Add to the container
    });

    // Call the callback function after the animation completes
    setTimeout(callback, text.length * 200 + 500); // Add extra delay after last letter
}

// Function to slide out the loading screen
function slideOutLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('slide-out'); // Add the slide-out class

    // Remove the loading screen after the slide-out animation completes
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide it completely

        // Trigger the body animation
        document.body.classList.add('show');
    }, 1000); // Match the slide-out duration (1s)
}

// Hide the loading screen after the text animation completes
function hideLoadingScreen() {
    slideOutLoadingScreen();
}

// Start the text animation on page load
window.addEventListener('load', () => {
    typeText("DAVID'S   CODE   LAB", 'loading-text', hideLoadingScreen);
});
