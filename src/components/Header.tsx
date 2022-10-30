
import React from 'react';
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
      navigate("/produtos");
      event.preventDefault();
    }
  }
  const carrinho = () => {
    return (event: React.MouseEvent) => {
      navigate("/carrinho");
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
        <img src="" alt="logo" />
        <ul>
          <li>
            <li><button data-testid="produtos" onClick={produtos()} > Produtos </button></li>
          </li>
          <li>
            <li><button data-testid="carrinho" onClick={carrinho()} > Carrinho </button></li>
          </li>
          <li>
            <div>
              {hasUser() ? <span>Olá, {user?.email}</span> : null}
              <button data-testid="sair" onClick={toLogin()} >  {hasUser() ? <span>Sair</span> : <span>Entrar</span>} </button>

            </div>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header;