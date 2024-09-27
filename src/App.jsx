import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

 let createTask = (title,description) =>{
  console.log(title,description)
 }

  return (
    <>
    <div className='appDiv'>
      <TaskCreate onCreate={createTask}/>
      <h1 className='tasksHeader'>Görevler</h1>
      <TaskList/>
      </div>

    </>
    
  )
}

export default App
