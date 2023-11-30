import Chart from "../../components/common/Chart/Chart";
import SelectBox from "../../components/common/SelectBox/SelectBox";
import TokenUage from "../../components/TokenUsage/TokenUsage";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  return (
    <div>
      {/* overview */}

      <div className=" text-4xl">Overview</div>
      <div>
        <Card />
      </div>

      {/* graph */}

      <div>
        <Chart />
      </div>

      {/* token Range */}

      <div>
        <TokenUage />
      </div>
    </div>
  );
};

export default Dashboard;
