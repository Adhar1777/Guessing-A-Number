
const gar = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userInput = parseInt(document.getElementById('userInput').value);

  const message = document.getElementById('message');
  if (userInput === gar) {
    message.style.color = 'green';
    message.textContent = 'Congrats! You Got It Right';
  } else if (userInput < gar) {
    message.style.color = 'red';
    message.textContent = 'Think Of something Higher!!';
  } else {
    message.style.color = 'red';
    message.textContent = 'Think of Something Lower!!';
  }
}