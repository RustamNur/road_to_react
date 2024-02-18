import React from "react";
import "./Modal.css";

const Modal = ({children,data}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
              {children}
              <br /><br />
              <button onClick={data}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
