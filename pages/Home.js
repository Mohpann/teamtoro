import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Stack from 'react-bootstrap/Stack'
import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav' 
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Figure from 'react-bootstrap/Figure'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Slide() {
    return (
        <Stack>
            <Stack direction = "horizontal"> 

                <row>    
                    <div>
                    <Figure>
                    <Figure.Image
                        width={200}
                        height={220}
                        alt="200x220"
                        src="/images/logo5.png"
                    />
                    </Figure>
                    </div>
                </row>

                    <div classname = "container">
                    <Head>
                    <title>Team Toro</title>
                    </Head>
                </div>
                <row>
                    <div>
                        <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Team Toro Muay Thai</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/Schedule">Schedule</Nav.Link>
                                <Nav.Link href="/">index</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                    </div>
                </row>

            </Stack>

            <row>
                <Col lg={true}>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <Image
                                    src="/images/pic1.jpg"
                                    height = {800}
                                    width={1920}
                                    alt="First slide"
                                    
                                />
                                    <Carousel.Caption>
                                        <h3>Illinois Premier Muay Thai Gym</h3>
                                    </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item>
                            <Image
                                
                                src="/images/pic2.jpg"
                                height = {800}
                                width={1920}
                                alt="Second slide"
                            />

                                <Carousel.Caption>
                                    <h3>Get in Great Shape and Reach Your Fitness Goals</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <Image
                                src="/images/pic31.jpg"
                                height = {800}
                                width={1920}
                                alt="Third slide"
                            />

                                <Carousel.Caption>
                                    <h3>Learn Self Defense</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <Image
                                src="/images/pic4.jpg"
                                height = {800}
                                width={1920}
                                alt="Fourth slide"
                            />

                                <Carousel.Caption>
                                    <h3>Train and Fight With a World-Class Team</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                            <Image
                                src="/images/banner42.png"
                                height = {900}
                                width={1920}
                                alt="Fifth slide"
                            />

                                <Carousel.Caption>
                                    <h3>Kids Classes Offered</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </row>

            <div>
                <Stack direction = "horizontal"> 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/logo5.png" />
                    <Card.Body>
                    <Card.Title>Facebook</Card.Title>
                    <Card.Text>
                        Check us out on Facebook
                    </Card.Text>
                    <Button href="https://www.facebook.com/Team-TORO-Muay-Thai-196321693761082/">Link</Button> 
                    </Card.Body>
                </Card>
                </Stack>
            </div>
            
            <div>
                <footer>
                    <a
                    href="https://www.facebook.com/Team-TORO-Muay-Thai-196321693761082/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/images/logo5.png"
                        height = {100}
                        width={250}
                    />
                    </a>
                </footer>
            </div>
        </Stack>
    )
  }