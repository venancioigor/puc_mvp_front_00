import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { BancoService } from '../../service/BancoService/bancoService';

const bancoService = new BancoService();

function GetAllBancos() {
  const [nomeBanco, setNomeBanco] = React.useState('')
  const [bancos, setBancos] = React.useState([])



  function handleSubmit(event) {
    event.preventDefault();
    bancoService.cadastrarBanco(nomeBanco)

  }

  function handleClick() {
    bancoService.getAllBancos().then(response => {
      if (response) {
        setBancos(response)
      }
    })
  }

  return (
    <Container>
      <h2>Ver todos os bancos</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="select">
            <option>Selecione um banco</option>
            {bancos.length > 0 && bancos.map((banco, i) => (
              <option key={banco.id} value={banco.nome}>{banco.nome}</option>
            ))}
          </Input>
          <Button onClick={handleClick}></Button>
        </FormGroup>
      </Form>
    </Container>
  );
}

export { GetAllBancos };
