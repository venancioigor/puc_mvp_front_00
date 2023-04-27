import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ContaService } from '../../service/ContaService/contaService';

const contaService = new ContaService();

function AbrirConta() {
  const [nomeBanco, setNomeBanco] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [saldo, setSaldo] = React.useState(0)
  const [numeroConta, setNumeroConta] = React.useState('')
  const [isOk, setIsOk] = React.useState(false)
  const [error, setError] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    contaService.abrirConta(cpf, nomeBanco, saldo, numeroConta)
      .then((response) => {
        if (response === 'OK') {
          setIsOk(true);
        }
      })
      .catch((error) => {
        setIsOk(false);
        console.log(error)
        setError(error);
      });

    setNomeBanco('')
    setCpf('')
    setSaldo(0)
    setNumeroConta('')
    setIsOk(true)
  }

  function handleOnChangeBanco(event) {
    setNomeBanco(event.target.value)
  }
  function handleOnChangeCpf(event) {
    setCpf(event.target.value)
  }
  function handleOnChangeSaldo(event) {
    setSaldo(parseFloat(event.target.value))
  }
  function handleOnChangeConta(event) {
    setNumeroConta(event.target.value)
  }

  return (
    <Container>
      <h2>Abrir Conta</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">CPF do Cliente</Label>
          <Input type="text" name="name" id="name" value={cpf}
            onChange={handleOnChangeCpf}
            placeholder="Digite o CPF do cliente dono da conta" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Número da conta</Label>
          <Input type="text" name="name" id="name" value={numeroConta}
            onChange={handleOnChangeConta}
            placeholder="Digite o número da conta a registrar" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Saldo da Conta</Label>
          <Input type="text" name="name" id="name" value={saldo}
            onChange={handleOnChangeSaldo}
            placeholder="Digite atual da conta" />
        </FormGroup>
        <FormGroup>
          <Label for="name">Nome do Banco</Label>
          <Input type="text" name="name" id="name" value={nomeBanco}
            onChange={handleOnChangeBanco}
            placeholder="Digite o nome do banco" />
        </FormGroup>
        <Button>Abrir conta</Button>
        {isOk && <p>Conta aberta com sucesso!</p>}
        {!isOk && <p>{error}</p>}
      </Form>
    </Container>
  );
}

export { AbrirConta };
