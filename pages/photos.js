import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
// import image1 from "..images/Scorpion.PNG"
// import image2 from "..images/BobaFett.jpg"
// import image3 from "..images/Batman_Concept_Art_Illustration_01_Matt_Allsopp-680x378.jpg"


export default function FirstPost() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/BobaFett.jpg"
                    alt="First slide"
                    
                />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="/images/Scorpion.PNG"
                alt="Second slide"
            />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="/images/Batman_Concept_Art_Illustration_01_Matt_Allsopp-680x378.jpg"
                alt="Third slide"
            />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
  }