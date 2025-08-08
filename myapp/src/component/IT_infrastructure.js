import React from 'react'
import {Image,Col,Row} from 'react-bootstrap';


export default function IT_infrastructure() {
  return (
    <div>
      <Row>
        <Col xs={6} md={4}>
        <h2>IT infrastructure</h2>
          <Image src="https://www.ftii.ac.in/uploads/userfiles/images/it.jpg" rounded />
          <p>Multimedia and Computer department caters to computer, IT, Internet, wi-fi and multimedia related needs of various academic and administrative sections. The department also manages the Institute’s website and internal network.It has a 1 Gbps leased line through National Knowledge Network (NKN) and a standby line of 10 Mbps. The Institute’s data centre is equipped with modern servers and mail services, with applications for data management, security, and back up. A 200 TB private cloud is used to store the data of student projects and a collection of global films.</p>
        </Col>
      </Row>

    </div>
  )
}
