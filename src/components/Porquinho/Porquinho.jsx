import React from 'react';

function Porquinho(props) {
    const { objetivo, id, id_cliente, saldo } = props;

    return (
        <div>
            <p><strong>Objetivo: {objetivo}</strong></p>
            <p>ID: {id}</p>
            <p>ID Cliente: {id_cliente}</p>
            <p>Saldo: {saldo}</p>
        </div>
    );
}

export { Porquinho }