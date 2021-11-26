// hook called useState
import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

// JSX, NOT HTML
function App() {
  // const name = 'Brad';
  // const x = false;

  // useState takes state and updates state with a function (i.e. 'setTasks')
  const [tasks, setTasks] = useState([
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Jan 1, 2021',
        reminder: false
    },
    {
        id: 4,
        text: 'Exercise',
        day: 'Mar 10, 2020',
        reminder: true
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    // div name can be semantic
    // can be empty if you don't want to signify it
    // can write dynamic javascript
    <div className="container">
      {/* <h1>Hello From React</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {x ? 'Yes' : 'No'}</h1> */}

      {/* Passing a static prop */}
      {/* <Header title='Hello'/> */}
      
      <Header />
      {/* if tasks is empty, show string */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
