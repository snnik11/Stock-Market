import React, { useState, useEffect } from "react";
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
//import { Line } from "react-chartjs-2";
//import Searchable from "react-searchable-dropdown";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
//import Quote from "./Quote";

const PriceHistory = () => {
  const [rowData, setRowData] = useState();

  const columns = [
    { headerName: "Date", field: "date" },
    { headerName: "Open", field: "open" },
    { headerName: "High", field: "high" },
    { headerName: "Low", field: "low" },
    { headerName: "Close", field: "close" },
  ];

  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=demo"
    )
      .then((res) => res.json())
      .then((data) => data.historical)
      .then((historical) =>
        historical.map((history) => {
          return {
            symbol: history.symbol,
            date: history.date,
            open: history.open,
            high: history.high,
            low: history.low,
            close: history.close,
          };
        })
      )
      .then((histories) => setRowData(histories));
  }, []);

  const defaultColDef = {
    sortable: true, //click on name to sort
    filter: true,
    floatingFilter: true,
    flex: 1,
  };

  return (
    <div className="container">
      <h2 style={{ padding: "20px", fontFamily: "arial" }}>Historical Data</h2>
      {/* <p>
        <Badge color="success">{rowData.length}</Badge> dates are displayed
      </p> */}

      <div
        className="ag-theme-alpine"
        style={{ height: "570px", width: "90%", fontSize: "18px" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          enableBrowserTooltips={true}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default PriceHistory;
