document.addEventListener("DOMContentLoaded", function() {
  const taglineElement = document.querySelector(".tagline");
  if (taglineElement) {
    taglineElement.textContent = getRandomTagline();
  }
});


function getRandomTagline() {
  const taglines = [
    "Gather. Play. Conquer.",
    "Where Every Table Tells a Story.",
    "Strategy. Laughter. Legends.",
    "It's Pronounced Catan not Catan.",
    "It's Pronounced /kuh-TAHN/ not /KA-tan/",
    "Unleash Your Inner Strategist.",
    "Gather Your Friends and Conquer the Board",
    "A Great Collection of Fun and Bonding"
  ];
  
  const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
  console.log(randomTagline)
  return randomTagline;
}