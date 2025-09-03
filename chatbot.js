document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.getElementById("chatContainer");
  const openBtn = document.getElementById("chatOpenBtn");
  const closeBtn = document.getElementById("chatCloseBtn");
  const chatBody = document.getElementById("chatBody");
  const suggestedButtons = document.querySelectorAll("#suggestedQuestions button");

  // Responses dictionary
  const responses = {
    "address": "🏥 Clinic Address: RTO Circle, Opposite to KSRTC Depo, Shivaji Nagar, Belagavi, Karnataka 590016.",
    "contact": "📞 Contact Number: +91 9986435750.",
    "treatment": "🌿 We offer Panchakarma, Abhyanga, Vamana, Virechana, Sneha Basti, Janu Basti, Greeva Basti, Kati Basti, Nasya, Swarna Prashana, Rasayana & Rejuvenation Therapy"
  };

  // Open chat
  openBtn.addEventListener("click", () => {
    chatContainer.classList.add("show");
  });

  // Close chat
  closeBtn.addEventListener("click", () => {
    chatContainer.classList.remove("show");
  });

  // Handle suggested question click
  suggestedButtons.forEach(button => {
    button.addEventListener("click", () => {
      const question = button.dataset.question;

      // User message
      const userMessage = document.createElement("div");
      userMessage.className = "user-message";
      userMessage.textContent = question;
      chatBody.appendChild(userMessage);

      // Bot response
      const botMessage = document.createElement("div");
      botMessage.className = "bot-message";

      const lowerQ = question.toLowerCase();
      let reply = "🤖 I'm not sure how to answer that yet.";

      for (const key in responses) {
        if (lowerQ.includes(key)) {
          reply = responses[key];
          break;
        }
      }

      botMessage.textContent = reply;
      chatBody.appendChild(botMessage);

      // Auto-scroll
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  });

  // Close chatbot when clicking outside
  window.addEventListener("click", function (e) {
    if (
      chatContainer.classList.contains("show") &&
      !chatContainer.contains(e.target) &&
      !openBtn.contains(e.target)
    ) {
      chatContainer.classList.remove("show");
    }
  });
});
