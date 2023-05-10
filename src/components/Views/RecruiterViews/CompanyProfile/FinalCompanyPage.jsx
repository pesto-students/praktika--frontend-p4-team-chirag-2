import React, { useEffect, useState } from 'react';
import { Form, Input, ResetButton } from 'formik-antd';
import { Formik } from 'formik';
import { Row, Col, Divider, Button, notification } from 'antd';
import { LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';
import './style.css';
import API from '../../../../utils/API/api';
const { TextArea } = Input;

export default function FinalCompanyPage({ updateRender, token }) {
	const [companyData, setComapnyData] = useState({});
	const [editFlag, setEditFlag] = useState(false);

	function getComanyProfile() {
		API.getCompanyProfile(token)
			.then((res) => {
				if (res.status === 200 && Object.keys(res.data)) {
					setComapnyData(res.data);
				}
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	function updateCompanyProfile(values, token) {
		API.updateCompany(values, token)
			.then(({ status }) => {
				if (status === 200) {
					notification.success({
						message: 'Update Successful!',
						description: 'Update Successful!'
					});
					setEditFlag(false);
					return;
				}
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getComanyProfile();
	}, []);

	return (
		<>
			{' '}
			{companyData && !editFlag ? (
				<div className='contentBox'>
					<h1>Company Information:</h1>
					<Button
						style={{ float: 'right' }}
						onClick={() => setEditFlag(!editFlag)}
					>
						Edit
					</Button>
					<Row span={24}>
						<Col className='profileLabel' span={8}>
							Company Name:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.companyname
								? companyData.companyname
								: 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Company Size:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.companysize
								? companyData.companysize
								: 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Industry:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.industry ? companyData.industry : 'Test blank value'}
						</Col>
					</Row>
					<Divider />
					<h1>Overview:</h1>
					<Row span={24}>
						<Col className='profileLabel' span={8}>
							Overview:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.overview ? companyData.overview : 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Values:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.values ? companyData.values : 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Benefits:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.benefits ? companyData.benefits : 'Test blank value'}
						</Col>
					</Row>
					<Divider />
					<Divider />
					<h1>Social Links:</h1>
					<Row span={24}>
						<Col className='profileLabel' span={8}>
							Website:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.website ? companyData.website : 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Linkedin:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.linkedin ? companyData.linkedin : 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Facebook:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.facebook ? companyData.facebook : 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Crunchbase:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.crunchbase
								? companyData.crunchbase
								: 'Test blank value'}
						</Col>
						<Col className='profileLabel' span={8}>
							Glassdoor:
						</Col>
						<Col className='profileValue' span={16}>
							{companyData.glassdoor
								? companyData.glassdoor
								: 'Test blank value'}
						</Col>
					</Row>
				</div>
			) : (
				<>
					<div id='comapny-prof-form-div'>
						<Formik
							initialValues={companyData}
							onSubmit={(values) => {
								updateCompanyProfile(values, token);
								setComapnyData(values);
								updateRender(5);
							}}
						>
							<Form layout='vertical' className='company-form'>
								<Row>
									<Divider>
										<h1>Update Company Profile</h1>
										<h6>Add your company details like Name, Size, etc</h6>
									</Divider>
									<Col span={24}>
										<Row gutter={[16]}>
											<Col md={12} span={24}>
												<Form.Item
													label={
														<>
															Company Name:
															<span style={{ color: 'red', fontSize: '1em' }}>
																*
															</span>
														</>
													}
													name='companyname'
												>
													<Input name='companyname' />
												</Form.Item>
											</Col>
											<Col md={12} span={24}>
												<Form.Item label='Company Size:' name='companysize'>
													<Input name='companysize' />
												</Form.Item>
											</Col>
											<Col md={12} span={24}>
												<Form.Item label='Industry:' name='industry'>
													<Input name='industry' />
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Divider>
										<h1>Overview</h1>
										<h6>Add your company overview, values, culture etc</h6>
									</Divider>
									<Col span={24}>
										<Row gutter={[16]}>
											<Col md={12} span={24}>
												<Form.Item label='Overview:' name='overview'>
													<TextArea rows={5} name='overview' />
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Col span={24}>
										<Row gutter={[16]}>
											<Col md={12} span={24}>
												<Form.Item label='Values:' name='values'>
													<TextArea rows={5} name='values' />
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Col span={24}>
										<Row gutter={[16]}>
											<Col md={12} span={24}>
												<Form.Item label='Benefits:' name='benefits'>
													<TextArea rows={5} name='benefits' />
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Divider>
										<h1>Social Links</h1>
										<h6>Add your company website and other links</h6>
									</Divider>
									<Col span={24}>
										<Row gutter={[16]}>
											<Col span={24}>
												<Form.Item label='Website:' name='website'>
													<Input addonBefore='https://' name='website' />
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label='LinkedIn:' name='linkedin'>
													<Input
														addonBefore={<LinkedinOutlined />}
														name='linkedin'
													/>
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label='Facebook:' name='facebook'>
													<Input
														addonBefore={<FacebookOutlined />}
														name='facebook'
													/>
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label='Glassdoor:' name='glassdoor'>
													<Input addonBefore='https://' name='glassdoor' />
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label='CrunchBase:' name='crunchbase'>
													<Input addonBefore='https://' name='crunchbase' />
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Col span={24} style={{ textAlign: 'center' }}>
										<div className='button-actions-div'>
											<Button
												type='primary'
												htmlType='submit'
												onClick={updateCompanyProfile}
											>
												Update
											</Button>
											<ResetButton>Reset</ResetButton>
										</div>
									</Col>
								</Row>
							</Form>
						</Formik>
					</div>
				</>
			)}
		</>
	);
}
