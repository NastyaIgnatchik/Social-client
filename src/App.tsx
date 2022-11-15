import * as React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import Login from "./components/Login";
import LoginInformation from "./objects/LoginInformation";

export default function App() {
    const [token, setToken] = useState<LoginInformation>();

    useEffect(() => {
        //here we should take token from cookie to parse it to user. If expired we will be returned to login page.
    }, []);

    if (!token) {
        return (
            <Container fluid>
                <Row>
                    <Col />
                    <Col>
                        <Login setToken={setToken} />
                    </Col>
                    <Col />
                </Row>
            </Container>
        );
    }

    return (
        <Container fluid>
            <AppNavbar user={token.user} setToken={setToken} />
        </Container>
    );
}