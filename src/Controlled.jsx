import React, { useState } from 'react'


const Controlled = () => {
    const [value, setValue] = useState('')
    
    const handleChange = e => {
        setValue(e.target.value)
        console.log(e.target.value);
    }
  return (
        <div>
            <form>
               <input type="text" value={value} onChange={handleChange} /> 
            </form>
        </div>
  )
}

export default Controlled

/**
 * Controlled Component — bu, React ning holatni saqlash va boshqarish uchun javobgar bo'lgan komponentdir. Holat komponentning STATE xususiyati orqali boshqariladi, va holatdagi o'zgarishlar React tomonidan boshqariladi. Komponent holatini o'zgarishlar uchun o'zgartiruvchini vaqtinchalik PROPS orqali olishadi.
 * 
 * Bu misol bilan tushuntirilidigan bo'lsak , kiritilgan har bir yangi qiymat 'value' attributi orqali control qilinadi va 'handleChange' function orqali holat render qilinib turiladi.
 * 
 * Controlled Components:
A controlled component is a component where React is responsible for maintaining and controlling the state. The state is managed through the component's STATE property, and any changes to the state are handled by React. The component receives its current state and a callback to modify the state as props.
 */