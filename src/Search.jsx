import React from 'react'

const Search = () => {
    const [text, setText] = React.useState('');
    const handleChange = (event) => {
        setText(event.target.value)
    }
  return (
    <div>
        <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={handleChange} /> 
         <h3>You typing : <small>{text}</small></h3>
    </div>
  )
}

export default Search