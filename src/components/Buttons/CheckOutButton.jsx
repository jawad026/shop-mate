// eslint-disable-next-line react/prop-types
function CheckOutButton({ text, onClick, type }) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className=" h-10 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded"
      >
        {text}
      </button>
    </div>
  );
}

export default CheckOutButton;
