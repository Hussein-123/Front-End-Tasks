var quote = [{
    quote: '"Be yourself; everyone else is already taken."',
    writter: "--Oscar Wilde"
},
{
    quote: '"I am selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can not handle me at my worst, then you sure as hell don not deserve me at my best."',
    writter: "--Marilyn Monroe"
},
{
    quote: '"So many books, so little time."',
    writter: "--Frank Zappa"
},
{
    quote: '"A room without books is like a body without a soul."',
    writter: "--Marcus Tullius Cicero"
}, {
    quote: '"You only live once, but if you do it right, once is enough."',
    writter: "--Mae West"
}, {
    quote: '"Be the change that you wish to see in the world."',
    writter: "--Mahatma Gandhi"
}, {
    quote: '"To live is the rarest thing in the world. Most people exist, that is all."',
    writter: "--Oscar Wilde"
}, {
    quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    writter: "--Mahatma Gandhi"
}, {
    quote: '"A friend is someone who knows all about you and still loves you."',
    writter: "--Elbert Hubbard"
}]
// generate Quotes
function generateQuote() {
    var randomNum = Math.floor(Math.random() * quote.length);
    document.getElementById("quote").innerHTML = quote[randomNum].quote;
    document.getElementById("writter").innerHTML = quote[randomNum].writter;
}