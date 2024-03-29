import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/search/${searchTerm}`);

			setSearchTerm('');
		}
	};

	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			sx={{
				borderRadius: 20,
				border: '1px solid #e3e3e3',
				pl: 2,
				boxShadow: 'none',
				mr: { xs: 0, sm: 5 },
				width: { xs: '100%', sm: 'auto' },
				display: 'flex',
				flexDirection: { xs: 'column', sm: 'row' },
				alignItems: 'center',
			}}
		>
			<input
				type="text"
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				sx={{
					mb: { xs: 2, sm: 0 },
					width: { xs: '100%', sm: 'auto' },
					marginRight: { sm: 2 },
				}}
			/>
			<IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
