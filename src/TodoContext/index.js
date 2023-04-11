import React from 'react';
import { useLocalStorage } from './useLocalStorage';
// esto es un objeto const {provider, consumer} = React.createContext();
const TodoContext = React.createContext();

//estos son atajos para TodoContext.provider y consumer
function TodoProvider(props){
    
    //vamos a usar el hook como si fuera el estado
    // const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    // Desestructuramos los nuevos datos de nustro custom hook
    const {
        item: todos, // con esto renombro
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length; //todo.completed == true o !!todo.completed // aca solo guardamos el numero de comletados
        // tiene el metodo filter porque es una array
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true
        // }
        // setTodos(newTodos);
        saveTodos(newTodos);
    };


    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1); //en que posicion empezamos a cortar, cuantos desde la posicion indica cortamos
        // setTodos(newTodos);
        saveTodos(newTodos);
    };
    

    // // console.log('render antes del use efect');
    // React.useEffect(()=>{
    //   // console.log('use efect');
    // },// aca la condicion para que no se ejecute siempre
    // // [] // como le pasamos el array vacio solo se ejecutara una vez
    // [totalTodos] //ej si marcamos un todo como completado nuestro useEfect no tendria que volver a ejecutar, pero si borramos uno o creamos uno nuevo
    // // como la cuenta total de todos cambia entonces deberia ejecutarse nuestro useEffect
    // );
    // // console.log('render luego del use efect');

    return(
        // aca todas las propiedades que quiera compartir en el contexto
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            }}>
            {props.children} 
            {/* de esta forma cualquier componente que llame a nuestro componente 
            TodoProvider, lo va a poder llamar, y sin importar cual componente
            llamemos, lo podremos emviar aquie y estos componentes van a poder usar nuestro consumidor.
            hay que decirle a provider cual es el estado que vamos a compartir en todos los componentes que esta conteniendo */}
            
        </TodoContext.Provider>
    );
}



// <TodoContex.provider></TodoContex.provider>
// <TodoContext.Consumer></TodoContext.Consumer>


export {TodoContext,TodoProvider};