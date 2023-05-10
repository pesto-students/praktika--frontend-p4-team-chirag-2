import React from 'react';
import { Menu } from 'antd';
import {
	MenuFoldOutlined,
	UploadOutlined,
	UserSwitchOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons';
import PraktikaLogo from '../../../../Logo/index';

function SidebarContent({ updateRender }) {
	return (
		<>
			<PraktikaLogo />
			<span style={{ marginLeft: '2em', fontWeight: 'bold' }}>HR</span>
			<Menu
				mode='inline'
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '1',
						icon: <MenuFoldOutlined />,
						label: 'Dashboard',
						onClick: () => updateRender('1')
					},
					{
						key: '2',
						icon: <UserSwitchOutlined />,
						label: 'Company Profile',
						onClick: () => updateRender('2')
					},
					{
						key: '3',
						icon: <UploadOutlined />,
						label: 'Vacancies',
						onClick: () => updateRender('3')
					},
					{
						key: '4',
						icon: <UsergroupAddOutlined />,
						label: 'Candidates',
						onClick: () => updateRender('4')
					}
				]}
			/>
		</>
	);
}

export default SidebarContent;
