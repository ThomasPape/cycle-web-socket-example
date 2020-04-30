import React, {FC, useState} from 'react';
import { Form, Button, Card } from 'react-bootstrap';

type ConnectProps = {}

const Connect: FC<ConnectProps> = () => {

    const [username, setUsername] = useState('');

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	}
	
	const onSubmitHandler = (event: React.FormEvent) => {
		
		event.preventDefault();

		const newConnection = { username: username };	
		
		//postPerson(newPerson);
		
		setUsername('');
	}

    return (
        <Card style={{width: '320px', margin: 'auto', marginTop: '200px' }}>
            <Card.Header>Connect To Server</Card.Header>
            <Card.Body>
                <Form className="form-connect" onSubmit={ onSubmitHandler }>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control className="form-control" type="text" name="username" placeholder="Enter a Username" value={ username } onChange={ handleUsernameChange } />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Connect
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
};

export default Connect;