// Toggle hamburger menu on mobile devices
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



//chat bot
// Function to toggle the chatbot visibility
function toggleChatbot() {
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotIcon = document.getElementById('chatbot-icon');

  // Toggle visibility of the chatbot container
  if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
    chatbotContainer.style.display = 'flex';
    chatbotIcon.style.display = 'none'; // Hide the chat icon when the chatbot is open
  } else {
    chatbotContainer.style.display = 'none';
    chatbotIcon.style.display = 'flex'; // Show the chat icon again when the chatbot is closed
  }
}

// Function to send a message
let chatbotMessages = document.getElementById('chatbot-messages');
let chatbotInput = document.getElementById('chatbot-input');

function sendMessage() {
  let message = chatbotInput.value.trim();

  if (message !== '') {
    // Create user message
    let userMessage = document.createElement('div');
    userMessage.classList.add('chatbot-message');
    userMessage.innerText = message;
    chatbotMessages.appendChild(userMessage);

    // Scroll to the bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate bot response after a delay
    setTimeout(function() {
      let botMessage = document.createElement('div');
      botMessage.classList.add('chatbot-message');
      botMessage.innerText = 'Bot: "I am processing your message..."'; // Simulated bot reply
      chatbotMessages.appendChild(botMessage);

      // Scroll to the bottom
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 1000); // Delay bot's response

    // Clear input field
    chatbotInput.value = '';
  }
}
