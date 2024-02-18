import React, { useState } from 'react'
import './App.css'
import Deleted from './Deleted'
import ChangeContent from './ChangeContent'

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
  const [list, setList] = useState(deves)
  const [showContent, setShowContent] = useState(true);

  
  
  

  const handleDelete = id => {
    setList(list.filter(elem => elem.id !== id))
  }
  return (
    <div className='App'>
      <h2>My name is {text}</h2>
      <button onClick={()=>setText('Abu Khadija')}>Change my name</button>
      <button onClick={()=>setText('Rustam')}>Change my name</button>
      
      <hr />
     {showContent && <button onClick={()=>setShowContent(false)}>Hide Content</button>}
     {!showContent && <button onClick={()=>setShowContent(true)}>show Content</button>}
      
      <ul>
        {showContent && <div>
          {list.length === 0 && <h4>No data yet :(</h4> }{list.map(item => {
          return (
            <li key={item.id}>
              {item.title} - {item.author}
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          )
        })}
        </div>}
      </ul>
      <br />
      <hr />
      <Deleted list={list} setList={setList} />
      <ChangeContent />
      <br /><br /><br /><br /><br />
    </div>

  )
}

export default App