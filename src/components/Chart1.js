import React, { useState } from 'react'
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';

function Chart1() {
    const [state, setState] = useState({
        options: {
            chart: {
                id:"basic-bar"

            },
            xaxis: {
                categories:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        series: [
            {
                name: "Fees Collection",
                data: [20, 45, 15, 60, 90, 75, 85, 40, 35, 50]
            },
            {
            name: "Expenses",
            data: [25, 45, 60, 30, 40, 15, 45, 20, 60, 70],
            },
        ]
    })

    const options = {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          startAngle: -90,
          endAngle: 90,
          donut: {
            size: '65%',
          },
        },
      },
      series: [44, 55, 70, 30, 20],
      labels: ['Donation', 'Rent', 'Miscellaneous', 'Book Sale', 'Uniform Sale'],
      colors: ['#198754', '#ffc107', '#adb5bd','#0a3622', '#000'],
      legend: {
        position: 'bottom',
      },
    };
  return (
    <div>
        {/* <div style={{marginTop: "400px", marginLeft: "200px"}}>
          <Chart
            options={state.options}
            series={state.series}
          />
        </div> */}
        <div style={{paddingLeft: "auto", marginTop: "300px"}}>
          <h1 style={{justifyContent: "center", paddingLeft: "100px"}}><b>FEES COLLECTION AND EXPENSES MAY - 2023</b></h1>
          <Chart
            options={state.options}
            series={state.series}
            type='bar'
            width="500"
          />
        </div>
        <div style={{ paddingRight: "10px"}}>
          <h1 style={{justifyContent: "center", paddingLeft: "170px"}}><b>INCOME - MAY - 2023</b></h1>
      <ReactApexChart options={options} series={options.series} type="donut" height={300} />
    </div>
    {/* <div>
    <Chart
    options={state.options}
    series={state.series}
    type="line"
    width="500"
  />
    </div> */}
      </div>
  )
}

export default Chart1

