import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import { QuoteType } from './types';

const App = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    axios.get('https://daily-quote-api.herokuapp.com/quotes')
    .then(response => {console.log(response.data)
      setQuotes(response.data)
    })
    .catch(error => console.log(error));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        {
          quotes.map((quote) => (
            <p key={quote.author}>
              {quote.author}
            </p>
          ))
        }
      </header>
    </div>
  );
}

export default App;
