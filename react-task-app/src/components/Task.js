// import icons
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        //  if task reminder is true, set class to 'reminder'
        //  otherwise, leave alone
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
                // event is  passed by default, delete specific task id
                onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
