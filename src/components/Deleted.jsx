import React, { useState } from 'react'

const Deleted = ({ list, setList }) => {
    const [showMe,setShowMe] = useState(true)
    const handleClear = id => {
    setList((prev)=>prev.filter(item=>item.id !== id))
    }
  return (
      <div>
          {showMe && <button onClick={()=>setShowMe(false)}>Hide Me</button>}
          {!showMe && <button onClick={()=>setShowMe(true)}>Show Me</button>}
          <ul>
              {showMe && <>
                {list.length === 0 && <h4>Refresh Me!...</h4>}{list.map(item => {
                  return (
                      <li key={item.id}>
                          {item.author} - {item.rating} 
                          <button onClick={()=>handleClear(item.id)}>Clear</button>
                      </li>
                  )
              })}
              </>}
          </ul>   
    </div>
  )
}

export default Deleted