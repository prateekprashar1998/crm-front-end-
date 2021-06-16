
import {Container, Row , Col, Button} from 'react-bootstrap'
import TicketTable from '../../components/ticket-table/TicketTable'
import tickets from '../../assests/data/Dummy-tickets.json'
import Breadcrumbs from '../../components/breadcrumb/breadcrumbs'

import React from 'react'



export const Dashboard = () => {
    return (
       <Container>
           <Row>
               <Col>
               < Breadcrumbs page="Dashboard"/>
               </Col>
           </Row>
             <Row>
            <Col className="text-center mt-5 mb-2">
                <Button variant="info" style={{'fontSize':'2rem',padding:"10px 30px "}}>
                   Add New Ticket
                </Button>
            </Col>
           </Row>
           <Row>
            <Col className="text-center mb-2">
              <div>Total tickets: 50</div>
              <div>Pending tickets: 5</div>
            </Col>
           </Row>
            <hr/>
           

           <Row>
            <Col className="mt-2 ">Recently added Tickets</Col>
           </Row>

           <Row>
            <Col className="recent-tickets "><TicketTable tickets={tickets}/>
            </Col>
           </Row>

       </Container>
    );
};
export default Dashboard;