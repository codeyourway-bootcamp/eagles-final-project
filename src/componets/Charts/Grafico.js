import React from "react";
import Chart from "react-apexcharts"

const data = {
    series: [4, 3, 8, 6, 2],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
        }
      },
      colors: ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF'],
      xaxis: {
        categories: ['Muito Ruim', 'Ruim', 'Bom', 'Ótimo', 'Excelente'],
      }
    }
  };
  function Grafico() {
    return <Chart options={data.options} series={data.series} type="bar" height={350} />;
  }
  
  export default Grafico;