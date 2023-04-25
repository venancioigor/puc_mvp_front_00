import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function NavMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Nav>
            <NavItem>
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                        Banco
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Registrar Banco</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavItem>
        </Nav>
    );
}

export { NavMenu };
