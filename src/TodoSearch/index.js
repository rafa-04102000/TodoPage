import React from 'react';
import './TodoSearch.css';

// class Component extends React.Component {
//     constructor(){
//         this.state = {
//             patito: '👍'
//         }
//     }
    
//     render(){
//         return (
//             <button onClick={()=>this.setState("Has dado un like")}>{this.state.patito}</button>
//         )
//     }
// }


import { TodoContext } from '../TodoContext';
function TodoSearch(
    // {serchValue,setSerchValue}
    ){
    
        const {serchValue,setSerchValue} = React.useContext(TodoContext);


    //React.useState('ACA PUEDE IR CUALQUIER COSA, un objeto tambien');
    // const [serchValue,setSerchValue] = React.useState('');  //para funciones es asi, asi tendria estados, el useState nos devuelve un array de dos posiciones
    // la cero tiene el estado , y la primera que es la segunda tiene el setState



    const onSerchValueChange = (event)=>{
        // console.log(event.target.value)
        setSerchValue(event.target.value)
    }
    return(
        <input 
        className="TodoSearch" 
        placeholder="Cebolla" 
        value={serchValue}
        onChange={onSerchValueChange}
        />
        // <p>{serchValue}</p>
    );
}
export {TodoSearch};