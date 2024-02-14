import React from 'react'




    
const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walker',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Ali hoja',
    num_comments: 2,
    points: 5,
    objectID: 2,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Polat Almedar',
    num_comments: 2,
    points: 5,
    objectID: 3,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Tom Cruise',
    num_comments: 2,
    points: 5,
    objectID: 4,
    },
  ]

const List = (props) => {
  const {text} = props
  return (
    <div>
         <ul>
        {list.filter(item => item.title.toLowerCase().includes(text.toLowerCase())).map((elem) => {
                  return (<li key={elem.objectID}>
                    {elem.author} &nbsp;
                    {elem.title} &nbsp;
                    {elem.url} &nbsp;
                    {elem.num_comments} &nbsp;
                    {elem.points} &nbsp;
                  </li>)
              })}
          </ul>
         
    </div>
  )
}

export default List