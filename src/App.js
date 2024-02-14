import React, {useEffect, useState} from 'react';
import './App.css';
import './List'
import List from './List';
import Search from './Search';
import Controlled from './Controlled';
import UncontrolledComponent from './Unconrolled';






function App() {
  const [text, setText] = useState(localStorage.getItem('text') || 'React');

  useEffect(() => {
    localStorage.setItem('text',text) 
  },[text])
  
  const handleSearch = (event) => {
    setText(event.target.value);
    
  };

  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(true);
    alert("You are clicked")
  }
  const handleClicked1 = () => {
    setClicked(false);
    alert("You aren't clicked")
  }

  // console.log("Appdagi text", text);
  // const searchedStories = list.filter(story=> {
  // return story.title.toLowerCase().includes(text.toLowerCase());
  // });

  return (
  <div className="App">
      <h1>My Hacker Stories</h1>
      <hr />
      <Search text={text} onSearchChange={handleSearch}/>
      <List text={text} />
      <hr />
      <Controlled />
      <UncontrolledComponent /><hr /><br /><br /><br />
      <button onClick={handleClicked}>Show me</button>
      <button onClick={handleClicked1}>Hidden</button>
      {clicked && <p>You are Clicked , bro</p>}
  </div>
  );
}



export default App;

/**
 * React will display each item now, but you can still improve your code so React handles dynamic lists
more gracefully. By assigning a --key-- attribute to each list item’s element, React can identify items if
the list changes (e.g. re-ordering). The --key-- isn’t necessary yet in our current situation, however, it’s
a best practice to use it from the start. Fortunately, our items come with an identifier:
 */

