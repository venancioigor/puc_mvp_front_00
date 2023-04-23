import React, { useState } from "react";

// http delete Request

function QuebrarPorquinho() {
    const [conta, setConta] = useState("");
    const [objetivo, setObjetivo] = useState("");
    const [valor, setValor] = useState(0);
    const [data, setData] = useState("");

    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: conta,
        };

        try {
            const response = await fetch("http://127.0.0.1:5000/example", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const jsonData = await response.json();

            setResult(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Conta:
                <input type="text" value={conta} onChange={(e) => setConta(e.target.value)} />
            </label>
            <label>
                Valor:
                <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
            </label>
            <label>
                Objetivo:
                <input type="text" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} />
            </label>
            <label>
                Data:
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            </label>
            <button type="submit">Quebrar porquinho</button>
            {result && <p>{result.message}</p>}
        </form>
    )
}


export { QuebrarPorquinho };