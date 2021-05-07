import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
//import Quote from "./Quote";

const PriceHistory = () => {
  const { handle } = useParams();

  const [rowData, setRowData] = useState([]);

  let URL_chart = `https://financialmodelingprep.com/api/v3/historical-price-full/${handle}?&apikey=66b45054f09ccb85c9e78997eaa2a2da`;

  const columns = [
    { headerName: "Date", field: "date" },
    { headerName: "Open", field: "open" },
    { headerName: "High", field: "high" },
    { headerName: "Low", field: "low" },
    { headerName: "Close", field: "close" },
  ];

  useEffect(() => {
    fetch(URL_chart)
      .then((resonse) => resonse.json())
      .then((data) => data.historical)
      .then((historical) =>
        historical.map((value) => {
          return {
            date: value.date,
            close: value.close,
          };
        })
      )
      .then((values) => setRowData(values));
  }, []);
  // console.log(rowChartData);
  let price = [];
  let date = [];
  for (var i in rowData) {
    price[i] = rowData[i].close;
    date[i] = rowData[i].date;
  }
  console.log(price);
  console.log(date);

  const defaultColDef = {
    sortable: true, //click on name to sort
    filter: true,
    floatingFilter: true,
    flex: 1,
  };

  return (
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
      <Line
        data={{
          labels: date,
          datasets: [
            {
              label: "Price of the stock",
              data: price,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
      {/* <Quote /> */}
    </div>
  );
};
export default PriceHistory;
