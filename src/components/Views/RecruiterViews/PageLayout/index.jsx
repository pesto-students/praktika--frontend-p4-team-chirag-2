import React, { useState } from 'react';
import './style.css';
import HeaderContent from './Header/HeaderContent';
import { Layout } from 'antd';
import DashboardContent from '../Dashboard';
import SidebarContent from './Sidebar';
import CompanyProfile from '../CompanyProfile';
import Vacancies from '../Vacancies';
import Candidates from '../Candidates';
import FinalCompanyPage from '../CompanyProfile/FinalCompanyPage';
import FinalVacancyListings from '../Vacancies/FinalVacancyListings';

const { Header, Sider, Content } = Layout;

function RecruiterPageLayout({ token }) {
	const [render, updateRender] = useState('1');

	const components = {
		1: <DashboardContent token={token} />,
		2: <CompanyProfile token={token} updateRender={updateRender} />,
		3: <Vacancies token={token} updateRender={updateRender} />,
		4: <Candidates token={token} />,
		5: <FinalCompanyPage token={token} updateRender={updateRender} />,
		6: <FinalVacancyListings token={token} updateRender={updateRender} />
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

export default RecruiterPageLayout;
