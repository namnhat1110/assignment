import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap';

import doctorAction from '../../redux/actions/doctor.action'

const SortBar = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(doctorAction.getDoctors());
    }, [dispatch]);

    const state = useSelector(state => state)
    const doctors = state.doctors.doctors

    return (
        <div>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Sắp xếp theo
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Khoảng cách"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            style={{ borderRadius: "10px", background: '#4AC0A4', maxWidth: 'max-content', marginBottom: 5, padding: 3 }}
                        />
                        <Form.Check
                            type="radio"
                            label="Đánh giá"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            style={{ borderRadius: "10px", background: '#4AC0A4', maxWidth: 'max-content', padding: 3 }}
                            onClick={() => {
                                dispatch(doctorAction.getDoctors(doctors.sort((a, b) => a.rating - b.rating)))
                            }, [dispatch]}
                        />
                    </Col>
                    <Form.Label as="legend" column sm={2}>
                        Lọc kết quả
                    </Form.Label>
                    <Col sm={3}>
                        <Form.Check
                            type="radio"
                            label="Tiếng Việt"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            style={{ borderRadius: "10px", background: '#4AC0A4', maxWidth: 'max-content', marginBottom: 5, padding: 3 }}
                        />
                        <Form.Check
                            type="radio"
                            label="English"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            style={{ borderRadius: "10px", background: '#4AC0A4', maxWidth: 'max-content', marginBottom: 5, padding: 3 }}
                        />
                        <Form.Check
                            type="radio"
                            label="Francais"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios5"
                            style={{ borderRadius: "10px", background: '#4AC0A4', maxWidth: 'max-content', padding: 3 }}
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div >
    )
}

export default SortBar
