import { useEffect, useState } from 'react';
import { getRateStream } from './api';
import './App.css';
import Rates from './rates';

function App() {
  const [rates, setRates] = useState({ rates: {}, updateCount: 0 });

  useEffect(() => {
    const rateStream = getRateStream();

    const sub = rateStream.subscribe((value) => {
      setRates(value);
    });
    return () => sub.unsubscribe();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Streaming Rates Demo</header>
      <Rates rates={rates} />
    </div>
  );
}

export default App;
