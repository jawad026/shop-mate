/* eslint-disable react/prop-types */
const Card = ({title , count , index}) => {
  return (
    <>
      <div className="border-2 relative  p-5 rounded-md border-gray-300 overflow-hidden">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <h3 className="text-xl font-medium">{count}</h3>
        </div>
        <h1 className="card-count">{index}</h1>
      </div>

   
    </>
  );
};

export default Card;
