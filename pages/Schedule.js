import Head from 'next/head'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { Router, Route, bRowserHistory, IndexRoute} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav' 
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Schedule() {
    return (
      <Container style={{fontFamily: 'Dosis', fontStyle: 'normal', fontWeight: 1000, fontFamily: 'Montserrat'}}>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link rel="stylesheet" href="/pages/Schedule.css"></link>
        <title>Team Toro</title>
        </Head>
      <body>
        
        <div>
            <Container fluid>
                <Navbar bg="white" expand="xl" fixed = "top">
                <Container>
                    <Navbar.Brand href="/">Team Toro Muay Thai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Schedule</Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                        <Nav.Link href="/">Gallery</Nav.Link>
                        <Nav.Link href="/">Instructor</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Container>
        </div>

        <div style = {{backgroundColor:"rgb(156,41,33)", paddingTop:"60px"}}>
        <Container>
            <Row style = {{color: "white"}}>
                <Col>
                    
                </Col>
                <Col>
                </Col>
                <Col>
                <Button variant="outline-danger" size="lg" href="/pages/Contact">Contact Us</Button>
                </Col>
            </Row>
        </Container>
        </div>

        <div className='float-center'>
            <p><br></br></p>
            <h1>Schedule of Classes</h1>
            <p><br></br></p>
            <table style={{width:'100%'}}>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tues</th>
                    <th>Wed</th>
                    <th>Thurs</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tr>
                    <td>9:00 am</td>
                    <td>Tobias</td>
                    <td>Linus</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>14</td>
                    <td>10</td>
                </tr>
            </table>
        </div>

        <div className ="footer" style = {{backgroundColor:"rgb(156,41,33)"}}>
        <Container>
            <Row style = {{color: "white"}}>
                <Col>
                    <h4>Testimonial</h4>
                    <p></p>
                </Col>
                <Col>
                    <h4>Today's Classes</h4>
                    <p>5:00 pm - Kids Class <br></br>6:00 pm - Beginners Muay Thai <br></br>7:00 pm - Advanced Muay Thai</p>
                </Col>
                <Col>
                    <h4>Contact</h4> 
                    <p>Team Toro Muay Thai <br></br>1041 Vandustrial Dr, Westmont, IL 60559<br></br> (630) 640-2686</p>
                </Col>
            </Row>
        </Container>
        </div>
      </body>
      </Container>
  )
}