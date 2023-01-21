import React from "react";
import { Form, Input, Select, ResetButton } from "formik-antd";
import { Row, Col, Divider } from "antd";
// import './style.css';
const { TextArea } = Input;

function PersonalInformation({ updateRender }) {
	return (
		<>
			<Row className="candidate-form">
				<Col span={24}>
					<h2>Personal Information</h2>
					<p className="hp-p1-body hp-mb-0">
						Add you personal details like full name, address details etc
					</p>
					<Divider />
				</Col>
				<Col span={24}>
					<Row gutter={[16]}>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										First Name:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="first_name"
							>
								<Input name="first_name" />
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Last Name:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="last_name"
							>
								<Input name="last_name" />
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Email Address:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="email"
							>
								<Input name="email" type="email" />
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item
								label={
									<>
										Phone Number:
										<span style={{ color: "red", fontSize: "1em" }}>*</span>
									</>
								}
								name="phone"
							>
								<Input name="phone" type="tel" />
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<h4>Current Address</h4>
							<Row>
								<Col md={24} span={24}>
									<Form.Item
										label={
											<>
												Address Line 1:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="current_address_line_1"
									>
										<Input name="current_address_line_1" />
									</Form.Item>
								</Col>
								<Col md={24} span={24}>
									<Form.Item
										label={
											<>
												Address Line 2:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="current_address_line_2"
									>
										<Input name="current_address_line_2" />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Country:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="current_country"
									>
										<Select
											name="current_country"
											style={{ marginRight: "10px" }}
										>
											<Select.Option value="country-1">Country 1</Select.Option>
											<Select.Option value="country-2">Country 2</Select.Option>
											<Select.Option value="country-3">Country 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												State:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="current_state"
									>
										<Select name="current_state">
											<Select.Option value="state-1">State 1</Select.Option>
											<Select.Option value="state-2">State 2</Select.Option>
											<Select.Option value="state-3">State 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												City:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="current_city"
									>
										<Select name="current_city">
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
												Zipcode:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="cur_zipcode"
									>
										<Input name="cur_zipcode" type="tel" />
									</Form.Item>
								</Col>
							</Row>
						</Col>
						<Col md={12} span={24}>
							<h4>Permenant Address</h4>
							<Row>
								<Col md={24} span={24}>
									<Form.Item
										label={
											<>
												Address Line 1:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_address_line_1"
									>
										<Input name="permanent_address_line_1" />
									</Form.Item>
								</Col>
								<Col md={24} span={24}>
									<Form.Item
										label={
											<>
												Address Line 2:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_address_line_2"
									>
										<Input name="permanent_address_line_2" />
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												Country:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_country"
									>
										<Select
											name="permanent_country"
											style={{ marginRight: "10px" }}
										>
											<Select.Option value="country-1">Country 1</Select.Option>
											<Select.Option value="country-2">Country 2</Select.Option>
											<Select.Option value="country-3">Country 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												State:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_state"
									>
										<Select name="permanent_state">
											<Select.Option value="state-1">State 1</Select.Option>
											<Select.Option value="state-2">State 2</Select.Option>
											<Select.Option value="state-3">State 3</Select.Option>
										</Select>
									</Form.Item>
								</Col>
								<Col md={12} span={24}>
									<Form.Item
										label={
											<>
												City:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_city"
									>
										<Select name="permanent_city">
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
												Zipcode:
												<span style={{ color: "red", fontSize: "1em" }}>*</span>
											</>
										}
										name="permanent_zip_code"
									>
										<Input name="permanent_zip_code" type="tel" />
									</Form.Item>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default PersonalInformation;
