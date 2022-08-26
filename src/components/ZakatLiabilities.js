import React from "react";
const ZakatLiability = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-green-400 to-green-700 h-20 flex justify-center">
        {" "}
        <div className="flex gap-5 items-center">
          <h1 className="text-3xl font-bold text-white">Enter Assets</h1>{" "}
          <div
            className="p-2 bg-green-200 items-center rounded-full flex gap-2 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Liabilities{" "}
            <div className="flex justify-center items-center p-2 bg-green-500 rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>{" "}
          </div>
        </div>{" "}
      </div>
      {/* Main Table */}
      <div className="flex justify-center my-10">
        <div className="w-[70%] border-2 border-gray-300 shadow-md rounded-2xl">
          <div className="flex justify-between bg-gray-200 p-5 rounded-t-2xl text-2xl font-bold">
            <span>Asset Name</span>
            <span>Value</span>
            <span>Zakatable?</span>
            <span>Asset Class</span>
          </div>
          {/* Table count here */}
          <div className="bg-white my-10 p-4">
            <ul className="bg-gray-300 ">
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>list Item</li>
            </ul>
          </div>
          {/* End Table Count  */}
          {/* Total */}
          <div className="flex flex-col w-[60%] gap-4 p-3">
            <div className="grid grid-cols-2 items-center gap-5">
              <h1 className="text-xl font-bold">Total Liability:</h1>
              <div className="bg-gray-300 p-2 rounded-lg">
                <input
                  type="number"
                  placeholder="0.00"
                  className="focus:outline-none bg-transparent w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-5">
              <h1 className="text-xl font-bold">Business:</h1>
              <div className="bg-gray-300 p-2 rounded-lg">
                <input
                  type="number"
                  placeholder="0.00"
                  className="focus:outline-none bg-transparent w-full"
                />
              </div>
            </div>
            {/* End of personal */}
               <div className="grid grid-cols-2 items-center gap-5">
              <h1 className="text-xl font-bold">Personal:</h1>
              <div className="bg-gray-300 p-2 rounded-lg">
                <input
                  type="number"
                  placeholder="0.00"
                  className="focus:outline-none bg-transparent w-full"
                />
              </div>
            </div>
            {/* End Of Others */}
               <div className="grid grid-cols-2 items-center gap-5">
              <h1 className="text-xl font-bold">Others:</h1>
              <div className="bg-gray-300 p-2 rounded-lg">
                <input
                  type="number"
                  placeholder="0.00"
                  className="focus:outline-none bg-transparent w-full"
                />
              </div>
            </div>
          </div>
          {/* Total */}
          {/* Modal Here */}
          <div>
            {/* Button trigger modal */}
            {/* Modal */}
            <div
              className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5
                      className="text-xl font-medium leading-normal text-gray-800"
                      id="exampleModalLabel"
                    >
                      Add Liabilities
                    </h5>
                    <button
                      type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body relative p-4">
                    {/* Assets Body Here */}
                    <div className="flex flex-col gap-5">
                      <div className="">
                        <label htmlFor="#assetNo">Name / Description</label>
                        <div className="bg-gray-200 p-2 rounded-lg">
                          <input
                            type="number"
                            placeholder="xxxxxxxxxx"
                            className="w-full bg-transparent focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="#assetNo">Amount</label>
                        <div className="bg-gray-200 p-2 rounded-lg">
                          <input
                            type="number"
                            placeholder="xxxxxxxxxx"
                            className="w-full bg-transparent focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label htmlFor="#assetNo">Liability Class:</label>
                        <div className="bg-gray-200 p-2 rounded-lg">
                          <select className="w-full focus:outline-none bg-transparent">
                            <option>Personal</option>
                            <option>Business</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Assets Body Ends Here */}
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                      type="button"
                      className="px-6
    py-2.5
    bg-gray-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-gray-700 hover:shadow-lg
    focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-gray-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="px-6
py-2.5
bg-green-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-green-700 hover:shadow-lg
focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-green-800 active:shadow-lg
transition
duration-150
ease-in-out
ml-1"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Modal Here */}
        </div>
      </div>
    </div>
  );
};

export default ZakatLiability;
