import React, { useState } from 'react';
import './style.css';
import HeaderContent from './Header/HeaderContent';
import { Layout } from 'antd';
import EditProfile from '../EditProfile';
import ViewProfile from '../EditProfile/ViewProfile';
import JobOpportunities from '../JobOpportunities';

import SidebarContent from './Sidebar';

const { Header, Sider, Content } = Layout;

function PageLayout({ token }) {
	const [render, updateRender] = useState('1');

	const components = {
		1: <JobOpportunities token={token} updateRender={updateRender} />,
		2: <EditProfile token={token} updateRender={updateRender} />,
		3: <ViewProfile token={token} updateRender={updateRender} />
	};

	return (
		<>
			<Layout>
				<Sider collapsible={false}>
					<SidebarContent updateRender={updateRender} />
				</Sider>
				<Layout>
					<Header style={{ backgroundColor: 'white' }}>
						<HeaderContent />
					</Header>
					<Content>{components[render]}</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default PageLayout;
