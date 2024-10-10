const textElement = document.querySelector('#typing-animation');
const text = textElement.innerHTML;

let index = 0;

function typeText() {
    textElement.innerHTML = text.slice(0, index) + '<span class="cursor">|</span>';
    index++;
    if (index <= text.length) {
        setTimeout(typeText, 100); // Adjust speed here
    } else {
        document.querySelector('.cursor').style.display = 'none'; // Remove the cursor once done
    }
}

// Start the typing animation when the page loads
window.onload = function() {
    textElement.innerHTML = ''; // Clear initial content
    typeText();
};
