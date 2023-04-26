import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PorquinhoService } from '../../service/PorquinhoService/porquinhoService';

const porquinhoService = new PorquinhoService();

function VerSaldoTotalPorquinho() {
    const [nomeBanco, setNomeBanco] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
        porquinhoService.cadastrarBanco(nomeBanco)

    }

    function handleOnChange(event) {
        setNomeBanco(event.target.value)
    }

    return (
        <Container>
            <h2>Ver Saldo Total dos Porquinhos</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" id="name" value={nomeBanco}
                        onChange={handleOnChange}
                        placeholder="Digite o nome do banco" />
                </FormGroup>
                <Button>Registrar</Button>
            </Form>
        </Container>
    );
}

export { VerSaldoTotalPorquinho };
