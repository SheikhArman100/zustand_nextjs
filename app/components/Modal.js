"use client";

import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../Store/cartStore";

const Modal = ({ heading, message,cartId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState({
    modal: false,
    button: false,
  });
  

  const handleModal = () => {
    setIsModalOpen(true);
    setIsLoading({ ...isLoading, modal: true });
    setTimeout(() => {
      setIsLoading({ ...isLoading, modal: false });
    }, 3000);
  };

  const handleSubmit = () => {
    setIsLoading({ ...isLoading, button: true });
    setTimeout(() => {
      setIsLoading({ ...isLoading, button: false });

      //Delete
      removeFromCart(cartId)
    }, 3000);
  };

  return (
    <>
      {/* modal open button */}
      <button
        className="flex items-center  gap-x-2 mx-auto mt-1 font-medium sm:text-sm text-xs "
        onClick={handleModal}
      >
        <RiDeleteBin6Line />
        Remove
      </button>
      {/* modal blur background */}
      {isModalOpen ? (
        <div className="h-screen w-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          {/* modal */}
          <div className="h-[10rem] sm:h-[15rem] aspect-[20/9] bg-white rounded-md px-6 py-2 z-20 ">
            {/* modal text */}
            {isLoading.modal ? (
              <div className="w-full h-full flex items-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : (
              <div className="flex flex-col h-full w-full justify-between">
                <div className=" w-full text-end">
                  <button
                    className="btn btn-ghost btn-square btn-xs sm:btn-md text-base sm:text-lg "
                    onClick={() => setIsModalOpen(false)}
                  >
                    <RxCross1
                    />
                  </button>
                </div>
              
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-lg font-bold mt-3">{heading}</h3>
                    <p className="text-xs sm:text-base">{`Are you sure you want to delete "${message}"?`}</p>
                    <div className="w-full flex-1  flex items-end justify-end gap-x-2 mt-6">
                      <button
                        className="btn btn-sm sm:btn-md  text-xs sm:text-base  bg-black text-white border-2 hover:border-black hover:text-black"
                        onClick={handleSubmit}
                      >
                        {isLoading.button ? (
                          <span className="loading loading-spinner loading-md"></span>
                        ) : (
                          "Delete"
                        )}
                      </button>

                      <button
                        className="btn btn-sm sm:btn-md  text-xs sm:text-base"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
