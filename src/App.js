import './App.css';
import React, { useState } from 'react';
import { FloatButton } from 'antd';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import RecruiterPageLayout from './components/Views/RecruiterViews/PageLayout';
import CandidatePageLayout from './components/Views/CandidateViews/PageLayout';

function App() {
	const [token, setToken] = useState(null);
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage setToken={setToken} />} />
				<Route path='/login' element={<LoginPage setToken={setToken} />} />
				<Route
					path='/dashboard'
					element={<RecruiterPageLayout token={token} />}
				/>
				<Route
					path='/candidate'
					element={<CandidatePageLayout token={token} />}
				/>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<FloatButton.BackTop />
		</>
	);
}

export default App;
