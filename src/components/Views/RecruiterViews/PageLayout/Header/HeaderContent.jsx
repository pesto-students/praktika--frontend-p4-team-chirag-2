import React from 'react';
import { Col, Row } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function HeaderContent() {
	const navigate = useNavigate();
	function logOutUser() {
		navigate('/login');
	}

	return (
		<>
			<Row justify='center'>
				<Col span={24}>
					<Row className='' align='middle' justify='space-between'>
						<Col></Col>

						<Col>
							<Row align='middle'>
								<div style={{ marginRight: '10px' }}></div>
								<div className='header-icon'></div>
								<div className='header-icon' title='Logout'>
									<LogoutOutlined
										style={{ fontSize: '2em' }}
										onClick={logOutUser}
									/>
								</div>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default HeaderContent;
