import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Button } from 'antd';
import API from '../../../../utils/API/api';

function FinalVacancyListings({ token, updateRender }) {
	const [vacancyData, setVacancyData] = useState([]);

	function getComanyProfile(token) {
		API.getVacancyInfo(token)
			.then((res) => {
				if (res.status === 200 && Object.keys(res.data)) {
					setVacancyData(res.data.pop());
				}
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	function deleteVacancy(id, token) {
		API.deleteVacancy(id, token)
			.then((res) => {
				console.log('deleted!', res);
				updateRender(1);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getComanyProfile(token);
	}, []);

	return (
		<>
			<div className='contentBox'>
				<h1>Vacancy Information:</h1>
				<Button
					danger
					style={{ float: 'right' }}
					onClick={() => deleteVacancy(vacancyData.id, token)}
				>
					Delete Vacancy
				</Button>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Role Name:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.jobtitle ? vacancyData.jobtitle : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Job Description:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.jobdescription
							? vacancyData.jobdescription
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Vacancies:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.numberofvacancy
							? vacancyData.numberofvacancy
							: 'Test blank value'}
					</Col>
				</Row>
				<Divider />
				<h1>Overview:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Min. Experience:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.minimumexperience
							? vacancyData.minimumexperience + ' years'
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Max. Experience:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.maximumexperience
							? vacancyData.maximumexperience + ' years'
							: 'Test blank value'}
					</Col>
				</Row>
				<Divider />
				<Divider />
				<h1>Salary Expectations:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Min. Salary:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.expectedsalaryfrom
							? vacancyData.expectedsalaryfrom
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Max. Salary:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.expectedsalaryto
							? vacancyData.expectedsalaryto
							: 'Test blank value'}
					</Col>
				</Row>
			</div>
		</>
	);
}

export default FinalVacancyListings;
