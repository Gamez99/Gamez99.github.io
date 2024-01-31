var quotes = [
  "Now With Butter!",
  "Mayonaise",
  "I saw a saw a saw saw salsa",
  "Potato",
  "Cheese"
];

function randomquote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function updateMarquee() {
  var marquee = document.getElementById("ccfp");
  marquee.textContent = getRandomQuote();
}

window.addEventListener("load", updateMarquee);
