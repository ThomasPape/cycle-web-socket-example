import React, {FC} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type NavigationBarProps = {}

const NavigationBar: FC<NavigationBarProps> = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Basic Chat App With WebSocket</Navbar.Brand>
            <Nav className="mr-auto" />
        </Navbar>
    )
};

export default NavigationBar;