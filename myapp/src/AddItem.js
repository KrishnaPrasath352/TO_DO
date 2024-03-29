import React from 'react';
import {FaPlus} from "react-icons/fa";

const AddItem=({newItem,setNewItem,handleSubmit})=>{
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <label>AddItem</label>
            <input
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            />
            <button
            type='submit'
            >
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem;