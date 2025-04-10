const quotes = [
    { text: "The only way out is through.", id: "quote1" },
    { text: "Do not fear mistakes. There are none.", id: "quote2" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", id: "quote3" }
  ];
  
  let current = 0;
  
  function showQuote(index) {
    document.getElementById('quote-text').innerText = quotes[index].text;
    loadDisqus(quotes[index].id);
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
  