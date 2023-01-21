import { Table, Tag, Dropdown, Button, Typography } from 'antd';
import { CheckSquareOutlined, CloseSquareOutlined, InfoCircleOutlined,  MoreOutlined } from '@ant-design/icons';
import React from 'react';

const { Text, Link } = Typography;

const items = [
	{
		label: <Text type="success">Accept</Text>,
		key: '1',
		icon: <CheckSquareOutlined style={{color:'#52c41a'}}/>,
	},
	{
		label: <Text type="danger">Reject</Text>,
		key: '2',
		icon: <CloseSquareOutlined style={{color:'#ff4d4f'}}/>,
	},
	{
		label: <Text type="warning">View Profile</Text>,
		key: '3',
		icon: <InfoCircleOutlined style={{color:'#faad14'}}/>,
	},
];
  
const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Company',
		dataIndex: 'company',
		key: 'company'
	},
	{
		title: 'Job Title / Role',
		dataIndex: 'jobTitle',
		key: 'jobTitle'
	},
	{
		title: 'Salary',
		dataIndex: 'salary',
		key: 'salary'
	},
	{
		title: 'Job Type',
		dataIndex: 'jobType',
		key: 'jobType'
	},
	{
		title: 'Interview Status',
		dataIndex: 'interviewStatus',
		key: 'interviewStatus'
	},
	{
		title: 'Actions',
		dataIndex: 'actions',
		key: 'actions'
	}
];

const data = [
	{
		key: 1,
		id: 1,
		company:'Novi Financial Inc',
		jobTitle: 'Full Stack Developer',
		salary: '50000 to 75000',
		jobType: 'Remote',
		interviewStatus:<Tag color="warning">HR Round</Tag>,
		actions:<>
			<Dropdown
				menu={{
				items,
				}}
				placement="bottom"
			>
				<Button><MoreOutlined /></Button>
      		</Dropdown>
		</>
	},
	{
		key: 1,
		id: 1,
		company:'Alphabet Inc',
		jobTitle: 'NodeJs Developer',
		salary: '80000 to 95000',
		jobType: 'Hybrid',
		interviewStatus:<Tag color="success">Tech Round</Tag>,
		actions:<>
			<Dropdown
				menu={{
				items,
				}}
				placement="bottom"
			>
				<Button><MoreOutlined /></Button>
      		</Dropdown>
		</>
	},
];

function JobOpportunities() {
	return (
		<>
			<h1>Job Opportunities</h1>
			<Table 
				columns={columns}
				dataSource={data}
				pagination={false}
			/>
		</>
	);
}

export default JobOpportunities;
