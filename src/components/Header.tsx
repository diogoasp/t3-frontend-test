
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IUsuario } from '../interfaces/usuario';

interface HeaderProps {
  user?: IUsuario | undefined;
}

const Header = ({ user }: HeaderProps) => {
  const navigate = useNavigate();
  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void

  const location = useLocation();
  const defUser = () => {
    return user === undefined ? location.state.user : user;
  }
  const hasUser = () => {
    return user !== undefined;
  };
  const produtos = () => {
    return (event: React.MouseEvent) => {
      navigate("/produtos", { state: { user: user } });
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
        <Navbar bg="light" expand="sm">
          <Container>
            <Navbar.Brand href="#home">
              <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <div className='justify-content-start'>
              <Button variant='dark' data-testid="produtos" onClick={produtos()} > Produtos </Button>
              <Button variant='dark' data-testid="carrinho" onClick={produtos()} > Carrinho </Button>
            </div>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {hasUser() ? <span>Olá, {user?.email}</span> : null}
                <Button variant='dark' data-testid="sair" onClick={toLogin()} >  {hasUser() ? <span>Sair</span> : <span>Entrar</span>} </Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header;