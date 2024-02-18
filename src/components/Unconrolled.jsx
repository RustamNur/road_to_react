import React, { useRef } from 'react';

const UncontrolledComponent = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(`Input value: ${inputRef.current.value}`);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </>
  );
};

export default UncontrolledComponent;

/**
 * Uncontrolled Components — bu, React holatni boshqarmaydi. Holatni DOM o'zining xususiyati orqali boshqaradi, va React o'zgarishlarni kuzatmaydi. Nazorat qilinmagan komponentlar odatda DOM bilan to'liqroq ishlash uchun 'ref' atributidan foydalaniladi.
 * bu misolda : holatni React o'zi control qilmagandan keyin , DOM to'la nazoratni qo'lga oladi albatta 'ref' attributi orqali va , qiymat to'liq kiritilgandan keyin function chaqirilsa bir butun qiymat bo'lib console.log'dan bizga ko'rinadi(qiymatni olamiz).
 * 
 * Uncontrolled Components:
An uncontrolled component is a component where React does not manage the state. Instead, the state is managed by the DOM itself, and React does not keep track of the changes. Uncontrolled components typically use the ref attribute to interact with the DOM directly.
 */