import React from 'react';
import { Row, Col } from 'antd';
import backgtoundImage from '../../../assets/images/landingPage/langingImage.svg';
import PraktikaLogo from '../../Logo';

function LeftContent() {
	return (
		<Row>
			<Col
				className='hp-logo-item'
				style={{ width: '150px', height: 'auto', margin: '2em' }}
			>
				<PraktikaLogo />
			</Col>

			<img
				src={backgtoundImage}
				alt='Background'
				className='hp-w-100'
				style={{
					height: '300px',
					marginTop: '8em',
					position: 'relative',
					right: '108px'
				}}
			/>
		</Row>
	);
}

export default LeftContent;
