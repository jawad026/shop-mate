import Chart from "../../components/common/Chart/Chart";
import SelectBox from "../../components/common/SelectBox/SelectBox";
import TokenUage from "../../components/TokenUsage/TokenUsage";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  return (
    <div>
      {/* overview */}

      <div className=" text-4xl">Overview</div>
      <div className="grid grid-col-4 gap-3 grid-flow-col">

        <Card title={'Lead'} count={'1'} index={'01'} />
        <Card title={'Visitors'} count={'0'} index={'02'} />
        <Card title={'Conversations'} count={'0'} index={'03'} />
        <Card  title={'Messages'} count={'0'} index={'04'}/>
      </div>

      {/* graph */}

      <div>
        <Chart />
      </div>

      {/* token Range */}

      <div>
        <TokenUage progress={70} totalTokens = {1000}/>
      </div>
    </div>
  );
};

export default Dashboard;
