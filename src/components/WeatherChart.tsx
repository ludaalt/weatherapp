import Chart from "react-apexcharts";

import WeatherData from "../store/weatherData";

const ApexChart = () => {
  const forecastData = {
    series: [
      {
        name: "Celsius",
        data: WeatherData.currentCity.arrData,
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Weather Forecast",
        align: "center",
      },

      xaxis: {
        type: "datetime",
        categories: WeatherData.currentCity.arrLabels,
      },

      tooltip: {
        x: {
          format: "dd HH",
        },
      },
    },
  };

  return (
    <div id="chart">
      <Chart
        options={forecastData.options}
        series={forecastData.series}
        height={450}
        width={850}
      />
    </div>
  );
};

export default ApexChart;
