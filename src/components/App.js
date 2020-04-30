import React from 'react'
import '../App.css';
import TaskList from './TaskList';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext';
import TaskForm from './TaskForm';
function App() {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
        <Header/>
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App
