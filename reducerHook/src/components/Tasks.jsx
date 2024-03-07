import { useReducer, useState } from "react";
import { DATA_TASKS } from "../data";


function taskReducer(tasks,action){
    switch(action.type){
        case"deleted":{
            const newTasks=tasks.filter((t) => {
                return t.id !==action.id;
            })
            return newTasks;
            break;
        }
        case"updated":{
            break;
        }
        case"added":{
            break;
        }
        default:{
            throw new Error("action type not found")
        }
    }
}

export default function Tasks(){

    const[tasks, dispach]=useReducer(taskReducer,DATA_TASKS);
    //dispach({type:"deleted", id:14})

    //const [tasks,setTasks]=useState(DATA_TASKS);

    function handleDelete(id){
        const newTasks=tasks.filter((t) => {
            return t.id !==id;
        })

        setTasks(newTasks);

    }
    

    function handleUpdate(id,completed){
        const newTasks=tasks.map((t)=>{
            if(t.id===id){
                return{...t,completed}
            }
            return t;
        })
        
        setTasks(newTasks);
       

    }

    function handleAdd(taskContent){
        const newTasks=[{id:crypto.randomUUID(), content:taskContent,completed:false}, ...tasks]

        setTasks(newTasks);

    }
    return(
        <>
            
            <h2>Görevler Uygulaması</h2>
            
            
            <Form onAddNewTask={handleAdd}/>
            <h2>Görev Listesi</h2>
            <ul>
                {tasks.map((t) => {
                    return <TaskItem {...t} onDelete={handleDelete} onUpdate={handleUpdate}/>
                })}
            </ul>

        </>
    )*/
}


function Form({onAddNewTask}){
    const [inpTaskContent,setInpTaskContent]=useState("");

    

    function handleChange(e){
        setInpTaskContent(e.target.value);
    }

    return(
        
            <form onSubmit={(e)=>{e.preventDefault(); onAddNewTask(inpTaskContent)}}>
                <input type="text" name="inpTaskContent" id="inpTaskContent" value={inpTaskContent} placeholder="Yeni görev ekle" onChange={handleChange}/>
                <button onChange={handleChange}>Ekle</button>

            </form>
       
    )
}

function TaskItem({content,id,completed,onDelete,onUpdate}){
    return(
        <li>
            <input type="checkbox" checked={completed} onChange={(e)=>{onUpdate(id,!completed)}}/>
            {content}
            <button onClick={(e) =>{onDelete(id)}}>sil</button>
        </li>
    )
}