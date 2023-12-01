function SimpleButton(onClick, type, text) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className="bg-white hover:bg-gray-300 text-gray-500 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
      >
        {text}
      </button>
    </div>
  );
}

export default SimpleButton;  
