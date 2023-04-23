import React, { useState } from "react";

function AbrirConta() {
    const [nome, setNome] = useState("");
    const [conta, setConta] = useState("");
    const [cpf, setCpf] = useState("");

    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: nome,
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
                Número da conta:
                <input type="text" value={conta} onChange={(e) => setConta(e.target.value)} />
            </label>
            <label>
                CPF do cliente:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>
                Nome do banco:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <button type="submit">Abrir Conta</button>
            {result && <p>{result.message}</p>}
        </form>
    )
}


export { AbrirConta };