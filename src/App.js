import React from 'react';
import './App.css';
import Mytodo from './components/Mytodo'; 
import Footer from './components/Footer'; 


//import Message from './components/Message';

//import User from './components/User';

{/* const Welcome =props=>{
  console.log(props);
  if(props.user == undefined) return <h1>Welcome!!!!! Guest </h1>;
  else return <h1>Welcome!!!!! {props.user} </h1>;
  
}; */}

const App=()=> {
  return (
    <div className="App  container-fluid vw-100 vh-100 ">
      <div className="d-flex justify-content-center align-items-center vh-100">
     
     
                      {/*<Welcome user="Naman" /> 
                        <Welcome user="Kirti" /> 
                        <Welcome/> 
                        <Message/> */}
               
              <Mytodo/>
              <Footer/>
      </div>    
    </div>
  );
}

export default App;
