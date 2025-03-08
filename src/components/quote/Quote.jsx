import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState("");

  const geQuote=()=>{
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        let randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch(error => console.error("Error fetching quotes:", error));
  };

  return (
    <div>
      <h1>Random Quote</h1>
      {quote.text}
    </div>
  );
}

export default Quote;
