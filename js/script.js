document.addEventListener('DOMContentLoaded', function() {

    // Typing Animation
    const text = "Welcome to SaffCoZ";
    const typingSpeed = 200; // Speed of typing (in milliseconds)
    const deletingSpeed = 100; // Speed of deleting (in milliseconds)
    const pauseDuration = 1000; // Pause duration after completing the text

    let index = 1; // Start with the first character 'W'
    let isDeleting = false;

    function type() {
        const header = document.querySelector('.typing-animation');

        // Type the text
        if (!isDeleting) {
            if (index < text.length) {
                header.textContent = text.substring(0, index + 1); // Show up to the current index
                index++;
                setTimeout(type, typingSpeed);
            } else {
                // Pause after typing the full text
                setTimeout(() => {
                    isDeleting = true; // Start deleting
                    type(); // Call type function to start deleting
                }, pauseDuration);
            }
        } else {
            // Delete the text
            if (index > 1) { // Keep 'W' at the end
                header.textContent = text.substring(0, index--); // Show up to the current index
                setTimeout(type, deletingSpeed);
            } else {
                // Stop at 'W'
                header.textContent = "W"; // Ensure it shows only 'W'
                index = 1; // Reset index to start with 'W'
                isDeleting = false; // Reset to typing
                setTimeout(type, pauseDuration); // Pause before typing again
            }
        }
    }

    // Start the typing animation
    type();
});
