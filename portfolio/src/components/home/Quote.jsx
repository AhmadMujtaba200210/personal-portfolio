import React from 'react'
import quotes from 'open-quotes';

const Quote = () => {
  return (
    <div className='home__quote'>
        <h3 className="home__subtitle">Quote of the Day</h3>
        <p className="home__description">
        {/* {quotes.getQuotesByCategory('Programming')} */}
        {quotes.getQuotesByCategory('Programming')[3].quote}
        </p>
    </div>
  )
}

export default Quote;