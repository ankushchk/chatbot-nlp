const input = document.getElementById("input");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");

function appendMessage(content, className) {
  const message = document.createElement("div");
  message.textContent = content;
  message.classList.add("message", className);
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
  const message = input.value.trim();
  if (message === "") return;

  input.value = "";
  appendMessage(`You: ${message}`, "user");

  fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  })
    .then((response) => response.json())
    .then((data) => {
      appendMessage(`Bot: ${data.response}`, "bot");
    });
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

sendBtn.addEventListener("click", sendMessage);
