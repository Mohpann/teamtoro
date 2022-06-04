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

export default function Gallery() {
    return (
        <div style= {{
            backgroundImage: 'url("/images/BackgroundImage.jpg")',
            backgroundSize: "130%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
        <Container style={{ paddingLeft: 0, paddingRight: 0, fontFamily: 'Dosis', fontStyle: 'normal', fontWeight: 1000, fontFamily: 'Montserrat'}}>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
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

            <div style={{paddingTop: 50}}>
                <Row>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Contact</Card.Title>
                                <Card.Text>
                                We appreciate your interest in our school and classes. Feel free to contact us today and we will respond as soon as possible.  
                                </Card.Text>
                                <Button variant="primary">Contact Us</Button>
                            </Card.Body>
                        </Card>
                </Row>
            </div>
            
            <div>
                <iframe
                width="1320"
                height="600"
                loading="lazy"
                allowFullScreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA9CTJInJiOWjGr6t6gMgCNCMcNekwSvhY&q=Space+Needle,Seattle+WA">
                </iframe>
            </div>

            </body>
        </Container>
      </div>
  )
}