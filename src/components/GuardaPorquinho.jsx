import React, { useState } from "react";

function GuardaPorquinho() {
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
        <form onSubmit={handleSubmit} style={{ backgroundColor: "#1E2A3A", color: "#FFFFFF", padding: "20px", borderRadius: "10px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
                <span style={{ display: "block", marginBottom: "5px" }}>Conta:</span>
                <input type="text" value={conta} onChange={(e) => setConta(e.target.value)} style={{ borderRadius: "5px", border: "none", padding: "5px", width: "100%", backgroundColor: "#FFFFFF", color: "#1E2A3A" }} />
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
                <span style={{ display: "block", marginBottom: "5px" }}>Valor:</span>
                <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} style={{ borderRadius: "5px", border: "none", padding: "5px", width: "100%", backgroundColor: "#FFFFFF", color: "#1E2A3A" }} />
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
                <span style={{ display: "block", marginBottom: "5px" }}>Objetivo:</span>
                <input type="text" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} style={{ borderRadius: "5px", border: "none", padding: "5px", width: "100%", backgroundColor: "#FFFFFF", color: "#1E2A3A" }} />
            </label>
            <label style={{ display: "block", marginBottom: "10px" }}>
                <span style={{ display: "block", marginBottom: "5px" }}>Data:</span>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} style={{ borderRadius: "5px", border: "none", padding: "5px", width: "100%", backgroundColor: "#FFFFFF", color: "#1E2A3A" }} />
            </label>
            <button type="submit" style={{ backgroundColor: "#FFFFFF", color: "#1E2A3A", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: "bold" }}>Ver saldo porquinho</button>
            {result && <p>{result.message}</p>}
        </form>
    )
}


export { GuardaPorquinho };