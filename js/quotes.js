const quotes = [
    {
    quote: "It is better to fail in originality than to succed in imitation",
    author: "Herman Melville",
    },
    {
    quote: "Succes is walking from failure to failure with no loss of enthusiasm",
    author: "Winston Churchill",
    }, 
    {
    quote: "All progress takes place outside the comfort zone",
    author: "Michael Jhon Bobak",
    },
    {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney",
    },
    {
    quote: "In order to succed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;