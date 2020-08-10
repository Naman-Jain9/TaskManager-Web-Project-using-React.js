import React ,{useState} from "react";

const User=()=>{
    const [users,setUsers]= useState([
//example of list in reactjs
    {
        id : 1,
        name : "Naman",
        email : "naman@gmail.com"
    },

    {
        id : 2,
        name : "Kirti",
        email : "naman@gmail.com"
    },

    {
        id : 3,
        name : "Diksha",
        email : "naman@gmail.com"
    }
    ]);
    return(
      <>  
        <h1>User........</h1>
        <table class="table table-striped table-dark">
    <thead>
      <tr>
        <th>ID</th>
        <th>FirstName</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user => {
                return(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
                )
            })
        }
    </tbody>
  </table>
</>
    )
}

export default User; 