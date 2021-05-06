import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch(
      "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2021-04-01&to=2021-05-02&serietype=line&apikey=66b45054f09ccb85c9e78997eaa2a2da"
    )
      .then((resonse) => resonse.json())
      .then((data) => data.historical)
      .then((values) =>
        values.map((value) => {
          return {
            date: value.date,
            close: value.close,
          };
        })
      )
      .then((values) => setRowData(values));
  }, []);
  console.log(rowData);
  let price = [];
  let date = [];
  for (var i in rowData) {
    price[i] = rowData[i].close;
    date[i] = rowData[i].date;
  }
  console.log(price);
  console.log(date);
  return (
    <div>
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
    </div>
  );
};
export default BarChart;
