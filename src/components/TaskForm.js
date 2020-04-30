import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext';


function TaskForm() {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  }

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">

      <input type="text"
        onChange={handleChange}
        value={title}
        className="task-input"
        placeholder="Add Task"
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'edit Task': 'add item'}
        </button>
        <button
          onClick={() => clearList()}
          className="btn clear-btn">
          clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
