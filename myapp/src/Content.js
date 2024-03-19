
import Items from "./Items";

const Content = ({items,handleCheck,handleDelete}) =>{
    return (
        <main>
        <div>
            {(items.length)?(
            <Items
            items={items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
            ):(
                <p>LIST IS EMPTY</p>
            )
        }
        </div>
        </main>
    );   
}

export default Content;