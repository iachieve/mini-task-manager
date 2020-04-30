import React,{useContext} from 'react';
import Task from './Task';
import {TaskListContext}  from '../context/TaskListContext';

function TaskList() {
  const {tasks} = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? (<ul className='list'>
        {tasks.map(item => {
          return <Task key={item.id} task={item} />
        })}
      </ul>):(
        <div className="no-tasks">No Tasks</div>
      )}
      
    </div>
  )
}

export default TaskList
