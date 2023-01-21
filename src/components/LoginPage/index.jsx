import React from 'react';
import { Col, Row } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
// import { useOutletContext } from 'react-router-dom';

function LoginPage({ setToken }) {
	// const obj = useOutletContext();
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

export default LoginPage;
