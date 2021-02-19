import React from 'react';
import  './Comentario.css'
import imagemUsuario from './user.png';

// JSX
// REcebe como parâmetro as propriedades dessa classe que se encontram no App
const Comentario = props => (
    <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome}/>
        <div className="conteudo">
            <h2 className="nome">{props.nome}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button> 
        </div>
    </div>
);

// no button o &times adiciona um botão com x para sinalizar onde exclui comentarios
export default Comentario;