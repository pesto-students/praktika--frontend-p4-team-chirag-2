import React from "react";
import { Form, Select, InputNumber } from "formik-antd";
import { Row, Col, Divider } from "antd";
// import './style.css';

function WorkInformation({ updateRender }) {
	return (
		<>
			<Row className="work-information">
				<Col span={24}>
					<h2>Work Information</h2>
					<p className="hp-p1-body hp-mb-0">
						Add you work related details like skills, categoty etc
					</p>
					<Divider />
				</Col>
				<Col span={24}>
					<Row gutter={[16]}>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Job Category:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="job_category_id"
							>
								<Select name="job_category_id">
									<Select.Option value="city-1">City 1</Select.Option>
									<Select.Option value="city-2">City 2</Select.Option>
									<Select.Option value="city-3">City 3</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Total Experience:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="total_experience"
							>
								<InputNumber
									addonAfter="Years"
									min={0}
									max={100}
									name="total_experience"
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Currency:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="currency_id"
							>
								<Select name="currency_id">
									<Select.Option value="1">INR</Select.Option>
									<Select.Option value="2">USD</Select.Option>
									<Select.Option value="3">Other</Select.Option>
								</Select>
							</Form.Item>
						</Col>
						<Col md={12} span={24}></Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Current CTC:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="current_ctc"
							>
								<InputNumber
									addonAfter="USD"
									min={0}
									max={100}
									name="current_ctc"
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Expected CTC:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="expected_ctc"
							>
								<InputNumber
									addonAfter="USD"
									min={0}
									max={100}
									name="expected_ctc"
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Skills:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="skills"
							>
								<Select name="skills">
									<Select.Option value="1">Skill 1</Select.Option>
									<Select.Option value="2">Skill 2</Select.Option>
									<Select.Option value="3">Skill 3</Select.Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default WorkInformation;
