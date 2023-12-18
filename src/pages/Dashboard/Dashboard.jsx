import Card from "../../components/common/Card/Card";
import Chart from "../../components/common/Chart/Chart";
import TokenUage from "../../components/TokenUsage/TokenUsage";

const Dashboard = () => {
  return (
    <div className="px-5 overflow-hidden">
      {/* overview */}
      <div className="py-10">
        <div className=" text-4xl font-medium py-6">Overview</div>
        <div className="grid grid-col-1  md:grid-col-4 gap-3 md:grid-flow-col">
          <Card title={"Lead"} count={"1"} index={"01"} />
          <Card title={"Visitors"} count={"0"} index={"02"} />
          <Card title={"Available Tokens"} count={"0"} index={"03"} />
        </div>
      </div>

      {/* graph */}

      <div className=" py-5 border-2 px-4 rounded-md overflow-x-auto">
        <Chart />
      </div>

      {/* token Range */}

      <div className="w-full">

        <TokenUage progress={70} totalTokens = {1000}/>
      </div>
    </div>
  );
};

export default Dashboard;
