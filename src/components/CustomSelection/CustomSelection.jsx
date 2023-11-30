import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import SelectBox from '../common/SelectBox/SelectBox'
import data from './data'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const CustomSelection = () => {
  const pages = [5, 10, 15]
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rec, setRec] = useState([]);
  const [num, setNum] = useState([]);

  const [fIndex, setFIndex] = useState();
  const [lIndex, setLIndex] = useState();
  const [numberPage, setNumberPage] = useState();

  const [currentPage, setCurrentPage] = useState(1);


  useEffect(()=> {
    const recordsPerPage = rowsPerPage;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    setFIndex(firstIndex);
    setLIndex(lastIndex)
    const records = data.slice(firstIndex, lastIndex);
    setRec(records);
    const nPage = Math.ceil(data.length / rowsPerPage);
    setNumberPage(nPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    setNum(numbers);
  },[rowsPerPage, currentPage])


  useEffect(() => {
  },[rec])

  useEffect(() => {
  }, [num]);

  function prevPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage-1);
    }
  }
  function nextPage() {
    if(currentPage !== numberPage){
      setCurrentPage(currentPage+1);
    }
  }

  return (
    <div>
        <div className='flex flex-col justify-center'>
        
          <div className= ' text-[14px] flex justify-center items-center'>
  
            <p className='font-serif text-[#000000bd]'>Rows per page</p>

            <div className=' ml-5'>
              <SelectBox onChange={(e)=> {setRowsPerPage(e.target.value)}} 
              selected={rowsPerPage} value={rowsPerPage} options={pages}/>
            </div>
            <p className=' font-serif ml-8 mr-8  text-[#000000bd]'>{fIndex}-{lIndex}</p>

        <nav >

        <ul className='flex pagination text-[20px]'>
        
        <li className='page-item'>
            <a href='#' className='page-link' onClick={() => prevPage()}>
              <FiChevronsLeft/>
            </a>
          </li>


          <li className='page-item'>
            <a href='#' className='page-link' onClick={() => prevPage()}>
              <HiChevronLeft/>
            </a>
          </li>
          <li className='page-item'>
            <a href= '#' className='page-link'
            onClick={() => nextPage()}><HiChevronRight/></a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link' onClick={() => prevPage()}>
              <FiChevronsRight/>
            </a>
          </li>
        </ul>
       </nav>     
      </div>


<div>
      {
        rec.map((d, i) => (
          <div key={i} className='flex justify-center items-center'>
          <div><Product/></div>
        </div>
        ))
      }
        </div>
    </div>
    </div>
  )



}

export default CustomSelection 