import { useEffect, useState } from 'react';
import { getRateStream } from './api';
import './App.css';
import Rates from './rates';

function App() {
  const [rates, setRates] = useState({ rates: {}, updateCount: 0 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      const rateStream = getRateStream();

      const sub = rateStream.subscribe((value) => {
        setRates(value);
      });
      return () => sub.unsubscribe();
    }
  }, [started]);

  return (
    <div className="App">
      {!started && <button onClick={() => setStarted(true)}>Go</button>}
      <header className="App-header">Streaming Rates Demo</header>
      <Rates rates={rates} />
    </div>
  );
}

export default App;
