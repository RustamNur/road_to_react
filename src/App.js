
import './App.css';
import './List'
import List from './List';
import Search from './Search';

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
]
  
function App() {
  return (
  <div className="App">
      <h1>My Hacker Stories</h1>
      <Search/>
      <hr />
      <ul>
          {list.map(item => {
              return (
                <li key={item.objectID}>
                    {item.title}
                </li>
                  )
                })}
      </ul>
                  
      <ul>
          {list.map(function (item) {
          return (
            <li key={item.objectID}>
            <span style={{marginRight:'10px'}}>
            <a href={item.url}>{item.title}</a>
            </span>
            <span style={{marginRight:'10px'}}>{item.author}</span>
            <span style={{marginRight:'10px'}}>{item.num_comments}</span>
            <span style={{marginRight:'10px'}}>{item.points}</span>
            </li>
          );
          })}
      </ul>
                
      <List />
                  
                  
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

/**
 * 
 */