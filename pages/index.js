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
export default function Slide() {
    return (
        <div style= {{
            backgroundImage: 'url("/images/BackgroundImage.jpg")',
            backgroundSize: "130%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
        <Container style={{ paddingLeft: 0, paddingRight: 0, fontFamily: 'Dosis', fontStyle: 'normal', fontWeight: '1000', fontFamily: 'Montserrat'}}>
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
            <title>Team Toro</title>
            </Head>
                <Container fluid>
                    <Navbar bg="white" expand="xl" fixed = "top">
                    <Container>
                        <Navbar.Brand href="/">Team Toro Muay Thai</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Schedule">Schedule</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <Nav.Link href="/">Gallery</Nav.Link>
                            <Nav.Link href="/">Instructor</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </Container>

        <Stack>
            <Carousel variant = "dark" style = {{paddingTop: "4.2%"}}>
                <Carousel.Item>
                    <Image
                        fluid = "true"
                        src="/images/pic1.jpg"
                        height = {800}
                        width={1920}
                        alt="First slide"
                    />
                        <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                            <h3>Illinois Premier Muay Thai Gym</h3>
                        </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                <Image
                    fluid = "true"
                    src="/images/pic2.jpg"
                    height = {800}
                    width={1920}
                    alt="Second slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Get in Great Shape and Reach Your Fitness Goals</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image 
                    fluid = "true"
                    src="/images/pic31.jpg"
                    height = {800}
                    width={1920}
                    alt="Third slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Learn Self Defense</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image
                    fluid = "true"
                    src="/images/pic4.jpg"
                    height = {800}
                    width={1920}
                    alt="Fourth slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Train and Fight With a World-Class Team</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <Image
                    fluid = "true"
                    src="/images/banner42.png"
                    height = {800}
                    width={1920}
                    alt="Fifth slide"
                />

                    <Carousel.Caption style = {{backgroundColor:"rgba(156,41,33,0.65)", color: "white"}}>
                        <h3>Kids Classes Offered</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <div>
                <Row>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="/images/muaythai1.png" height = {300} width={100}/>
                            <Card.Body>
                                <Card.Title>Competition</Card.Title>
                                <Card.Text>
                                Are you looking to test yourself in competition? Train with world class professional and amateur fighters at Team Toro.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/muaythai2.png" height = {300} width={300}/>
                            <Card.Body>
                                <Card.Title>Strength</Card.Title>
                                <Card.Text>
                                Build your strength and confidence through the art of Muay Thai.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="/images/muaythai3.png" height = {300} width={300}/>
                            <Card.Body>
                                <Card.Title>Conditioning</Card.Title>
                                <Card.Text>
                                Let us help you meet your fitness goals, whether it is weight-loss or overall wellness improvement we can help you out!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </div>

            <div style={{backgroundColor: "white"}}>
            <Row>
                <Col className="text-center">
                    <h2 style = {{
                        paddingTop: "2%",
                        paddingBottom: "2%"
                    }}>Welcome To Team Toro Janjira Muay Thai</h2>
                    <Image
                        src="/images/DescriptionImg.jpg"
                        alt="DescriptionImage"
                    />
                    <p style = {{
                        paddingLeft: "10%", 
                        paddingRight: "10%",
                        paddingTop: "2%"
                    }}>
                    We are the midwest's premiere Muay Thai gym. We offer authentic traditional Muay Thai in a fun and safe environment! 
                    Whether you are looking to get into shape, learn self-defense, or compete Team Toro is the place for you!  
                    Come and check out a class today! We're not just a gym we are a family!!!
                    </p>
                </Col>
            </Row>
            </div>

            <div className ="footer" style = {{backgroundColor:"rgb(156,41,33)", paddingTop: 5}}>
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

        </Stack>
        </Container>
        </div>
        
    )
  }