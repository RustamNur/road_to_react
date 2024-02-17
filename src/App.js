import React, { useState } from 'react'
import './App.css'

const deves = [
  {
    title: 'React',
    author: 'Jordan Walke',
    rating: 5,
    id:1
  },
  {
    title: 'Redux',
    author: 'Dan Abramov',
    rating: 4.5,
    id:2
  },
  {
    title: 'Javascript',
    author: 'Brandon Eich',
    rating: 5.5,
    id:3
  },
  {
    title: 'Java',
    author: 'Toshmat',
    rating: 4,
    id:4
  },
  {
    title: 'Phyton',
    author: 'Eshmat',
    rating: 5.5,
    id:5
  },
]
const App = () => {
  const [text, setText] = useState('Rustam')
  const [list,setList] = useState(deves)
  
  const handleChange = () => {
    setText('Abu Khadija')
  }

  const handleDelete = id => {
    setList(list.filter(elem => elem.id !== id))
  }
  return (
    <div className='App'>
      <h2>My name is {text}</h2>
      <button onClick={handleChange}>Change my name</button>
      
      <hr />
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              {item.title} - {item.author}
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App