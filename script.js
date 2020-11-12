// Get quotes from API
let apiQuotes = [];

const showNewQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}

async function getQuotes() {
    apiURL = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        showNewQuote();
    } catch (error) {
        console.log(error)
    }
}

// On load
getQuotes();