import React from 'react'
import Image from 'react-bootstrap/Image'
import discord from '../../imgs/Discord-Icon.png';
import github from '../../imgs/GitHub-Icon.png';
import linkedin from '../../imgs/LinkedIN-Icon.png';
import { Col, Row } from 'react-bootstrap';

export function ContactBar() {
    return (
        <Row className='bg-secondary contact-bar'>
            <Col md={41}>
                <Row>
                    <Image className='shadow' src={github} alt='super hero known as Takedown' />
                    <span>cllevett</span>
                </Row>
            </Col>
            <Col md={4}>
                <Row>
                    <Image className='shadow' src={discord} alt='super hero known as Takedown' />
                    <span>Necoya #7621</span>
                </Row>
            </Col>
            <Col md={4}>
                <Row>
                    <Image className='shadow' src={linkedin} alt='super hero known as Takedown' />
                    <span>LinkedIn</span>
                </Row>
            </Col>
        </Row>
    );
}