import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            
                <Navbar className="bg-body-tertiary fixed-top bg-light">
                    <Container>
                        <Navbar.Brand>TODO</Navbar.Brand>
                    </Container>
                </Navbar>
            
        </>
    )
}

export default Header