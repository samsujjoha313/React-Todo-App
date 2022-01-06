import React,{useState} from 'react'

const Crud = () => {
    const[item,setItem] = useState();
    const[input,setInput] = useState([]);

    const InputEvent=(event)=>{
        setItem(event.target.value);

    }
    const handleEvent=(e)=>{
        e.preventDefault();
        setInput((prevInput)=>{
            return [...prevInput,item]
        })
        setItem("");
    }
    const handleClear=(event)=>{
        event.preventDefault();
        setInput("");
    }

    const handleDelete=()=>{
        setInput((index)=>{
            return input.filter=(val)=>{
                return val.id !== index;

            }
        })

    }
    return ( 
        <>
        <div className="main-content text-center mt-5 mb-5">
        <input type="text" placeholder='enter your item here' onChange={InputEvent} value={item} />
        <button onClick={handleEvent}>Add Item</button><br />
        <button onClick={handleClear}>Clear All The Data</button>

        </div>
        {input.map((element)=>{
            return(
                <p className='txt text-center fs-1' key={element.id}>{element}
                <button onClick={handleDelete} className='btn mx-3 text-info fs-1'>delete item</button>
                </p>
            )
        })}

        
        </>
    )
}

export default Crud