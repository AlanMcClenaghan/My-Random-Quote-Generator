/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array of quote objects
***/
const quotes = [
  {
    quote: "May the Force be with you.",
    source: "Obi Wan Kenobi",
    actor: "Sir Alec Guiness",
    citation: "Star Wars",
    year: "1977"
  },
  {
    quote: "There's no place like home.",
    source: "Dorothy Gale",
    actor: "Judy Garland",
    citation: "The Wizard of Oz",
    year: "1939"
  },
  {
    quote: "I'm the king of the world!",
    source: "Jack Dawson",
    actor: "Leonardo DiCaprio",
    citation: "Titanic",
    year: "1997"
  },
  {
    quote: "It's alive! It's alive!",
    source: "Henry Frankenstein",
    actor: "Colin Clive",
    citation: "Frankenstein",
    year: "1931"
  },
  {
    quote: "I'll be back.",
    source: "The Terminator",
    actor: "Arnold Schwarzenegger",
    citation: "The Terminator",
    year: "1984"
  },
  {
    quote: "You're gonna need a bigger boat.",
    source: "Chief Martin Brody",
    actor: "Roy Scheider",
    citation: "Jaws",
    year: "1975"
  },
  {
    quote: "Here's looking at you, kid.",
    source: "Rick Blaine",
    actor: "Humphrey Bogart",
    citation: "Casablanca",
    year: "1942"
  },
  {
    quote: "My precious.",
    source: "Gollum",
    actor: "Andy Serkis",
    citation: "The Lord of the Rings: Two Towers",
    year: "2002"
  },
  {
    quote: "There's no crying in baseball!",
    source: "Jimmy Dugan",
    actor: "Tom Hanks",
    citation: "A League of Their Own",
    year: "1992"
  },
  {
    quote: "You can't handle the truth!",
    source: "A Few Good Men",
    actor: "Jack Nicholson",
    citation: "Colonel Nathan R. Jessep",
    year: "1992"
  }
]


/***
 * `getRandomQuote` function
 * 
***/
function getRandomQuote() {
  // get random number between 0 and 9
  let x = Math.floor(Math.random() * 10);
  // returns quote at index of random number
  return quotes[x];
}

// Random background colors function
function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return rgbColor = `rgb(${red},${green},${blue})`;
}

/***
 * `printQuote` function
***/
function printQuote() {
  // create a variable to store a random quote object returned from the getRandomQuote() function
  let randomQuote = getRandomQuote();

  // use the returned quote object to build a string of HTML and quote properties
  let quoteString = 
  `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`


  // !!!dditional quote object property!!!
  // condition to check if quote has an actor and add it to quoteString
  if ( randomQuote.actor ) {
    quoteString +=
    `<span class="actor">${randomQuote.actor}</span>`;
  }

  // condition to check if quote has a citation and add it to quoteString
  if ( randomQuote.citation ) {
    quoteString +=
    `<span class="citation">${randomQuote.citation}</span>`;
  }

  // condition to check if quote has a year and add it to quoteString
  if ( randomQuote.year ) {
    quoteString +=
    `<span class="citation">${randomQuote.year}</span>`;
  }

  // Add closing p tag to quoteString
  quoteString += `</p>`

  //  code snippet with quoteString variable to update HTML 
  document.getElementById('quote-box').innerHTML = quoteString;

  // When a new quote prints to the page, the background color changes to a random color.
  document.body.style.backgroundColor = randomRGB()
}

// Initialise quote on opening
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);