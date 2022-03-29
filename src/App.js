
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

import { AddTask } from './components/AddTask/AddTask';
import { pink } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { palette } from '@mui/system';
import Box from '@mui/material/Box';




function App() {

  const [showAddTask, setShowAddTask] = useState(false);


  const [tasks, setTasks] = useState([])

  
  console.log(tasks)


  return (
    <div className="App">

      <div  className="container  d-flex flex-column justify-content-center w-50 mt-3 p-3 h-100" style={{ background:"linear-gradient(120deg, #EB0082,#F38DC3)"  }}>
       
 
        <Header setShowAddTask={setShowAddTask} showAddTask={showAddTask} />

        {showAddTask && <AddTask setTasks={setTasks} tasks={tasks}/>}

        {tasks.length>0 ? <Tasks setTasks={setTasks} tasks={tasks} /> : <div className='text-center mt-3'>No Task</div> } 
   
    
   
      </div>

    </div>
  );
}

export default App;
