import React from 'react';
import { Row, Col } from 'antd';
import backgtoundImage from '../../../assets/images/landingPage/langingImage.svg';
import PraktikaLogo from '../../Logo';

function LeftContent() {
	return (
		<Row className='left-content-block'>
			<Col
				className='hp-logo-item'
				style={{ width: '150px', height: 'auto', margin: '2em' }}
			>
				<PraktikaLogo />
			</Col>

			<img src={backgtoundImage} alt='Background' className='background-img' />
		</Row>
	);
}

export default LeftContent;
