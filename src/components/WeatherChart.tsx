import Chart from "react-apexcharts";

type ChartProps = {
  data: Array<number>;
  categories: Array<string>;
};

const ApexChart = ({ data, categories }: ChartProps) => {
  const forecastData = {
    series: [
      {
        name: "Celsius",
        data: data,
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

        style: {
          fontSize: "30px",
          color: "#fff",
        },
      },

      xaxis: {
        type: "datetime",
        categories: categories,
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
