import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';

function HeaderSearch() {
	const [showSearch, setShowSearch] = useState(false);

	const toggleShowSearch = () => {
		setShowSearch(!showSearch);
	};

	const SearchInput = (props) => {
		const [data, setData] = useState([]);
		const [value, setValue] = useState();
		const handleSearch = (newValue) => {
			if (newValue) {
				fetch(newValue, setData);
			} else {
				setData([]);
			}
		};
		const handleChange = (newValue) => {
			setValue(newValue);
		};
		return (
			<Select
				showSearch
				value={value}
				placeholder={props.placeholder}
				style={props.style}
				defaultActiveFirstOption={false}
				showArrow={false}
				filterOption={false}
				onSearch={handleSearch}
				onChange={handleChange}
				notFoundContent={null}
				options={(data || []).map((d) => ({
					value: d.value,
					label: d.text
				}))}
			/>
		);
	};
	return (
		<>
			{showSearch ? (
				<SearchInput
					placeholder='input search text'
					style={{
						width: '200px',
						position: 'absolute',
						top: '2em',
						right: '10em'
					}}
				/>
			) : (
				''
			)}
			<div>
				<SearchOutlined
					style={{ fontSize: '2em', marginTop: '1em' }}
					onClick={toggleShowSearch}
				/>
			</div>
		</>
	);
}

export default HeaderSearch;
