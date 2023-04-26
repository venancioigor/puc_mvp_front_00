import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/contaService';

const contaService = new ContaService();

function TransferirValorEntreContas() {
  const [nomeBanco, setNomeBanco] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    contaService.cadastrarBanco(nomeBanco)

  }

  function handleOnChange(event) {
    setNomeBanco(event.target.value)
  }

  return (
    <Container>
      <h2>Transferir Valor Entre Contas</h2>
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

export { TransferirValorEntreContas };
