import React from 'react'
import {Jumbotron,Form, Row ,Col ,Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
  import './add-ticket-form.css';
export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt}) => {
    console.log(frmDt);


    return (
        <Jumbotron  className=" mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Subject
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Control
                        name="Subject"
                        value={frmDt.Subject}
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required 
                        />
                    
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>
                        Issue Found
                    </Form.Label>
                    <Col sm={9}>
                    <Form.Control
                        type="date"
                        name="issueDate"
                        value={frmDt.date}
                        onChange={handleOnChange}
                        required 
                           />
                        </Col>
                     
                </Form.Group>
                <Form.Group>
                    <Form.Label >
                        Details
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="6"
                        name="details"
                        value={frmDt.Details}
                        onChange={handleOnChange}
                        required 
                    />
                        
                </Form.Group>
                
            </Form>
            <Col className="text-center">
                <Button variant="info" block>
                 
                   Submit
                </Button>
                </Col>
        </Jumbotron>
    )
}
export default AddTicketForm;
AddTicketForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,

};