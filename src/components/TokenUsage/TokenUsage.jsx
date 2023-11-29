import React from 'react'

const TokenUsage = (props) => {
    const conditionalClassName = props.progress === 100 ? 'rounded' : 'rounded-l';
  return (
    <div className='rounded mr-10 ml-10 border border-solid border-gray-400 p-4'>
        <div className='font-semibold mb-4'>Token Usage</div>
        <div className='rounded  bg-gray-300 h-[14px]' >
            <div className= {conditionalClassName + ' border border-solid border-gray-500 p-1 h-full bg-blue-500'} 
            style={{ width: `${props.progress}%` }}
            ></div>
        </div>
        <div className='flex justify-between align-items-center px-2 pt-2 mb-4'>
            <p className='text-xs' style={{color: '#7B7B7B'}}>{props.progress}%</p>
            <p className='text-xs mr-0' style={{color: '#7B7B7B'}}>{props.totalTokens}</p>
        </div>
    </div>
  )
}

export default TokenUsage