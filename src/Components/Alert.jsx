import React, { useState } from "react";
function Alert({ Visible, setVisible, Message }) {
  return (
    <React.Fragment>
      {Visible && (
        <div className="fixed bottom-0 right-0">
          <div className="w-96 max-sm:w-72 m-5 bg-white border-2 rounded-xl shadow-2xl">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between items-center border-b-2 py-2 px-5">
                <div className="flex flex-row gap-5 items-center">
                  {Message && Message.status === "Success" ? (
                    <i className="fa-regular fa-circle-check text-green-600 text-2xl"></i>
                  ) : (
                    <i className="fa-solid fa-circle-exclamation text-red-600 text-2xl"></i>
                  )}
                  <p className="font-semibold">{Message.status}</p>
                </div>

                <i
                  className="fa-solid fa-x hover:cursor-pointer"
                  onClick={() => setVisible(false)}
                ></i>
              </div>
              <div className="p-5">
                <p className="text-start">{Message.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Alert;
