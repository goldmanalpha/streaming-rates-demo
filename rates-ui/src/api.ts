import { Observable } from 'rxjs';
import { RateBundle } from './types';

const { random: rand, max } = Math;

export const getRateStream = () => {
  let updateCount = 0;
  const tickers = ['MSFT', 'GOOG', 'NFLX'];
  const values = new Map(
    tickers.map((t) => [t, Math.round(rand() * 100 * 100) / 100])
  );

  const intID1 = setInterval(() => {
    const tickerIdx = Math.floor(rand() * tickers.length);
    const ticker = tickers[tickerIdx];
    const addPennies = Math.round(rand() * 10 - 4.99) / 100;

    const current = values.get(ticker)! + addPennies;

    values.set(ticker, max(0, current));

    updateCount++;
  }, 1);

  const obs = new Observable((sub) => {
    console.log('attach');

    const intID2 = setInterval(() => {
      sub.next({
        rates: Object.fromEntries(values.entries()),
        updateCount,
      });
    }, 200);

    return () => {
      // subs.unsubscribe();
      clearInterval(intID1);
      clearInterval(intID2);
    };
  });

  return obs as Observable<RateBundle>;
};
