import { useState } from 'react';
import Box from './Component/Box';
import Input from './Component/Input';
import React from 'react';
import './App.css';



function App() {
  const [todos,setToDo]= useState([]);

  const removeToDo = (id) => {
    //  console.log(id);
    const newTodos = todos.filter(
    
        (d,index) => {
          if(index !== id){
            return true;
          }else{
               return false;
          }
        }
      
    )
    setToDo(newTodos);
  }

  const addToDoHandler =(item) => {
    //  console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          // time: new Date().toTimeString()
          time : new Date().toLocaleTimeString()
        }
      ]
    )

  }
  // console.log(todos);
  return (
    <div className="bg-black h-screen p3">
      <div className="rounded mx-automax-w-[750px] min-h-[550px] shadow-x1 bg-white">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
      
    </div>
  );
}

export default App;
