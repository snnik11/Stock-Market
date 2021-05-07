import React, { useState, useEffect } from "react";
import { Button, Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
//import { useParams } from "react-router-dom";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Stocks = () => {
  const [rowData, setRowData] = useState([]);
  // const { id } = useParams();

  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      cellRenderer: function (params) {
        //  let myData = id;
        let myData = params.data.symbol;
        let newLink = `<a href= http://localhost:3000/quote/${myData} target="_blank"> ${myData}</a>`;
        return newLink;
      },
    },
    {
      headerName: "Name",
      field: "name",
    },

    { headerName: "Sector", field: "sector" },
  ];

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
      .then((companies) => setRowData(companies));
  }, []);

  const defaultColDef = {
    sortable: true, //click on name to sort
    filter: true,
    floatingFilter: true,
    flex: 1,
  };

  return (
    <div className="container">
      <h2 style={{ padding: "20px", textAlign: "center", fontFamily: "arial" }}>
        NASQDAQ Top 100 Companies
      </h2>
      <p>
        <Badge color="success">{rowData.length}</Badge> stocks are recorded
      </p>
      {/* {id} */}
      <div
        className="ag-theme-alpine"
        style={{
          height: "570px",
          width: "90%",
          fontSize: "18px",
        }}
      >
        <AgGridReact
          //   rowData={data}

          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          enableBrowserTooltips={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      {/* <Button
        color="info"
        size="lg"
        className="mt-3 ml-3"
        href="http://openlibrary.org/subjects/drama.json?published_in=2000"
        target="_blank"
      >
        Link to API
      </Button> */}
    </div>
  );
};

export default Stocks;
