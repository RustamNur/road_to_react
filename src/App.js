
import './App.css';

const welcome = {
  greeting: 'Hola!',
  title: 'React App 💟',
};
  

function App() {
    return (
    <div className="App">
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      
        
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
     
    </div>
  );
}

export default App;
