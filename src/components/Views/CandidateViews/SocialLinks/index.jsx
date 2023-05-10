import React from 'react';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Row, Col, Divider } from 'antd';
import {
	LinkedinOutlined,
	GithubOutlined,
	FacebookOutlined,
	TwitterOutlined
} from '@ant-design/icons';
// import './style.css';

function SocialLinks({ updateRender }) {
	return (
		<>
			<Row className='social-links'>
				<Col span={24}>
					<h2>Add your social links</h2>
					<p className='hp-p1-body hp-mb-0'>
						Showcase your social links, website here
					</p>
					<Divider />
				</Col>
				<Col span={24}>
					<Row gutter={[16]}>
						<Col md={24} span={24}>
							<Form.Item label='Portfolio / Website:' name='website'>
								<Input addonBefore='https://' name='website' defaultValue='' />
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item label='LinkedIn:' name='linkedin'>
								<Input
									addonBefore={<LinkedinOutlined />}
									name='linkedin'
									defaultValue=''
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item label='GitHub:' name='github'>
								<Input
									addonBefore={<GithubOutlined />}
									name='github'
									defaultValue=''
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item label='Facebook:' name='facebook'>
								<Input
									addonBefore={<FacebookOutlined />}
									name='facebook'
									defaultValue=''
								/>
							</Form.Item>
						</Col>
						<Col md={12} span={24}>
							<Form.Item label='Twitter:' name='twitter'>
								<Input
									addonBefore={<TwitterOutlined />}
									name='twitter'
									defaultValue=''
								/>
							</Form.Item>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
}

export default SocialLinks;
