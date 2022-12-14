import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import './index.css';

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand href="/">
          <span>Accountant</span>
          <span className="purple">Tools</span>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem tag="span">
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="nav-item" nav caret>
                Календарь
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem className="item" onClick={() => navigate('/working-days')}>
                  <span className="link">Подсчет рабочих дней</span>
                </DropdownItem>
                <DropdownItem className="item" onClick={() => navigate('/date')}>
                  <span to="/date" className="link">Вычисление даты</span>
                </DropdownItem>
                <DropdownItem className="item" onClick={() => navigate('/calendar')}>
                  <span className="link">Производственный календарь</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem>
            <Link to="/number-to-words" className="link">
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
