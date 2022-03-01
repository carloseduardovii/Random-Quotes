import React, { useState } from 'react';
import CardButton from './CardButton';
import quotes from '../quotes.json';


const QuoteBox = () => {

    const [quote, setQuote] = useState(quotes[getRandomQuote()])
 
    //const quote = quotes[0]
    //console.log(quotes)

    const changeQuote = () => {
        setQuote(quotes[getRandomQuote()])
    }

    const color = colors[Math.floor(Math.random() * 18)]
    document.body.style = `background: ${color}`

    return (
        <div className='card-quote' style={{color:color}}>
            <p className='quote'><i className="fa-solid fa-quote-left"></i> {quote.quote} <i className="fa-solid fa-quote-right"></i></p>
            <p className='autor'>{quote.author}</p>

            <div className='card-button'>
                <CardButton random={changeQuote} bg={`${color}`}/>
            </div>
        </div>
    );
};

const getRandomQuote = () => Math.floor(Math.random() * quotes.length)

const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#845EC2", "#2C73D2", "#0081CF", "#0089BA", "#008E9B", "#008F7A", "#B39CD0", "#BE36B3", "#00C9A7", "#4D8076", "#4B4453", "#C34A36", "#FF8066"]

export default QuoteBox;