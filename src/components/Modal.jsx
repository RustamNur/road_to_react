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

/**
 * New Portal ==> publicdagi html file'da bizda bittagina
 * id='root' joylashgan bo'lib Reactdagi hamma narsa manashu id ichiga kelib
 * tushadi . biz yangi portal ochish bilan anashu #root'dan tashqarida
 * componentimizni ajratilgan holatda devOpsda element'da ko'ra olamiz.
 * 
 * Buning uchun biz react-dom'dan ReactDOM ni import qilib olamiz va 
 * component returnida ReactDOM.createPortal ((),document.body) korinishida kod
 * yozamiz.
 * 
 * () -> return bo'ladigan kodlarimiz shu qavslar ichida joylashgan boladi.
 */