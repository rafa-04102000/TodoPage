import React from 'react';

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom"
import { TodoForm } from '../TodoForm';

import { TodoContext } from '../TodoContext';

import { Modal } from '../Modal';

function AppUi(
//     {
//     loading,
//     error,
//     totalTodos,
//     completedTodos,
//     searchValue,
//     setSearchValue,
//     searchedTodos,
//     completeTodo,
//     deleteTodo,
//   }
  ){

const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal

} = React.useContext(TodoContext); //nomas para usar el contexto como el consumer

return(
    <React.Fragment>
        <TodoCounter
        // total={totalTodos}
        // completed={completedTodos}
        //las quito porque me vienen del contexto
        />

        <TodoSearch 
        // serchValue={searchValue}
        // setSerchValue={setSearchValue}
        />


        {/* <TodoContext.Consumer> */}
            {/* este value es el que emviamos en el provider */}
            {/* aca viene un objeto y por lo tanto seria value.error y asi pero es mejor destructurarlo */}
            {/* {(value)=>( */}
            {/* {({error,loading,searchedTodos,completeTodo,deleteTodo})=>( */}
            {/* {()=>( */}
                <TodoList>
        
                {/* // Mostramos un mensaje en caso de que ocurra algún error */}
                {error && <p>Desespérate, hubo un error...</p>}
                {/* Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos */}
                {loading && <p>Estamos cargando, no desesperes...</p>}
        
                {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        
        
                {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />))}
        
                </TodoList>
                    
             {/* )} */}
        {/* </TodoContext.Consumer> */}

        {openModal && (
            <Modal>
                {/* <p>{searchedTodos[0]?.text}</p> */}
                {/* pregunte si existia nuestro array de todos antes de escribir nuestra propiedad text */}
                <TodoForm/>
            </Modal>
        )}

        <CreateTodoButtom
        setOpenModal={setOpenModal}
        />


    </React.Fragment>
); 
}

export {AppUi};