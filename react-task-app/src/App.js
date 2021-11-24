import Header from './components/Header'

// JSX, NOT HTML
function App() {
  // const name = 'Brad';
  // const x = false;

  return (
    // div name can be semantic
    // can be empty if you don't want to signify it
    // can write dynamic javascript
    <div className="container">
      {/* <h1>Hello From React</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {x ? 'Yes' : 'No'}</h1> */}

      
      <Header />
    </div>
  );
}

export default App;
