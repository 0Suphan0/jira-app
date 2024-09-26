import { useState } from 'react'
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
    <div className='appDiv'>
      <TaskCreate/>
      <h1 className='tasksHeader'>Görevler</h1>
      <TaskList/>
      </div>

    </>
    
  )
}

export default App
