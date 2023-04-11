import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButtom(props){
    // guardo mi funcion en una constante?
    const onClickButton = () => {
        // alert('llega');
        // props.setOpenModal(true);
        props.setOpenModal(prevState => !prevState);
      };
      

    return(
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        // onClick={()=>onClickButton()}
        
        >
            
            +
            
        </button>
    );
}

export { CreateTodoButtom};