import React from 'react';
import propTypes from 'prop-types'
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from 'reactstrap';

const LoginComponent = ({username, password, setUsername, setPassword, logValues}) => {
  const setValue = (evt) => {
    setUsername(evt.target.value)
  }

  const setPasswordWrapper = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={username} onChange={setValue}/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={password} onChange={setPasswordWrapper}/>
                </FormGroup>
                <Button onClick={logValues}>Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginComponent;

// default props types 
LoginComponent.propTypes = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  setUsername: propTypes.func.isRequired,
  setPassword: propTypes.func.isRequired,
  logValues: propTypes.func.isRequired
}