import React, { useState } from 'react';
import { Col, Form, Input, Button, Radio, Spin, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../utils/API/api';
import PraktikaLogo from '../../Logo';

function RightContent({ setToken }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	function registerUser(e) {
		e.preventDefault();
		let signupForm = document.forms['signup-form'];
		let role_id = signupForm['role_id'].value;
		let email = signupForm['email'].value;
		let password = signupForm['password'].value;
		let mobile_no = signupForm['mobile_no'].value;

		const registerData = {
			email,
			password,
			mobile_no,
			role_id
		};

		setLoading(true);

		if (validateForm(registerData)) {
			API.registerUser(registerData)
				.then(({ data, status }) => {
					if (status === 200 && data.status === 1) {
						if (data.data.role_id && data.data.role_id === 2) {
							setToken(data.data.token);
							notification.success({
								message: 'Registration Successful!',
								description: 'Registration Successful!'
							});
							setTimeout(() => navigate('/dashboard'), 1000);
						} else if (data.data.role_id && data.data.role_id === 1) {
							setToken(data.data.token);
							notification.success({
								message: 'Registration Successful!',
								description: 'Registration Successful!'
							});
							setTimeout(() => navigate('/candidate'), 1000);
						}
					} else navigate('/');
				})
				.catch((err) => {
					console.error('e', err);
					setLoading(false);
					notification.error({
						message: err
					});
					navigate('/');
				});
		}
	}

	function validateForm(registerData) {
		if (
			registerData.role_id === '' ||
			registerData.email === '' ||
			registerData.password === '' ||
			registerData.mobile_no === ''
		) {
			alert('Please fill all the fields correctly!');
			setLoading(false);
			return false;
		} else return true;
	}
	return (
		<Col className='right-content-block'>
			<span className='mini-logo-item'>
				<PraktikaLogo />
			</span>
			<div style={{ textAlign: 'justify' }}>
				<h1>Create an account</h1>
				<p>Create your account to start using Praktika.</p>
				<Form
					layout='vertical'
					name='signup-form'
					initialValues={{ remember: true }}
				>
					<p>
						Who are you?&nbsp;&nbsp;&nbsp;
						<Radio.Group name='role_id'>
							<Radio value={1}>Candidate</Radio>
							<Radio value={2}>Recruiter</Radio>
						</Radio.Group>
					</p>

					<Form.Item label='Email address :'>
						<Input name='email' defaultValue={'project@pesto.com'} />
					</Form.Item>

					<Form.Item label='Password :'>
						<Input.Password name='password' defaultValue={11111111} />
					</Form.Item>

					<Form.Item label='Mobile number :'>
						<Input name='mobile_no' defaultValue={9999999999} />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' onClick={registerUser}>
							Get Started
						</Button>
						<span style={{ marginLeft: '1em' }}>
							<Spin spinning={loading} size='large' />
						</span>
					</Form.Item>
				</Form>
				<span>Already have an account? </span>
				<Link to='/login' style={{ color: 'blue' }}>
					Sign in here
				</Link>
			</div>
		</Col>
	);
}

export default RightContent;
