import React, {useState} from 'react'


function TodoForm(props) {

    const [input, setInput] = useState("");


    const handleSubmit = event =>{
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
    
        setInput("");
    };

    const handleChange = event =>{
        setInput(event.target.value);
    };

    return (
        <div className="todo__form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    className="todo__input"
                    name= "text"
                    placeholder = "Add a Todo"
                    onChange ={handleChange}
                />
                <button className="todo__button">Add todo</button>
            
            </form>
            
        </div>
    )
}


export default TodoForm
