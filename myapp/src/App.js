import './App.css';
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer";
import React, { useState } from "react";
import AddItem from './AddItem';

function App() {
  const [items,setItems]=useState(
    JSON.parse(localStorage.getItem("todolist"))
  )
const [newItem,setNewItem]=useState("")
const handleCheck = (id)=>{
    const listItems=items.map((item)=>
        item.id===id ?{...item,checked:!item.checked}:item  )
    setItems(listItems)
    localStorage.setItem("todolist",JSON.stringify(listItems))
}

const handleDelete =(id)=>{
    const  listItems = items.filter(
        (item)=>item.id !== id)
    setItems(listItems)
    localStorage.setItem("todolist",JSON.stringify(listItems))
}

const addListItem=(newitem)=>{
  const id=items.length ? items[items.length -1].id + 1:1;
  console.log(newitem)
  const newItems={id,checked:false,itemname:newitem}
  const listItems=[...items,newItems]
  setItems(listItems)
  localStorage.setItem("todolist",JSON.stringify(listItems))
}

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!newItem.length) return;
  addListItem(newItem)
  setNewItem("")
}
  return (
    <div className="App">
      <Header />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer 
      itemLength ={items.length}
      />
    </div>
  );
}

export default App;
