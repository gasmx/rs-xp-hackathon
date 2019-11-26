import React from 'react';
import { Container } from './styles';

import { ButtonToolbar, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <ButtonToolbar>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </ButtonToolbar>
    );
};

export default Login;