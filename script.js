const quotes = [
  "The only way out is through.",
  "Do not fear mistakes. There are none.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals."
];

  
  let current = 0;
  
  function showQuote(index) {
    document.getElementById('quote-text').innerText = quotes[index];
  }
  
  
  function prevQuote() {
    current = (current - 1 + quotes.length) % quotes.length;
    showQuote(current);
  }
  
  function nextQuote() {
    current = (current + 1) % quotes.length;
    showQuote(current);
  }
  
  window.onload = () => showQuote(current);
  