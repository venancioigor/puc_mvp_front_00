import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ClienteService } from '../../service/ClienteService/clienteService';

const clienteService = new ClienteService();

function VerSaldoGeral() {
  const [nomeBanco, setNomeBanco] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    clienteService.cadastrarBanco(nomeBanco)

  }

  function handleOnChange(event) {
    setNomeBanco(event.target.value)
  }

  return (
    <Container>
      <h2>Saldo Geral</h2>
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

export { VerSaldoGeral };
