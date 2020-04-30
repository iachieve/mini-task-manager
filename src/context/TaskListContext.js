import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
    { title: 'read the book', id: 1 },
    { title: 'wash the car', id: 2 },
    { title: 'write some code', id: 3 },
  ]);

  const [editItem,setEditItem] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuidv4() }])
  };
  const removeTask = (id) => {
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  };

  const clearList = () => {
    setTasks([]);
  };

  const editTask = (title, id) =>{
    const newTasks = tasks.map(task => (task.id === id ? {title,id}: task));
    setTasks(newTasks);
    setEditItem(null);
  }
  const findItem = id =>{
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  }

  return (<TaskListContext.Provider 
    value={{ tasks, addTask, removeTask, clearList, findItem, editTask, editItem }}>
    {props.children}
  </TaskListContext.Provider>)
};

export default TaskListContextProvider;