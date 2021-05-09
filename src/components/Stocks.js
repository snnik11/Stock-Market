import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Badge } from "reactstrap";

// import Ag-grid structure stylesheet and theme
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Stocks = () => {
  const [rowData, setRowData] = useState([]); //Hooks function

  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      cellRenderer: function (params) {
        //for creating Symbol hyperlink
        let linkMyData = params.data.symbol;
        let linkedQuote = `<a href= http://localhost:3000/quote/${linkMyData} target="_blank"> ${linkMyData}</a>`;
        return linkedQuote;
      },
    },
    {
      headerName: "Name",
      field: "name",
    },

    { headerName: "Sector", field: "sector" },
  ];

  //Hooks function
  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=66b45054f09ccb85c9e78997eaa2a2da"
    )
      .then((res) => res.json())
      .then((data) =>
        data.map((company) => {
          return {
            symbol: company.symbol,
            name: company.name,
            sector: company.sector,
          };
        })
      )
      .then((companiesRow) => setRowData(companiesRow));
  }, []);

  //customizing table
  const defaultColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true,
    sortable: true,
  };

  return (
    <div className="container">
      <h2
        style={{
          fontFamily: "arial",
          padding: "21px",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 37,
        }}
      >
        NASDAQ Top 100 Companies
      </h2>

      <p
        style={{
          fontFamily: "arial",
          padding: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 26,
        }}
      >
        <Badge color="success">{rowData.length}</Badge>
        stocks are recorded
      </p>

      <div
        className="ag-theme-alpine"
        style={{
          justifyContent: "center",
          height: "571px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "19px",
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10} //shows only 10 records at a time
        />
        <br />
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
          [Data provided by Financial Modeling Prep]
        </p>
        <br />
      </div>
    </div>
  );
};

export default Stocks;
