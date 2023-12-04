import { Line } from "react-chartjs-2";
import "chart.js/auto";
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
<<<<<<< HEAD
      {/* <div className="border-2  "> */}
      <h3 className="text-2xl   font-bold">Last 7 days conversations</h3>
      <div className="flex justify-center  mt-6 w-[1280px] h-[230px] ">
        <Line
          data={data}
          width={"100%"}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      {/* </div> */}
=======

      <div className="border-2 mt-12 ">

      <h3 className="text-2xl   font-bold">Last 7 days conversations</h3>
      <div className="flex justify-center  mt-10 ">
        <Line data={data} />
      </div>

      </div>
      
>>>>>>> 8979ed94fe0f18f48fc55ab674b4b23f2ee99541
    </>
  );
};

export default Chart;
