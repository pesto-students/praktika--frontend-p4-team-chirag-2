import React, { useEffect, useState } from 'react';
import { Table, Card } from 'antd';
import API from '../../../../../utils/API/api';

const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Job Title / Role',
		dataIndex: 'jobTitle',
		key: 'jobTitle'
	},
	{
		title: 'Vacancies',
		dataIndex: 'vacancies',
		key: 'vacancies'
	},
	{
		title: 'Experience',
		dataIndex: 'experience',
		key: 'experience'
	}
];

const data = [
	{
		key: 1,
		id: 1,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '5 years'
	},
	{
		key: 2,
		id: 2,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '10 years'
	},
	{
		key: 3,
		id: 3,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '15 years'
	},
	{
		key: 4,
		id: 4,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '20 years'
	}
];

function VacancyTable({ token }) {
	const [vacancyData, setVacancyData] = useState(data);

	function getVacancyData(token) {
		API.getVacancyData(token).then((res) => {
			console.log('vacancy data: ', res.data);
			setVacancyData(res.data);
		});
	}

	useEffect(() => {
		getVacancyData(token);
	}, []);

	const mainData = [];
	vacancyData.map((item, index) => {
		const vacancyObject = {
			key: index,
			id: index + 1,
			jobTitle: item.jobtitle,
			vacancies: item.numberofvacancy,
			experience: item.experiencelevel + ' years'
		};
		mainData.push(vacancyObject);
	});
	return (
		<>
			<Card
				title='Pending Vacancies'
				style={{
					width: '105%'
				}}
			>
				<Table
					fixed={true}
					columns={columns}
					dataSource={mainData.length > 0 ? mainData : vacancyData}
					pagination={false}
					style={{
						height: '20em',
						overflowY: 'scroll',
						overflowX: 'visible'
					}}
				/>
			</Card>
		</>
	);
}

export default VacancyTable;
