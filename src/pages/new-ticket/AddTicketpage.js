import React , {useState, useEffect}from 'react'
import {Container,Row ,Col} from 'react-bootstrap'
import {Breadcrumbs} from "../../components/breadcrumb/breadcrumbs"
import {AddTicketForm}  from '../../components/add-ticket-form/AddTicketForm'

const initialFrmDt ={
    Subject: '',
    issueDate: '  ',
    details:  "",
};


export const AddTicket = () => {
 

    const [frmData, setfrmData] = useState(initialFrmDt);
    useEffect(() => {}, [frmData]);
    
    
    const handleOnChange = (e) =>{
        const {name,value}= e.target;
         setfrmData({
            ...frmData,
            [name]: value,
        });
    };

        const handleOnSubmit = (e) =>{
        
           e.preventDefault();
           console.log("Form submit request recieved",frmData);
        };   
    
         
       
  
    
    
    return (
        <Container>
            <Row>
                <Col>
                < Breadcrumbs page="New Ticket"/>
                </Col>
            </Row>
        
            <Row>
                <Col>
                <AddTicketForm 
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}
                
                frmDt={frmData}
                />
            
                </Col>
            </Row>
        
            </Container>
        
        
    )

};
export default AddTicket;
