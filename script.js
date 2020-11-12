const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuotBtn = document.getElementById('new-quote');

// Get Quote from API
async function getQuote() {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

    try {
        const response = await fetch(proxyURL + apiURL);
        const data = await response.json();
        
        authorText.innerText = data.quoteAuthor;
        quoteText.innerText = data.quoteText;

    } catch (error) {
        //getQuote();
        
    }
}

//On Load
getQuote();