import React from 'react';
import  './Comentario.css'

// JSX
const Comentario = props => (
    <div className="Comentario">
        <h2>{props.nome}</h2> 
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button> 
    </div>
);

// no button o &times adiciona um botão com x para sinalizar onde exclui comentarios
export default Comentario;