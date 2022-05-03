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

export default function Instructor() {
    return(
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
                                <Nav.Link href="/Contact">Contact</Nav.Link>
                                <Nav.Link href="/Gallery">Gallery</Nav.Link>
                                <Nav.Link href="/Instructor">Instructor</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                    </div>
                </row>

            </Stack>

        <Card className="text-center" style={{ width: '110rem' }}>
        <Image src="/images/Ricardo_Perez.jpg"/>
            <Card.Body>
                <Card.Title>Ricardo Perez</Card.Title>
                <Card.Text>
                    <p>
                Ricardo Perez is the head Instructor of Team Toro Janjira Muay Thai he has Over 20 years experience in the Art of Muay Thai once as a Professional Fighter and now as a Trainer. He has Trained various Professional Muay Thai Fighters as well as MMA and Produced several Professional and Amateur World and National Champions,  Ricardo Perez is part of The United States Muay Thai federation and is the North Mid East Regional director for the United States Muay Thai Federation, He has taken fighters to compete all over the U.S and the World! Has had Fighters in the toughest tournaments. Ricardo has trained and lived in Thailand around 15 times and continues to go to Thailand to further his education in the art of Muay Thai to bring back the latest techniques to his Students. He has Trained at Sityodtong Gym under Kru Toy, Kru Bat and Kru Yodtong Sennenan, As well as  Sor Pleonchit Gym, Chuwatanna Gym, Por Pramuk, Sitpholek Gym, WMC Lamai, But the Person who Ricardo calls Master and Friend is Kru Saekson Janjira he is the man that has Guided and Continues to Guide Ricardo in his Journey to bring back the best Muay Thai in the Midwest.
                    </p>
                <p>
                <strong>Ricardo Perez's</strong> accomplishments and his trained students accomplishments:
                </p>
                Ricardo is The Board of director of the North Mid East Region for United States Muay Thai Federation.
                <br></br>
                Ricardo is Co Owner and Promoter of Farang Fight League
                <br></br>
                Ricardo had a Fighter featured in Oxygen Channels First Season of Fight Girls
                <br></br>
                Ricardo had a Fighter in TV Show Muay Thai Contender Asia 2nd Season
                <br></br>
                Ricardo had a fighter in European TV show Enfusion
                <br></br>
                First U.S.A Trainer to have a Professional fighter invited to Fight in The Prestigius I-1 World 8 Man Tournament in Hong Kong
                <br></br>
                First U.S.A Trainer to Produce a Professional Fighter Good enuff to fight legendary Fighter from Thailand Buakauw Banchamek(Por Pramuk)
                <br></br>
                Produced 2006 Amateur IKF Regional Champion
                <br></br>
                Produced 2 fighters to become National Champions for The 2007 Thai Boxing Muay Thai Classic Amateur  National Tournament.
                <br></br>
                Produced 2009 Thai Boxing Muay Thai Classic Amateur National Champion
                <br></br>
                Produced 2009 World Kickboxing Association Amateur National Champion
                <br></br>
                Produced 2010 Shindo Kumate Amateur World Champion
                <br></br>
                Produced 2010 Thai Boxing Muay Thai Classic North American Champion
                <br></br>
                Produced 2010 United States Muay Thai Association Amateur National Champion
                <br></br>
                - Produced 2011 Womens Thai Boxing Muay Thai Classic North American Champion
                <br></br>
                Produced 2012 IKF Regional Champion
                <br></br>
                Produced 3 Fighters to win 2012 Thai Boxing North American Muay Thai Classic Championships
                <br></br>
                Produced 2012 World Kickboxing Association National Champion
                <br></br>
                Produced 2013 Female Chicago Golden Gloves Champion
                <br></br>
                Produced 2014 North American Muay Thai Classic Champion
                <br></br>
                Produced Professional Fighter To Win Thailands Bangla Stadium Championship Belt
                <br></br>
                Produced Professional Fighter to Win Thailands Patong Stadium Championship Belt
                <br></br>
                Produced Professional Fighter to Win Thailands M.U Den 4 Man Tournament
                <br></br>
                2015 USMF Assistant Coach Adult Team
                <br></br>
                2016 USMF Head Coach Youth Team
                <br></br>

                Has had His Professional Fighters Fight in the biggest stages in the World:
                Lion Fight Promotion
                Strikeforce
                Max Muay Thai
                Bellator 
                Take On
                World Combat League
                I-1 8 Man World Tournament
                S-1 Kings Cup
                Dominion Warrior
                Push Kick Promotions
                Friday Night Fights

                    <p>
                Six-time World Champion Saekson Janjira is recognized as one of the best trainer’s in America. Saekson Janjira has produced many of today’s Top Champions in most of the Martial Arts events around. Janjira Muay Thai is used in most of today’s Martial Arts Events, (UFC, K1, King of the Cage, and all other major competitions around the world. Janjira Muay Thai doesn’t’t just train people in the art of Muay Thai but how to be Muay Thai Champions.
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
        
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
            
        </Stack>
    )
}