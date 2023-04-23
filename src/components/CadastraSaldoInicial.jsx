import React, { useState } from "react";

function CadastraSaldoInicial() {

    const [cpf, setCpf] = useState("");
    const [conta, setConta] = useState("");
    const [banco, setBanco] = useState("");
    const [saldo, setSaldo] = useState(0);



    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: cpf,
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
                CPF:
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            </label>
            <label>
                Conta:
                <input type="text" value={conta} onChange={(e) => setConta(e.target.value)} />
            </label>
            <label>
                Banco:
                <input type="text" value={banco} onChange={(e) => setBanco(e.target.value)} />
            </label>
            <label>
                Saldo Inicial:
                <input type="text" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
            </label>
            <button type="submit">Cadastrar Saldo Inicial</button>
            {result && <p>{result.message}</p>}
        </form>
    )
}


export { CadastraSaldoInicial };