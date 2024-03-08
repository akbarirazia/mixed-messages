const messages = [
    "Hello, how are you today?",
    "The sun is shining bright ☀️",
    "Coding is so much fun! 💻",
    "Never give up on your dreams ✨",
    "What's your favorite color?",
    "Let's go on an adventure! 🌍",
    "Stay positive and keep smiling! 😊",
    "Life's too short to worry about the little things!",
    "Believe in yourself and anything is possible! 🌟",
    "Coffee is always a good idea! ☕️"
  ];
  
  function generateRandomMessage() {
    let randomMessage = messages[Math.floor(Math.random()* messages.length)]
    return randomMessage
  }
  
  function generateMessageWithMinWords(minWords) {
  
  }
  
 
  const randomMessage = generateMessageWithMinWords(3);
  console.log(generateRandomMessage());
  