import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import API from '../../../../utils/API/api';

const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Company Name',
		dataIndex: 'companyName',
		key: 'companyName'
	},
	{
		title: 'Experience',
		dataIndex: 'experience',
		key: 'experience'
	},
	{
		title: 'Title/Role',
		dataIndex: 'role',
		key: 'role'
	}
];

const data = [
	{
		key: 1,
		id: 1,
		name: 'Steve Jobs',
		companyName: 'Apple Inc.',
		role: 'Software Developer',
		experience: '25 years'
	},
	{
		key: 2,
		id: 2,
		name: 'Steve Wozniac',
		companyName: 'Apple Inc.',
		role: 'Software Developer',
		experience: '12 years'
	},
	{
		key: 3,
		id: 3,
		name: 'Johnny Ive',
		companyName: 'Apple Inc.',
		role: 'Software Developer',
		experience: '15 years'
	},
	{
		key: 4,
		id: 4,
		name: 'Brian Adams',
		companyName: 'iTunes Inc.',
		role: 'Software Developer',
		experience: '20 years'
	}
];

function Candidates() {
	const [candiadatesData, setCandidatesData] = useState(null);

	function getCandidateList(token) {
		API.getCandidateList(token)
			.then((res) => {
				console.log('candidate list data: ', res.data);
				setCandidatesData(res.data);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getCandidateList();
	}, []);

	return (
		<>
			<h1>List of Candidates</h1>
			<Table
				columns={columns}
				dataSource={candiadatesData ? candiadatesData : data}
				pagination={false}
			/>
		</>
	);
}

export default Candidates;
