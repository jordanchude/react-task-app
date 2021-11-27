import React from 'react'
// import state because each component will have component-level state
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // prevent default submit behavior
    // text validationfor input
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        } 

        onAdd({text, day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" 
                placeholder='Add Task' 
                value={text}
                // set text state to whatever is input 
                onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" 
                placeholder='Add Day & Time' 
                value={day}
                onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
