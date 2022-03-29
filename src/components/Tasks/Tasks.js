
import Task from './Task'

const Tasks = ({ setTasks, tasks }) => {
  console.log(tasks)

  const taskDelete = (id) => {

    const newTask = tasks.filter((x)=>x.id!==id)

    setTasks(newTask)

 

  }


  return (
    <div>

      {tasks.map((element) => {
     
        return (
          <div  key={element.id}>
            <Task task={element} taskDelete={taskDelete} />
          </div>
        )
      })}

  

    </div>
  )
}

export default Tasks