import React, { useState } from 'react'
import List from './List';


const TodoList = () => {

  const [todo,setTodo] = useState('');
  const [arr , setArr] = useState([])
  
  const handleSubmt =(event)=> {
    event.preventDefault();

    console.log(todo);

    const obj ={
      id : todo,
      showComponent : true
    }
    
    setArr(arr => [...arr , obj]);
    console.log(arr);
    setTodo('');
    
  }
  
  const deleteCard = (id)=> {
    console.log('delete');
    setArr((oldItem)=>{
      return oldItem.filter((arrElem ,index)=>{
        return index !== id;
      })
    })
  }




  const cards = arr.map((item,index)=>{
    return (
      <div className='list'>
        <List 
          key ={index}
          id ={index}
          arr = {item.id}
          comp = {item.showComponent}
          handleClick ={deleteCard}
        /> 
        
      </div>  
    )
  })


  
    return (
    <div>
       <form className='form' onSubmit={handleSubmt}>
        <label> Add Todo</label>
        <input 
          type="text" 
          name='todo'
          placeholder="Add Todo" 
          onChange={event => setTodo(event.target.value)}  
          value={todo}
        />
        <button type="submit" value="Submit" onSubmit={handleSubmt}>Submit</button>
        </form>
        
        {cards}
        
        
    </div>
  )
}

export default TodoList