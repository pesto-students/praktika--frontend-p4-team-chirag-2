import React from 'react';
import { Menu } from 'antd';
import {
	MenuFoldOutlined,
	//SolutionOutlined,
	UserSwitchOutlined
	// BankOutlined,
	// FileOutlined,
	// VideoCameraOutlined,
	// LinkOutlined
} from '@ant-design/icons';
import PraktikaLogo from '../../../../Logo/index';

function SidebarContent({ updateRender }) {
	return (
		<>
			<PraktikaLogo />
			<span style={{ marginLeft: '2em', fontWeight: 'bold' }}>CANDIDATE</span>
			<Menu
				mode='inline'
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '1',
						icon: <MenuFoldOutlined />,
						label: 'Job Opportunities',
						onClick: () => updateRender('1')
					},
					{
						icon: <UserSwitchOutlined />,
						label: 'My Profile',
						onClick: () => updateRender('3')
						// children: [
						// 			{
						// 				key: '2',
						// 				icon: <SolutionOutlined />,
						// 				label: 'Personal',
						// 				onClick: () => updateRender('2')
						// 			},
						// 			{
						// 				key: '3',
						// 				icon: <BankOutlined />,
						// 				label: 'Work',
						// 				onClick: () => updateRender('3')
						// 			},
						// 			{
						// 				key: '4',
						// 				icon: <MenuFoldOutlined />,
						// 				label: 'Experience',
						// 				onClick: () => updateRender('4')
						// 			},
						// 			{
						// 				key: '5',
						// 				icon: <FileOutlined />,
						// 				label: 'Resume',
						// 				onClick: () => updateRender('5')
						// 			},
						// 			{
						// 				key: '6',
						// 				icon: <VideoCameraOutlined />,
						// 				label: 'Video',
						// 				onClick: () => updateRender('6')
						// 			},
						// 			{
						// 				key: '7',
						// 				icon: <LinkOutlined />,
						// 				label: 'Social Links',
						// 				onClick: () => updateRender('7')
						// 			}
						// 		]
					}
				]}
			/>
		</>
	);
}

export default SidebarContent;
