import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

export const AddTask = ({ tasks, setTasks }) => {

    const [data, setData] = useState({ id: uuidv4(), task: "", date: "" })



    const changeTask = (e) => {


        e.target.name === "task" ? setData((prewState) => ({ ...prewState, task: e.target.value })) : setData((prewState) => ({ ...prewState, date: e.target.value }))

    }
    const saveTask = (e) => {

        e.preventDefault()

        data.date !== "" && data.task !== "" ? setTasks(tasks.concat(data)) :
            alert("Please enter a Task and Day&Time")

        setData({ id: uuidv4(), task: "", date: "" })
    }

    return (
        <div >
            <form  >
                <div className="mb-3">
                    <label htmlFor="task" className="form-label" >Task</label>
                    <input type="text" name="task" className="form-control" id="task" placeholder="AddTask" onChange={changeTask} value={data.task} />
                </div>

                <div className="mb-3">
                    <label htmlFor="dayTime" className="form-label">Day & Time</label>
                    <input type="datetime-local" name="date" className="form-control" id="dayTime" placeholder="Add Day & Time" onChange={changeTask} value={data.date} />
                </div>

                <div >
                    <button type="submit" className="btn btn-primary border-0 " style={{ width: "100%", backgroundColor: "#810089" }} onClick={saveTask} >Save Task</button>
                </div>
            </form>
        </div>
    )
}

