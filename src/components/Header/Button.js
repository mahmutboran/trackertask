
const Button = ({setShowAddTask,showAddTask}) => {

  const handleClick = ()=>{
    setShowAddTask(!showAddTask)

  }

  return (
    <div>

      <button
        className={showAddTask ? "btn btn-success" : "btn btn-warning"}
        onClick={handleClick}>

        {showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        
      </button>

 
    </div>
  );
};

export default Button;
