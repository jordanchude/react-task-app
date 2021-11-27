// hook called useState and useEffect (i.e. wants something to happen when page loads)
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

// JSX, NOT HTML
function App() {
  // const name = 'Brad';
  // const x = false;

  // useState takes state and updates state with a function (i.e. 'setTasks')
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([])

  useEffect(()  => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    // dependency array (for if you want value to change)
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res =  await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    // update tasks
    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
        tasks.map((task) => 
        task.id === id ? 
        // if id  matches, change reminder or leave alone
        {...task, reminder: !task.reminder} 
        : task
      )
    )
  }

    return (
      // div name can be semantic
      // can be empty if you don't want to signify it
      // can write dynamic javascript
      <Router>
      <div className="container">
        {/* <h1>Hello From React</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {x ? 'Yes' : 'No'}</h1> */}

        {/* Passing a static prop */}
        {/* <Header title='Hello'/> */}
        
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>

        {showAddTask && <AddTask onAdd={addTask}/>}
              {/* if tasks is empty, show string */}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : (
                'No Tasks to Show'
            )}

        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/' exact render={() => (
            <>
            
            </>
          )}/>
        </Routes>

        <Footer />
      </div>
      </Router>
    );
}

export default App;
