import React, { useState } from 'react'

const ChangeContent = () => {
    const [show,setShow] = useState(true)
  return (
      <div>
          {show && <h2>Hello World</h2>}
          {show && <button onClick={()=>setShow(false)}>Hide</button>}
          {!show && <button onClick={()=>setShow(true)}>Show</button>}
    </div>
  )
}

export default ChangeContent