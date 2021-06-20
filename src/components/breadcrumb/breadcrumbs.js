import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
export const Breadcrumbs = ({page}) => {
    return (
        <div>
            <Breadcrumb className="bread bg-light">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
       <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>
        </div>
    );
};
export default Breadcrumbs; 
