import { useState } from "react";

const Task = ({ task, taskDelete }) => {

const [newStyle, setStyle] = useState(false)

const divClick = (e) => {

  setStyle(!newStyle)

}

  return (
    <div  >
      <div
        className={newStyle ? "bg-light   mt-3 position-relative text-decoration-line-through  " : "bg-light   mt-3 position-relative   text-decoration-none"}
        onClick={divClick}
        style={newStyle ? { cursor: "pointer", borderLeft:"10px solid purple"} :{ cursor: "pointer"}}
      >
        <h4 className="ps-2 " >{task.task}</h4>
        <p className="ps-2" >{task.date}</p>
        <div className="position-absolute top-50 end-0 translate-middle">

          <button className="btn btn-close bg-danger" onClick={() => taskDelete(task.id)}></button>
        </div>

      </div>
    </div>
  )
}

export default Task