// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { AppUi } from "./AppUi";
import { TodoProvider } from '../TodoContext';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];



function App() {


  return (
    <TodoProvider>

      <AppUi
      // loading={loading}
      // error={error}
      // totalTodos={totalTodos}
      // completedTodos={completedTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
      />
      
    </TodoProvider>

  );
}

export default App;
