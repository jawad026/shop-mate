import { useEffect, useState } from "react";
import Product from "../Product/Product";
import data from "./data";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const CustomSelection = () => {
  const rowsPerPage = 5;
  const [rec, setRec] = useState([]);

  const [numberPage, setNumberPage] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const recordsPerPage = rowsPerPage;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;

    const records = data.slice(firstIndex, lastIndex);
    setRec(records);
    const nPage = Math.ceil(data.length / rowsPerPage);
    setNumberPage(nPage);

  }, [rowsPerPage, currentPage]);

  useEffect(() => {}, [rec]);


  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== numberPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center ">
        <div className=" text-[14px] flex justify-center items-center p-3">
          <nav className="">
            <ul className="flex pagination text-[25px]">
              <li className="page-item mr-5">
                <a href="#" className="page-link" onClick={() => prevPage()}>
                  <HiChevronLeft />
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link" onClick={() => nextPage()}>
                  <HiChevronRight />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 overflow-auto">
          {rec.map((d, i) => (
            <div key={i} className="">
              <Product />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelection;
