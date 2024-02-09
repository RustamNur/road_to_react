import React from 'react'


const list = [
    {
    title: 'React Learning with Jordan',
    url: 'https://reactjs.org/',
    author: 'Jordan Walker',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux Learning with Dan',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
]
    
const arr  = [1,2,3,4,5,6,7,8,9]

const List = () => {
  return (
    <div>
          <ul>
              {list.map(item=>{
                  return (
                    <li key={item.objectID}>
                        {item.title}
                    </li>
                  )
              })}
          </ul>

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