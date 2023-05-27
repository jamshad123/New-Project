import React from 'react'
// import Card from 'react-bootstrap/Card';
import { FaRegMoneyBillAlt, FaIoxhost } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { RiTaskFill } from "react-icons/ri";
import './Homepage.css';
import { Card, Col, Row } from 'antd';
import { Progress } from 'antd';


function Homepage() {
  

  return (
    <div>
      <Row gutter={16}>
    <Col span={6}>
      <Card style={{width: '250px', height: '60px', marginLeft:"250px", marginTop:"70px", borderRadius:"0px"}} title="Fees Awaiting Payment" bordered={false}>
      <Progress percent={8}/>
      </Card>
    </Col>
    <Col span={9}>
      <Card style={{width: '250px', height: '60px', marginLeft:"300px", marginTop:"70px", borderRadius:"0px"}} title="Converted Leads" bordered={false}>
      <Progress percent={7}/>
      </Card>
    </Col>
    <Col span={8}>
      <Card style={{width: '250px', height: '60px', marginLeft:"250px", marginTop:"70px", borderRadius:"0px"}}title="Present Today" bordered={false}>
      <Progress percent={0}/>
      </Card>
    </Col>

    
  </Row>
    </div>
  )
}

export default Homepage

