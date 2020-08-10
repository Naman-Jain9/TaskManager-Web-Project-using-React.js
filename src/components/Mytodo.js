import React , {useState} from "react";
import uuidv1 from "uuid/v1";


const Mytodo =() =>{

    const[todoText , setTodoText]=useState("");
    const [todos, setTodos] = useState([
    {
        id:1 ,
        text:"Drinking protein",
        isCompleted:false
    },
    {
        id:2 ,
        text:"Going gym",
        isCompleted:false
    },
    {
        id:3,
        text:"java project",
        isCompleted:true
    }

    ])
   
    const ChangeTodoText = e =>{
        //set todo text
        console.log(e.target.value);
        setTodoText(e.target.value);
       
    };

    const AddTodo =() =>{

        const newTodo = {
            id:uuidv1(),
            text: todoText,
            isCompleted:false
        };
        console.log(newTodo);
        setTodos([newTodo,...todos]);
        setTodoText("");
    };

  

    const completeTodo = (id) =>{

       // console.log(id);
       const updatedTodos = todos.map(todo =>{

            if(todo.id == id){
                todo.isCompleted =true;
                return todo;
            }
            return todo;
       })
      // console.log(updatedTodos);
      setTodos(updatedTodos); 
    }

   
    //to delete particular work
    const deleteTodo = id =>{
        const updatedTodos = todos.filter(todo => todo.id != id);

        setTodos(updatedTodos);
        console.log(updatedTodos);
    }

    return(
      <>
       <div className="card shadow">
         <div className="card-header">
            <div className="input-group">
               <input type="text"
                   className="form-control"
                   placeholder="Enter Your Todo"
                   value={todoText}
                   onChange={e => ChangeTodoText(e)}
               />
            <div className="input-group-append">
               <button className="btn btn-primary" onClick={AddTodo}>
                   Add
                </button> 
            </div>
          </div>   
        </div>  
         <div className="card-body">
            <ul className="list-group list-group-flush">
         {
             todos.map(todo =>{  //todo is just a name for traversing array
                 return(
                    
                <li className="list-group-item d-flex justify-content-between" key={todo.id} >
                 
                 <input type="checkbox"  checked={todo.isCompleted} onChange={()=>{
                     completeTodo(todo.id)
                 }}/>   
                    <span className={todo.isCompleted ? `completed` : null}>
                        {todo.text}
                    </span>
              
                    <i class="fa fa-trash" onClick={() => deleteTodo(todo.id)}></i>
                </li>
                   
                 );
             })
         }
            </ul>
          </div>
        </div>
     </>
    );
};

export default Mytodo;