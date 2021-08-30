import { RateBundle } from './types';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

interface Props {
  rates: RateBundle;
}

export default function Rates({ rates }: Props) {
  const rowData = Object.entries(rates.rates).map(([ticker, price]) => ({
    ticker,
    price: price.toFixed(2),
  }));

  return (
    <div className="rates-component">
      <header>rates</header>
      <h2>Updates Processed: {rates.updateCount}</h2>

      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData}>
          <AgGridColumn field="ticker"></AgGridColumn>
          <AgGridColumn
            field="price"
            type="numericColumn"
            headerClass="rates-align-right"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}
