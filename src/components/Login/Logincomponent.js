import React from "react";
import PropTypes from 'prop-types';
import "./Login.style.css";
import {Container, Row , Col,Form, Button} from "react-bootstrap"

export const LoginForm =({handleOnchange,handleOnSubmit,formSwitcher,email,password}) => {
    return(
        <Container>
             <Row>
                <Col>
                   <h1 className="text-info text center">Client Login</h1>
                      <hr />
                          <Form autoComplete="off" onSubmit={handleOnSubmit}>
                          <Form.Group>
                          <Form.Label column="lg" lg={17}>Email Address</Form.Label>
                          <Form.Control
                           
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleOnchange}
                          
                          placeholder="Enter Email"
                          
                         />
                         </Form.Group>
                         <Form.Group>
                         <Form.Label column="lg" lg={13}>Password</Form.Label>
                         <Form.Control
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleOnchange}
                          placeholder= "Password"
                          
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                  </Form>
                 <hr/>
                </Col>    
              </Row>
            <Row>
          <Col>
        <a href="#!" onClick={() =>formSwitcher("reset")}>Forget Password?</a>
       </Col>
      </Row>
    </Container>
  );
};
export default LoginForm;
LoginForm.propTypes= {
handleOnchange: PropTypes.func.isRequired,
handleOnSubmit: PropTypes.func.isRequired,
formSwitcher: PropTypes.func.isRequired,
email: PropTypes.string.isRequired,
pass: PropTypes.string.isRequired,

};