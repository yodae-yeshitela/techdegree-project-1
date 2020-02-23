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
const quotes = [];

quotes.push({
  quote: "Any sufficiently advanced technology is indistinguishable from magic.",
  source: "Arthur C. Clarke",
  citation: "Profiles of The Future",
  year: "1961"
});
quotes.push({
  quote: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
  source: "Bill Gates"
});
quotes.push({
  quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
  source: "Barack Obama"
});
quotes.push({
  quote: "Man is still the most extraordinary computer of all.",
  source: "John F. Kennedy"
});
quotes.push({
  quote: "I think computer viruses should count as life. I think it says something about human nature that the only form of life we have created so far is purely destructive. We've created life in our own image.",
  source: "Stephen Hawking"
});
quotes.push({
  quote: "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.",
  source: "Thomas Edison"
});
quotes.push({
  quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
  source: "Albert Einstein"
});
quotes.push({
  quote: "Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.",
  source: "Stewart Brand"
});
quotes.push({
  quote: "Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful, that’s what matters to me.",
  source: "Steve Jobs"
});
quotes.push({
  quote: "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",
  source: "Mark Kennedy"
});

/***
 * `getRandomQuote` function
***/
var currentQuote = Math.floor(Math.random() * 10);

function getRandomQuote(){
  let quote = quotes[currentQuote];
  let nextQuote = Math.floor(Math.random() * 10);
  while(currentQuote === nextQuote){
    nextQuote = Math.floor(Math.random() * 10);
  }
  currentQuote = nextQuote;
  return quote;
}

/***
 * `printQuote` function
***/

function printQuote(){
  let quote = getRandomQuote();
  document.getElementById("quote-box").innerHTML = quoteToHtml(quote);
}

function quoteToHtml(quote){
  var html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if(quote.citation){
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if(quote.year){
    html += `<span class="year">${quote.year}</span>`
  }
  return `${html}</p>`;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);