import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './index.css';

function NavigationBar() {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand href="/">
          <span>Accountant</span>
          <span className="purple">Tools</span>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/calendar" className="link">Календарь</Link>
          </NavItem>
          <NavItem>
            <Link to="/towords" className="link">
              Сумма прописью
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/tax" className="link">
              Калькулятор НДС
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
