
import React, { useContext } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import { BiStoreAlt } from "react-icons/bi";
import { ContextoAutenticacao } from '../context/contextoAutenticacao';

const Header = () => {
  const { logout } = useContext(ContextoAutenticacao);
  const navigate = useNavigate();
  // const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void
  const user = JSON.parse(localStorage.getItem("usuario") ?? "")
  const cart = JSON.parse(localStorage.getItem("carrinho") ?? "")
  const hasUser = () => {
    return user !== undefined;
  };
  const produtos = () => {
    return (event: React.MouseEvent) => {
      navigate("/produtos", { state: { user: user } });
      event.preventDefault();
    }
  }
  const carrinho = () => {
    return (event: React.MouseEvent) => {
      navigate("/carrinho/" + cart._id, { state: { user: user } });
      event.preventDefault();
    }
  }
  const toLogin = () => {
    return (event: React.MouseEvent) => {
      navigate("/");
      event.preventDefault();
    }
  }
  return (
    <>
      <header>
        <Navbar bg="light" expand="sm" className='mb-5'>
          <Container>
            <Navbar.Brand href="./produtos">
              <BiStoreAlt className='fs-1' />
            </Navbar.Brand>
            <div className='justify-content-start'>
              <Button variant='dark' id="produtos" onClick={produtos()} > Produtos </Button>
              <Button variant='dark' id="carrinho" onClick={carrinho()} > Carrinho </Button>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {hasUser() ? <span id='userName'>Olá, {user?.email}</span> : null}
                {hasUser() ? <Button variant='danger' data-testid="sair" onClick={logout} ><span>Sair</span></Button> : <Button variant='success' data-testid="sair" onClick={toLogin()} ><span>Entrar</span> </Button>}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header;