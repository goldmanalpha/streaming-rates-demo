import { RateBundle } from './types';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

interface Props {
  rates: RateBundle;
}

export default function Rates({ rates }: Props) {
  // console.log(rates.updateCount);
  return (
    <div className="rates">
      <header>rates</header>
      <h2>Updates Processed: {rates.updateCount}</h2>
    </div>
  );
}
