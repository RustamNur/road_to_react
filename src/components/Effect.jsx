import React from 'react'

const Effect = ({toggle,onToggle}) => {
    
    const [title, setTitle] = React.useState('Hello React');

    React.useEffect(() => {
        console.log('I still run only if toggle changes (and on mount).');
      }, [toggle]);
    
      const handleChange = (event) => {
        setTitle(event.target.value);
      };
    

  return (
      <div>
          <input type="text" value={title} onChange={handleChange} />
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>{title}</div>}
    </div>
  )
}

export default Effect
