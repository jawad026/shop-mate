import { Line } from "react-chartjs-2";
import "chart.js/auto";
const Chart = () => {
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Matches Per Year",
        data: ["40k", "50k", "60k", "70k", "80k"],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 3,
        fill: false, // Disable fill under the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Dot color
        pointBorderColor: "#fff", // Dot border color
        pointBorderWidth: 2, // Dot border width
        pointRadius: 6, // Dot radius
      },
    ],
  };

  return (
    <>
      {" "}

      <div className="border-2 mt-12 ">

      <h3 className="text-2xl   font-bold">Last 7 days conversations</h3>
      <div className="flex justify-center  mt-10 ">
        <Line data={data} />
      </div>

      </div>
      
    </>
  );
};

export default Chart;
