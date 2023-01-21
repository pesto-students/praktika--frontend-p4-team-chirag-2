import React from 'react';
import { Form, Input, DatePicker } from 'formik-antd';
import { Row, Col, Divider } from 'antd';
// import './style.css';
const { TextArea } = Input;

function Experience({ updateRender }) {
	return (
		<>
            <Row className='experience'>
                <Col span={24}>
                    <h2>Work experience details</h2>
                    <p className="hp-p1-body hp-mb-0">
                        Add you work related details like company name, role, duration etc.
                    </p>
                    <Divider/>
                </Col>
                <Col span={24}>
                    <Row gutter={[16]}>
                        <Col md={12} span={24}>
                            <Form.Item
                                label={
                                    <>
                                        Search your company:
                                    </>
                                }
                                name="company"
                            >
                                <Input addonAfter="Search"  name="company" />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={24}>
                            <Form.Item
                                label={
                                    <>
                                        Role / Designation:
                                    </>
                                }
                                name="role"
                            >
                                <Input  name="role" />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={24}>
                            <Form.Item
                                label={
                                    <>
                                        Start Date:
                                    </>
                                }
                                name="start_date"
                            >
                                <DatePicker  name="start_date" />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={24}>
                            <Form.Item
                                label={
                                    <>
                                        End Date:
                                    </>
                                }
                                name="end_date"
                            >
                                <DatePicker  name="end_date" />
                            </Form.Item>
                        </Col>
                        <Col md={12} span={24}>
                            <Form.Item
                                label={
                                    <>
                                        Description:
                                    </>
                                }
                                name="description"
                            >
                                <TextArea  name="description" rows={4}/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Experience;