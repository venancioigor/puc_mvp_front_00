import React, { useState } from "react";

function VerSaldoTotal() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [saldo, setSaldo] = useState(0);
    const [data, setData] = useState("");



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
                Nome:
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>
                CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>
                Data:
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            </label>
            <label>
                Saldo Total:
                <input type="text" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
            </label>
            <button type="submit">Ver Saldo Total</button>
            {result && <p>{result.message}</p>}
        </form>
    )
}


export { VerSaldoTotal };