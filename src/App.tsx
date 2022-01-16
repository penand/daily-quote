import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import { getRandomInt } from './helpers';
import { QuoteType } from './types';

const App = (): JSX.Element => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  useEffect(() => {
    axios.get('https://daily-quote-api.herokuapp.com/quotes')
    .then(response => {
      console.log(response.data[0])
      setQuotes(response.data)
    })
    .catch(error => console.log(error));
  }, []);

  const randomIndex = getRandomInt(quotes?.length) ?? 0;
  
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${quotes[randomIndex]?.image})` }}>
        {
          quotes.length > 0 ?
            <h1>
              { quotes[randomIndex].title }
            </h1> 
          : null
        }
      </header>
    </div>
  );
}

export default App;
