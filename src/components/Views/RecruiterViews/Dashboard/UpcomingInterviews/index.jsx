import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import moment from 'moment';
import API from '../../../../../utils/API/api';

function UpcomingInterviews({ token }) {
	const [interviewList, setInterviewList] = useState([]);

	function getUpcomingInterviews(token) {
		API.getUpcomingInterviews(token)
			.then((res) => {
				setInterviewList(res.data);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getUpcomingInterviews(token);
	}, []);

	return (
		<>
			<Card
				title='Upcoming Interviews'
				style={{
					width: '85%',
					marginLeft: '10%'
				}}
			>
				{interviewList.length > 0 ? (
					interviewList.map((item) => (
						<>
							<div className='interviewBlock'>
								<ul>
									<li>
										Name:{' '}
										<span style={{ textTransform: 'capitalize' }}>
											{item.user.first_name}&nbsp;{item.user.last_name}
										</span>
									</li>
									<li>
										Role:{' '}
										<span style={{ textTransform: 'capitalize' }}>
											{item.vacancy.jobtitle}
										</span>
									</li>

									<li>
										Time:{' '}
										<span style={{ color: 'red' }}>
											{moment(item.interviewdate).format('ddd, LL, h:mm A')}
										</span>
									</li>
								</ul>
							</div>
							<Divider />
						</>
					))
				) : (
					<>
						<p>Interview 1 content</p>
						<p>Interview 2 content</p>
						<p>Interview 3 content</p>
					</>
				)}
			</Card>
		</>
	);
}

export default UpcomingInterviews;
