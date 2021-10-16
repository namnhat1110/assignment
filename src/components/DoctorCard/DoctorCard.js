import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
import './style.css'

const DoctorCard = ({ ...doctor }) => {
    return (
        <div>
            <Card className="doctor-card" style={{ width: '80%' }}>
                <Card.Body>
                    <Row>
                        <Col lg="4">
                            <Card.Img src={`${doctor.avatar}`} />
                        </Col>
                        <Col lg="8">
                            <Card.Title className="mb-2">{doctor.display_name}</Card.Title>
                            <Card.Subtitle className="mb-1">
                                <ReactStars
                                    count={doctor.rating}
                                    size={24}
                                    color="#ffd700"
                                />
                            </Card.Subtitle>
                            <Card.Text className="mb-2">
                                <p>
                                    {doctor.specialty?.map(specialty => {
                                        return (
                                            <Button style={{ background: '#4AC0A4', border: 'none' }}>{specialty.name}</Button>
                                        )
                                    })}
                                </p>
                            </Card.Text>
                            <Card.Text>
                                <p>{doctor.clinic_name}</p>
                                <p>{doctor.clinic_address}</p>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DoctorCard
