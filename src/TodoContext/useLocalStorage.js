import React from "react";

function useLocalStorage(itemName, initialValue) {
    // Creamos el estado inicial para nuestros errores y carga
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    // const [todos, setTodos] = React.useState(defaultTodos);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
  
        try {
          // Guardamos nuestro item en una constante
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          
          // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
  
        } catch (error) {
          setError(true);
        }
  
      },1000);
    });
  
  
  
    // Creamos la función en la que actualizaremos nuestro localStorage
    const saveItem = (newItem) => {
      try {
  
        // Convertimos a string nuestros TODOs
        const stringifiedItem = JSON.stringify(newItem);
        // Los guardamos en el localStorage
        localStorage.setItem(itemName, stringifiedItem);
        // Actualizamos nuestro estado
        setItem(newItem); 
  
      } catch (error) {
        setError(true);
      }
    };
  
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
    // return [
    //   item,
    //   saveItem,
    //   loading,
    // ];
    
  }


  export {useLocalStorage};