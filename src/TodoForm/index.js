import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue,setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };

    const onCanel = ()=>{
        setOpenModal(false);
    };
    const onSubmit = (event)=>{
        event.preventDefault(); // nos ayuda a que cuando el fomulario se emvie no vamos a recargar la pagina, para tratar de emviar los datos a una parte
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    };
    return(
        <form onSubmit={onSubmit}>
            <label>
               Escribe tu nuevo TODO
            </label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="cortar la cebolla para el almuerzo"
            />

            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                onClick={onCanel}
                className="TodoForm-button TodoForm-button--cancel"
                >
                    cancelar
                </button>

                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>

        </form>
    );
}

export {TodoForm};