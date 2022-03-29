
import Button from './Button'

const Header = ({setShowAddTask,showAddTask}) => {
  return (
    <div className='text-center'>
        <h1>Task Tracker</h1>
        
        <Button setShowAddTask={setShowAddTask} showAddTask={showAddTask}/>
    </div>
  )
}

export default Header