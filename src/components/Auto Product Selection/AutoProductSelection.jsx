function AutoProductSelection() {
  return (
    <>
    <div className="border rounded-lg m-10">

      <div>
        <div className="flex justify-end mt-12 mr-28 ">
          <button className=" bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500 rounded">
            SAVE CHANGES
          </button>
        </div>

        <div className="flex flex-col items-center mt-24">
          <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="4.5em"
              viewBox="0 0 576 512"
            >
              <path
                fill="#1996FC"
                fillOpacity="0.6"
                d="M96 80c0-26.5 21.5-48 48-48H432c26.5 0 48 21.5 48 48V384H96V80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48H64V416H512V288h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336z"
              ></path>
            </svg>
          </div>
          <div className="text-2xl">
            <h5>
              <b>Auto Product Selection</b>
            </h5>
          </div>
          <div className="text-sm text-gray-800">
            <p>
              There are no icons that match your current filters. Try removing
              some of them to get better results.
            </p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default AutoProductSelection;
