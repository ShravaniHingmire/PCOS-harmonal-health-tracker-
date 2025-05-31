function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    // Display user message
    let userMessage = `<p class="user">${userInput}</p>`;
    chatBox.innerHTML += userMessage;

    // Predefined responses
    let response = getResponse(userInput);
    setTimeout(() => {
        chatBox.innerHTML += `<p class="bot">${response}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
    }, 500);

    // Clear input
    document.getElementById("user-input").value = "";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function getResponse(input) {
    const responses = {
        "hi": "Hello! How can I assist you?",
        "hello": "Hi there! What health advice do you need?",
        "what is pcos": "PCOS (Polycystic Ovary Syndrome) is a hormonal disorder affecting women’s health.",
        "symptoms of pcos": "Common symptoms include irregular periods, weight gain, acne, and excess hair growth.",
        "how to manage pcos": "You can manage PCOS with a healthy diet, regular exercise, and medical advice.",
        "bye": "Goodbye! Take care of your health."
    };

    return responses[input] || "I'm sorry, I don't understand. Please ask another question!";
}
