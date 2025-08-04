function openChat() {
  document.getElementById("chatContainer").style.display = "block";
  showSuggestedQuestions();
}

function closeChat() {
  document.getElementById("chatContainer").style.display = "none";
}

function showSuggestedQuestions() {
  document.getElementById("suggestedQuestions").style.display = "flex";
}

function sendSuggested(question) {
  const chatBody = document.getElementById("chatBody");

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = question;
  chatBody.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";

  if (question.includes("address")) {
    botMessage.textContent = "🏥 Clinic Address: RTO Circle, Opposite to KSRTC Depo, Shivaji Nagar, Belagavi, Karnataka 590016.";
  } else if (question.includes("contact")) {
    botMessage.textContent = "📞 Contact Number: +91 9986435750.";
  } else if (question.includes("treatment")) {
    botMessage.textContent = "🌿 We offer Panchakarma, Abhyanga, Vamana, Virechana, Sneha Basti, Janu Basti, Greeva Basti, Kati Basti, Nasya, Swarna Prashana, Rasayana & Rejuvenation Therapy";
  } else {
    botMessage.textContent = "🤖 I'm not sure how to answer that yet.";
  }

  chatBody.appendChild(botMessage);
  chatBody.scrollTop = chatBody.scrollHeight;

  showSuggestedQuestions(); // Show bubbles again
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const question = userInput.value.trim();
  if (question === "") return;

  sendSuggested(question);
  userInput.value = "";
}

// Close chatbot when clicking outside (optional UX polish)
window.addEventListener('click', function (e) {
  const chatBox = document.getElementById('chatContainer');
  const chatButton = document.querySelector('.chat-btn');

  if (
    chatBox.style.display === 'block' &&
    !chatBox.contains(e.target) &&
    !chatButton.contains(e.target)
  ) {
    closeChat();
  }
});
