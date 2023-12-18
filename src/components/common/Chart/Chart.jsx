import { Line } from "react-chartjs-2";
import "chart.js/auto";
import InputBox from "../InputBox/InputBox";
const Chart = () => {
  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Matches Per Year",
        data: [40, 50, 60, 70, 80],
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
      <div className="flex justify-between">
        <h3 className="text-2xl   font-bold">Last 7 days usage</h3>
        <div className="flex gap-3">
          <InputBox type={'date'}/>
          <InputBox type={'date'}/>
        </div>
      </div>
      <div className="flex justify-center  mt-6 w-full h-[230px] ">
        <Line
          data={data}
          width={"100%"}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </>
  );
};

export default Chart;
