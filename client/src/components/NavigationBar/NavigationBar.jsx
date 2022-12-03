import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="nav-item" nav caret>
                Календарь
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="item">
                  <Link to="/working-days" className="link">Подсчет рабочих дней</Link>
                </DropdownItem>
                <DropdownItem className="item">
                  <Link to="/date" className="link">Вычисление даты</Link>
                </DropdownItem>
                <DropdownItem className="item">
                  <Link to="/calendar" className="link">Производственный календарь</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem>
            <Link to="/to-words" className="link">
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
