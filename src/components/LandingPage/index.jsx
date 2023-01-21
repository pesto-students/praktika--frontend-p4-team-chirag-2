import React from 'react';
import { Col, Row } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function LandingPage({ setToken }) {
	return (
		<Row>
			<Col span={12}>
				<LeftContent />
			</Col>
			<Col span={12}>
				<RightContent setToken={setToken} />
			</Col>
		</Row>
	);
}

export default LandingPage;
