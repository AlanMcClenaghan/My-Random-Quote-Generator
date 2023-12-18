/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "May the Force be with you.",
    source: "Obi Wan Kenobi",
    citation: "Star Wars",
    year: "1977"
  },
  {
    quote: "There's no place like home.",
    source: "Dorothy Gale",
    citation: "The Wizard of Oz",
    year: "1939"
  },
  {
    quote: "I'm the king of the world!",
    source: "Jack Dawson",
    citation: "Titanic",
    year: "1997"
  },
  {
    quote: "It's alive! It's alive!",
    source: "Dr. Victor Frankenstein",
    citation: "Frankenstein",
    year: "1931"
  },
  {
    quote: "I'll be back.",
    source: "The Terminator",
    citation: "The Terminator",
    year: "1984"
  },
  {
    quote: "You're gonna need a bigger boat.",
    source: "Chief Martin Brody",
    citation: "Jaws",
    year: "1975"
  },
  {
    quote: "Here's looking at you, kid.",
    source: "Rick Blaine",
    citation: "Casablanca",
    year: "1942"
  },
  {
    quote: "My precious.",
    source: "Gollum",
    citation: "The Lord of the Rings: Two Towers",
    year: "2002"
  },
  {
    quote: "There's no crying in baseball!",
    source: "Jimmy Dugan",
    citation: "A League of Their Own",
    year: "1992"
  },
  {
    quote: "You can't handle the truth!",
    source: "A Few Good Men",
    citation: "Colonel Nathan R. Jessep",
    year: "1992"
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // get random number between 0 and 9
  let x = Math.floor((Math.random() * 10));
  // get quote at index of random number
  let quote = quotes[x];
  // Log quote
  console.log(quote);
}

getRandomQuote();

/***
 * `printQuote` function
***/
function printQuote() {
  // 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);