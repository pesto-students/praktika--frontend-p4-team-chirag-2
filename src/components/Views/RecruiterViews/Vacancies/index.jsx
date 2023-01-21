import React, { useState, useEffect } from 'react';
import { Form, Input, SubmitButton, ResetButton, Select } from 'formik-antd';
import { Formik } from 'formik';
import { Divider, Row, Col } from 'antd';
import './style.css';
import API from '../../../../utils/API/api';
const { TextArea } = Input;

function Vacancies({ updateRender, token }) {
	const [countryOptions, setCountryOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);
	const [stateOptions, setStateOptions] = useState([]);
	const [jobCategoryOptions, setJobCategoryOptions] = useState([]);

	function createVacancy(values, token) {
		API.createVacancy(values, token)
			.then((res) => {
				console.log('create vacancy API res: ', res);
				return;
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	const fetchCountries = (token) => {
		API.getAllCountries(token)
			.then(({ data }) => {
				let options = data.map((key) => {
					return {
						label: key.name,
						value: key.id
					};
				});
				setCountryOptions(options);
			})
			.catch((err) => {
				console.log('e', err);
			});
	};

	const fetchState = (countryId, token) => {
		API.getAllSates(countryId, token)
			.then(({ data }) => {
				let options = data.map((key) => {
					return {
						label: key.name,
						value: key.id
					};
				});
				setStateOptions(options);
			})
			.catch((err) => {
				console.log('e', err);
			});
	};

	const fetchCities = (stateId, token) => {
		API.getAllCities(stateId, token)
			.then(({ data }) => {
				let options = data.map((key) => {
					return {
						label: key.name,
						value: key.id
					};
				});
				setCityOptions(options);
			})
			.catch((err) => {
				console.log('e', err);
			});
	};

	const fetchJobCategories = (token) => {
		API.getAllJobCategories(token)
			.then(({ data }) => {
				let options = data.map((key) => {
					return {
						label: key.name,
						value: key.id
					};
				});
				setJobCategoryOptions(options);
			})
			.catch((err) => {
				console.log('e', err);
			});
	};

	useEffect(() => {
		fetchCountries(token);
		fetchJobCategories(token);
	}, []);

	return (
		<>
			<div id='vacancy-form-div'>
				<Formik
					initialValues={{
						jobtitle: '',
						jobdescription: '',
						numberofvacancy: '',
						jobcategory: '',
						jobtype: '',
						city: '',
						state: '',
						country: '',
						experiencelevel: '',
						minimumexperience: '',
						maximumexperience: '',
						currency: '',
						expectedsalaryfrom: '',
						expectedsalaryto: '',
						skills: []
					}}
					validate={(values) => {
						const errors = {};
						if (!values.jobtitle) {
							errors.company_name = 'Required';
						} else if (!values.expectedsalaryfrom) {
							errors.company_name = 'Required';
						} else if (values.skills.length === 0) {
							errors.skills = 'Required';
						} else if (!values.experiencelevel) {
							errors.experiencelevel = 'Required';
						}
						return errors;
					}}
					onSubmit={(values) => {
						createVacancy(values, token);
						updateRender('6');
					}}
				>
					<Form layout='vertical' className='vacancy-form'>
						<Row>
							<Divider>
								<h1>Create Vacancy</h1>
								<h6>Add job details like role, type, salary, location, etc.</h6>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Job title / Role:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='jobtitle'
										>
											<Input name='jobtitle' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Description:' name='jobdescription'>
											<TextArea rows={5} name='jobdescription' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label='Number of Vacancies:'
											name='numberofvacancy'
										>
											<Input name='numberofvacancy' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Category:' name='jobcategory'>
											<Select
												name='jobcategory'
												options={jobCategoryOptions}
											></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Job Type:' name='jobtype'>
											<Input name='jobtype' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Location</h1>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Country:' name='country'>
											<Select
												name='country'
												options={countryOptions}
												onSelect={(value) => fetchState(value, token)}
											></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='State:' name='state'>
											<Select
												name='state'
												options={stateOptions}
												onSelect={(value) => fetchCities(value, token)}
											></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='City:' name='city'>
											<Select name='city' options={cityOptions}></Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Divider>
								<h1>Experience</h1>
							</Divider>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Experience Level:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='experiencelevel'
										>
											<Input name='experiencelevel' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Min. Experience:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='minimumexperience'
										>
											<Input name='minimumexperience' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label='Max. Experience:'
											name='maximumexperience'
										>
											<Input name='maximumexperience' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Currency:' name='currency'>
											<Select name='currency'>
												<Select.Option value='1'>INR</Select.Option>
												<Select.Option value='2'>USD</Select.Option>
												<Select.Option value='3'>Other</Select.Option>
											</Select>
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Min. Salary:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='expectedsalaryfrom'
										>
											<Input name='expectedsalaryfrom' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item label='Max. Salary:' name='expectedsalaryto'>
											<Input name='expectedsalaryto' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<Form.Item
											label={
												<>
													Skills:
													<span style={{ color: 'red', fontSize: '1em' }}>
														*
													</span>
												</>
											}
											name='skills'
										>
											<Input name='skills' />
										</Form.Item>
									</Col>
								</Row>
							</Col>
							<Col span={24}>
								<Row gutter={[16]}>
									<Col md={12} span={24}>
										<div className='button-actions-div'>
											<SubmitButton>Save</SubmitButton>
											<ResetButton>Reset</ResetButton>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Form>
				</Formik>
			</div>
		</>
	);
}

export default Vacancies;
