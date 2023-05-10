import React, { useState, useEffect } from 'react';
import { Row, Col, Divider, Button } from 'antd';
import API from '../../../../utils/API/api';

function ViewProfile({ token, updateRender }) {
	const [profileData, setProfileData] = useState('');

	const fetchProfileData = (token) => {
		API.getProfileData(token).then(({ data, status }) => {
			setProfileData(data);
		}).then(() => {console.log(profileData)});
	};

	useEffect(() => {
		fetchProfileData(token);
	}, []);

	return (
		<Row className='profile'>
			{(profileData) ?
			<Col span={24} md={12}>
				<h2>Personal Information</h2>
				<p>First Name : {profileData.first_name}</p>
				<p>Last Name : {profileData.last_name}</p>
				<Divider />
				<Row>
					<Col span={24} md={12}>
						<h2>Current Address</h2>
						<p>{profileData.current_address_line_1}</p>
						<p>{profileData.current_address_line_2}</p>
						<p>{profileData.current_zip_code}</p>
					</Col>
					<Col span={24} md={12}>
						<h2>Permanent Address</h2>
						<p>{profileData.permanent_address_line_1}</p>
						<p>{profileData.permanent_address_line_2}</p>
						<p>{profileData.permanent_zip_code}</p>
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={24} md={12}>
						<h2>Social Links</h2>
						<p>LinkedIn: {profileData.linked_link}</p>
						<p>Facebook: {profileData.facebook_link}</p>
					</Col>
					<Col span={24} md={12}>
						<h2>&nbsp;</h2>
						<p>GitHub: {profileData.facebook_link}</p>
						<p>Twitter: {profileData.twitter_link}</p>
					</Col>
				</Row>
			</Col> : ''
			}
			<Col span={24} md={12}>
				<p></p>
				<Button
					onClick={() => {
						updateRender('2');
					}}
				>
					{(profileData) ? 'Edit' : 'Create Profile'}
				</Button>
			</Col>
		</Row>
	);
}

export default ViewProfile;
