import React from "react";


// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow'
// };

import './TodoCounter.css';

import { TodoContext } from "../TodoContext";

function TodoCounter(
    // {total,completed}
    ){
    // const {total,completed} = props;

    const {totalTodos,completedTodos} = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter"> Has complentado {completedTodos} de {totalTodos} rafa </h2>
    );
}



// export default TodoCounter; 
// no utilizar el dafault porque del otro lado lo pueden llamar de cualquier nombre

export {TodoCounter};