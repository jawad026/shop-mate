import Sidebar from "./components/Sidebar/Sidebar";
import InputBox from "./components/common/InputBox/InputBox";
import SelectBox from "./components/common/SelectBox/SelectBox";

function App() {
const arr = ['a', 'b', 'c', 'd', 'e'];
  return (
    <>
      {/* <Sidebar /> */}
      <div>
      {/* <InputBox height='20px' width='200px' label='Type Something'/> */}
      <SelectBox options={arr}/>
      </div>
    </>
  );
}

export default App;
