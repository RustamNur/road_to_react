import React from 'react';
import './App.css';
import './List'
import List from './List';
import Search from './Search';





function App() {
  const [text, setText] = React.useState('');
  
  const handleSearch = (event) => {
  setText(event.target.value);
  };

  console.log("Appdagi text", text);
  // const searchedStories = list.filter(story=> {
  // return story.title.toLowerCase().includes(text.toLowerCase());
  // });

  return (
  <div className="App">
      <h1>My Hacker Stories</h1>
      <hr />
      <Search text={text} onSearchChange={handleSearch}/>
      <List text={text} />
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

