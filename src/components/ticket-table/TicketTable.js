import React from 'react'
import Table from 'react-bootstrap/Table'
export const TicketTable = ({tickets}) => {
    return <Table>
         <thead>
           <tr>
              <th>#</th>
              <th>Subjects</th>
              <th>Status</th>
              <th>Opened Date</th>
           </tr>
        </thead>
         <tbody>
            
            {tickets.length ? (tickets.map((row)  => (
              <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.subject}</td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
              </tr>
            )) 
            ): (
       <tr>
            <td colSpan="4" className="text-center"> No tickets to show</td>
       </tr>
            )
    
    } 
            
          </tbody>
         
    
        </Table>
       
    
}
export default TicketTable;