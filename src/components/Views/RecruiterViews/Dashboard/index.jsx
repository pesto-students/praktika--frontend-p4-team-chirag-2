import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import {
	CalendarOutlined,
	HistoryOutlined,
	SolutionOutlined
} from '@ant-design/icons';
import VacancyTable from './VacancyTable';
import UpcomingInterviews from './UpcomingInterviews';
import API from '../../../../utils/API/api';

function DashboardContent({ token }) {
	const [interviewsToday, setInterviewsToday] = useState(0);
	const [pendingInterviews, setPendingInterviews] = useState(0);
	const [vacancies, setVacancies] = useState(0);
	function getDashboardCounts(token) {
		API.getDashboardCounts(token)
			.then(({ data }) => {
				setInterviewsToday(data.interviewtodayCount);
				setPendingInterviews(data.pendinginterviewCount);
				setVacancies(data.numberofvacancyCount);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getDashboardCounts(token);
	}, []);
	return (
		<>
			<h1>Dashboard</h1>
			<Row>
				<Col span={8}>
					<Card
						title='Interviews today'
						extra={<CalendarOutlined />}
						style={{
							width: 250,
							color: '#20C0B7',
							textAlign: 'center'
						}}
					>
						<span style={{ fontSize: '5em' }}>{interviewsToday}</span>
					</Card>
				</Col>
				<Col span={8}>
					<Card
						title='Pending Interviews'
						extra={<HistoryOutlined />}
						style={{
							width: 250,
							color: '#FF0022',
							textAlign: 'center'
						}}
					>
						<span style={{ fontSize: '5em' }}>{pendingInterviews}</span>
					</Card>
				</Col>
				<Col span={8}>
					<Card
						title='Available Vacancy'
						extra={<SolutionOutlined />}
						style={{
							width: 250,
							color: '#4A7FE8',
							textAlign: 'center'
						}}
					>
						<span style={{ fontSize: '5em' }}>{vacancies}</span>
					</Card>
				</Col>
			</Row>
			<br />
			<Row>
				<Col span={12}>
					<VacancyTable token={token} />
				</Col>
				<Col span={12}>
					<UpcomingInterviews token={token} />
				</Col>
			</Row>
		</>
	);
}

export default DashboardContent;
