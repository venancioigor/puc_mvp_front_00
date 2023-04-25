import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CadastraBancoForm } from './components/Banco/CadastraBancoForm'
import { GetAllBancos } from './components/Banco/GetAllBancos'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
      <Navbar color="dark" dark expand="md" className="bg-myblue">
        <NavbarBrand href="/" className="text-white">MyBank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-white" tag={Link} to="/cadastraBanco">Registrar Banco</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" tag={Link} to="/getAllBancos">Get All Bancos</NavLink>
            </NavItem>
          </Nav>
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
