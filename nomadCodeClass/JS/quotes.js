const quotes = [
    {
        qoute: "명언1",
        author: "저자1"
    },
    {
        qoute: "명언2",
        author: "저자2"
    },
    {
        qoute: "명언3",
        author: "저자3"
    },
    {
        qoute: "명언4",
        author: "저자4"
    },
    {
        qoute: "명언5",
        author: "저자5"
    },
    {
        qoute: "명언6",
        author: "저자6"
    },
    {
        qoute: "명언7",
        author: "저자7"
    },
    {
        qoute: "명언8",
        author: "저자8"
    },
    {
        qoute: "명언9",
        author: "저자9"
    },
    {
        qoute: "명언10",
        author: "저자10"
    },
]
const quote =  document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomN = Math.floor(Math.random()*quotes.length);
const todaysQuote = quotes[randomN];

quote.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;