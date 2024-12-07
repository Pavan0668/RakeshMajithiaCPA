// Get the chatbot icon and chatbox elements
const chatIcon = document.getElementById('chatIcon');
const chatbox = document.getElementById('chatbox');
const floatbox = document.getElementById('floatingMessage');
// Toggle the visibility of the chatbox when the icon is clicked
chatIcon.addEventListener('click', () => {
    chatbox.classList.toggle('show');
    
});

// Close the chatbox if clicked outside
window.addEventListener('click', function (event) {
    if (!chatbox.contains(event.target) && !chatIcon.contains(event.target)) {
        chatbox.classList.remove('show');
        floatbox.classList.remove('show');

    }
});

