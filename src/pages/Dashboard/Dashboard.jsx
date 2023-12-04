import Chart from "../../components/common/Chart/Chart";
import TokenUage from "../../components/TokenUsage/TokenUsage";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  return (
    <div className="px-5 overflow-hidden">
      {/* overview */}
      <div className="py-10">
        <div className=" text-4xl font-medium py-6">Overview</div>
        <div className="grid grid-col-1  md:grid-col-4 gap-3 md:grid-flow-col">
          <Card title={"Lead"} count={"1"} index={"01"} />
          <Card title={"Visitors"} count={"0"} index={"02"} />
          <Card title={"Conversations"} count={"0"} index={"03"} />
          <Card title={"Messages"} count={"0"} index={"04"} />
        </div>
      </div>

      {/* graph */}

      <div className=" py-5 border-2 px-4 rounded-md overflow-x-auto">
        <Chart />
      </div>

      {/* token Range */}

<<<<<<< HEAD
      <div className="w-full">
        <TokenUage progress={70} totalTokens={"100K"} />
=======
      <div>
        <TokenUage progress={70} totalTokens = {1000}/>
>>>>>>> 8979ed94fe0f18f48fc55ab674b4b23f2ee99541
      </div>
    </div>
  );
};

export default Dashboard;
