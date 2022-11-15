import * as React from "react";
import { useState, useEffect } from "react";
import { Row, Navbar, Container, Nav, Stack, Button, Card, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import LoginInformation from "../objects/LoginInformation";
import User from "../objects/User";

interface ILoginProps {
    setToken: (arg: LoginInformation) => void;
}

const Login: React.FC<ILoginProps> = ({ setToken }) => {
    const [loginInformation, setLoginInformation] = useState<LoginInformation>(
        //Prefilled, remove after
        {
            token: "somestringtoken",
            user: new User("Name", "Surname", "test@test.com", "https://memepedia.ru/wp-content/uploads/2019/10/ag2jztzmtfs.jpg"),
            validUntil: "11/15/2022",
            password: "test"
        }
    );
    const [rememberUser, setRememberUser] = useState<boolean>(false);

    function login() {
        //call api with loginInformation data if valid then ->
        setToken(loginInformation);

        if (rememberUser === true) {
            //save to cookie
        }
    }

    return (
        <Card>
            <Card.Header as="h5">
                Login
            </Card.Header>
            <Card.Body>
                <Stack gap={3}>
                    {renderGroupInput("Email", "email", loginInformation.user.email, "email")}
                    {renderGroupInput("Password", "password", loginInformation.password, "password")}
                    <Form.Group className="mb-3">
                        <Stack direction="horizontal" gap={3}>
                            <Form.Check type="checkbox" name="remember" onChange={(event) => setRememberUser(event.target.checked)} />
                            <Form.Text>Remember?</Form.Text>
                        </Stack>
                    </Form.Group>
                    <Button variant="dark" onClick={() => login()}>LOGIN</Button>
                </Stack>
            </Card.Body>
        </Card>
    );

    function handleChange(event: { target: any }) {
        setLoginInformation({ ...loginInformation, [event.target.name]: event.target.value });
    }

    //TODO Move to helpers 
    function renderGroupInput(title: string, name: string, value: string, type: string = "text") {
        return (
            <Form.Group className="mb-3">
                <Form.Label>{title}</Form.Label>
                <Form.Control type={type} value={value} name={name} onChange={handleChange} />
            </Form.Group>
        );
    }
}

export default Login;