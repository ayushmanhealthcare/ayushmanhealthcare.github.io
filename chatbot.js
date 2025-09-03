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

  // Handle suggested question clicks
  suggestedButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove highlight from all
      suggestedButtons.forEach(b => b.classList.remove("active-question"));
      // Highlight the clicked one
      button.classList.add("active-question");

      handleUserMessage(button.dataset.question);
    });
  });

  // Handle sending user message + bot reply
  function handleUserMessage(question) {
    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = question;
    chatBody.appendChild(userMessage);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Typing indicator
    const typingEl = document.createElement("div");
    typingEl.className = "bot-message typing-indicator";
    typingEl.textContent = "💬 Typing...";
    chatBody.appendChild(typingEl);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Find reply
    const lowerQ = question.toLowerCase();
    let reply = "🤖 I'm not sure how to answer that yet.";
    for (const key in responses) {
      if (lowerQ.includes(key)) {
        reply = responses[key];
        break;
      }
    }

    // Delay bot reply
    setTimeout(() => {
      typingEl.remove();

      const botMessage = document.createElement("div");
      botMessage.className = "bot-message";
      botMessage.textContent = reply;
      chatBody.appendChild(botMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000); // 1s delay
  }

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
