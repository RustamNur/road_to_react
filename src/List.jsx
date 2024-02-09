import React from 'react'
import Item from './Item'



    
const arr  = [1,2,3,4,5,6,7,8,9]

const List = (props) => {
  return (
    <div>
          <ul>
              {props.list.map(item=>{
                  return (
                    <Item key={item.objectID} item={item}/>
                   )
              })}
          </ul>

          <h3>{props.title}</h3>

          <ul>
              {arr.map((elem,index)=>{
                  return (
                        <li key={index}>
                            {elem} - {index} = {elem-index}
                        </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default List