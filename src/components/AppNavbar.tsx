import * as React from "react";
import { Row, Navbar, Container, Nav, Stack } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import LoginInformation from "../objects/LoginInformation";
import User from "../objects/User";

interface IAppNavbarProps {
    user: User;
    setToken: (arg: LoginInformation) => void;
}

const AppNavbar: React.FC<IAppNavbarProps> = ({ user, setToken }) => {
    return (
        <Row>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Stack direction="horizontal" gap={3}>
                            <img
                                alt=""
                                src={require('../resources/icon-192x192.png')}
                                height="40px"
                            />{''}
                            Social Client
                        </Stack>
                        {/* <label className="me-auto">Welcome back {user.name}!</label> */}
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Item title="Edit Profile">
                            <Nav.Link onClick={() => console.log("Edit Profile")}><Icon.PersonCircle /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item title="Logout">
                            <Nav.Link onClick={() => setToken(null)}><Icon.BoxArrowRight /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </Row>
    );
}

export default AppNavbar;