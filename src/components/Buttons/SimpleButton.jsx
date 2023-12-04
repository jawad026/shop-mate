
/* eslint-disable react/prop-types */

function SimpleButton({type, onClick, text}) {
  return (
    <div>
      <button 
      type={type}
      className="bg-white hover:bg-gray-300 text-gray-500 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
      onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default SimpleButton;
