import React from 'react';
import { Col, Row } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function LandingPage({ setToken }) {
	return (
		<Row className='content-row'>
			<Col span={12} className='left-content-col'>
				<LeftContent />
			</Col>
			<Col span={12} className='right-content-col'>
				<RightContent setToken={setToken} />
			</Col>
		</Row>
	);
}

export default LandingPage;
