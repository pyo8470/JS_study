const quotes = [
    {
        quote: "The way to get stared is to quit talking and begin doing",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen keller"
    },
    {
        quote: "To Travle is to Live.",
        author: "Hans Christian Andersen"
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemmingway"
    },
    {
        quote: "We wander for distraction, but we travel for fulfillment.",
        author: "Hilaire Belloc"
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote+"\n";
author.innerText = "- "+todaysQuote.author;