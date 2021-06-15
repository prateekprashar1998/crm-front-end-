import React from "react";
import PropTypes from 'prop-types';

import {Container, Row , Col,Form, Button} from "react-bootstrap"

export const ResetPassword  =({handleOnchange,handleOnResetSubmit,email ,formSwitcher}) => {
    return(
        <Container>
             <Row>
                <Col>
                   <h1 className="text-info text center">Reset Password</h1>
                      <hr />
                          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                        
                    <Button type="submit">Reset Password</Button>
                  </Form>
                 <hr/>
                </Col>    
              </Row>
            <Row>
          <Col>
        <a href="#!"onClick={() =>formSwitcher('login')}> login now </a>
       </Col>
      </Row>
    </Container>
  );
};
export default ResetPassword;
ResetPassword.propTypes= {
handleOnchange: PropTypes.func.isRequired,
handleOnResetSubmit: PropTypes.func.isRequired,
formSwitcher: PropTypes.func.isRequired,
email: PropTypes.string.isRequired,


};