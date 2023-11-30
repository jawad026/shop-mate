function CheckOutButton(props) {
  return (
    <div>
      <button className=" w-28 h-10 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded">
        {props.text}
      </button>
    </div>
  );
}

export default CheckOutButton;
