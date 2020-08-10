import React ,{useState}from "react";


const Message = () =>{

const [message,setMessage] = useState("Update your todo list");
    
//const sayHelo =(name)=>{
  //  console.log(`hy ${name}`);
   // setMessage("Thanks for updating");
//}

const update=()=>{
    setMessage("Thanks for updating");
};

return(
    <div className="msg">
        <p>{message}</p>
        <button className="btn" /*onClick={()=>sayHelo("Naman")}*/ 
                                 onClick={update}>Update Now</button>
    </div>
);
};

export default Message;