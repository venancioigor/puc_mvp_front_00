import React from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { CadastraBancoForm } from './components/Banco/CadastraBancoForm'
import { GetAllBancos } from './components/Banco/GetAllBancos'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import './App.css';


function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isBancoOpen, setIsBancoOpen] = React.useState(false);
  const [isClienteOpen, setIsClienteOpen] = React.useState(false);
  const [isContasOpen, setIsContasOpen] = React.useState(false);
  const [isPorquinhoOpen, setIsPorquinhoOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleBanco = () => setIsBancoOpen(!isBancoOpen);
  const toggleCliente = () => setIsClienteOpen(!isClienteOpen);
  const toggleConta = () => setIsContasOpen(!isContasOpen);
  const togglePorquinho = () => setIsPorquinhoOpen(!isPorquinhoOpen);


  return (
    <BrowserRouter>
      <Navbar style={{ width: '100%', }} color="dark" dark expand="md">
        <NavbarBrand style={{ fontSize: '2.0rem', marginLeft: '200px' }} href="/" >MyBank</NavbarBrand>
        <Collapse navbar>
          <Nav className="mr-auto" style={{ marginLeft: '50px', fontSize: '1.2em' }}>
          </Nav>
          <Dropdown dark isOpen={isClienteOpen} toggle={toggleCliente}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Cliente
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/cadastraBanco">Cadastrar Cliente</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver Cliente</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver Saldo Geral</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isContasOpen} toggle={toggleConta}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Contas
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/cadastraBanco">Abrir conta</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Deletar conta</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver contas cliente</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver Saldo Total Contas</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Transferir valor entre contas</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isPorquinhoOpen} toggle={togglePorquinho}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Porquinhos
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/cadastraBanco">Registrar porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver porquinhos</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver Saldo Total porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Transferir Valor Entre Porquinho</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Deletar porquinho</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown dark isOpen={isBancoOpen} toggle={toggleBanco}>
            <DropdownToggle caret color='dark' style={{ fontSize: '1.2em' }}>
              Banco
            </DropdownToggle>
            <DropdownMenu dark>
              <DropdownItem tag={Link} to="/cadastraBanco">Registrar Banco</DropdownItem>
              <DropdownItem tag={Link} to="/getAllBancos">Ver todos os bancos</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </Navbar >
      <div className="container">
        <Routes>
          <Route path="/cadastraBanco" element={<CadastraBancoForm />} />
          <Route path="/getAllBancos" element={<GetAllBancos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
