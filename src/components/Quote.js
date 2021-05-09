import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Quote = () => {
  const { LinkQuery } = useParams(); //to link with Stocks page
  const [rowData, setRowData] = useState([]);

  let URL_Qchart = `https://financialmodelingprep.com/api/v3/historical-price-full/${LinkQuery}?&apikey=66b45054f09ccb85c9e78997eaa2a2da`;

  const columns = [
    { headerName: "Date", field: "date" },
    { headerName: "Open", field: "open" },
    { headerName: "High", field: "high" },
    { headerName: "Low", field: "low" },
    { headerName: "Close", field: "close" },
  ];

  useEffect(() => {
    fetch(URL_Qchart)
      .then((res) => res.json())
      .then((data) => data.historical)
      .then((historical) =>
        historical.map((valuedComp) => {
          return {
            date: valuedComp.date,
            open: valuedComp.open,
            high: valuedComp.high,
            low: valuedComp.low,
            close: valuedComp.close,
          };
        })
      )
      .then((valuesComp) => setRowData(valuesComp));
  }, []);

  // console.log(rowData);
  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    floatingFilter: true,
  };

  let priceComp = [];
  let dateClosed = [];
  for (var i in rowData) {
    priceComp[i] = rowData[i].close;
    dateClosed[i] = rowData[i].date;
  }
  // console.log(priceComp);
  //  console.log(dateClosed);

  dateClosed = dateClosed.reverse();
  priceComp = priceComp.reverse();

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "401px",
        width: "90%",
        fontSize: "17px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}> Historical Data of {LinkQuery}</h1>
      {/* <h3> </h3> */}
      <p
        style={{
          padding: "18px",
          fontFamily: "arial",
          fontSize: 21,
        }}
      >
        <Badge color="success">{rowData.length} </Badge> records are shown
      </p>

      {/* Table */}

      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        defaultColDef={defaultColDef}
        pagination={true}
      />
      <br />
      <h1 style={{ textAlign: "center" }}>
        {LinkQuery} stock Closing price over years
      </h1>

      {/* Line graph */}
      <Line
        data={{
          labels: dateClosed,
          datasets: [
            {
              label: "Closing Price",
              data: priceComp,
              fill: false,
              backgroundColor: "rgba(75,162,403,1)",
              borderColor: "rgba(0,0,0,1)",
              // borderColor: "rgba(255,192,203, 0.8)",
              borderWidth: 2,
              lineTension: 0.5,
            },
          ],
        }}
        height={401}
        width={603}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
      <br />
      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
        [Data provided by Financial Modeling Prep]
      </p>
      <br />
    </div>
  );
};
export default Quote;
