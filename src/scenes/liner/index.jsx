import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import LinerChart from '../../components/LinerChart';

const Liner = () => {
	return (
		<Box m="20px">
			<Header title="Liner Charts" subtitle="Simple Liner Charts" />

			<Box height="75vh">
				<LinerChart />
			</Box>
		</Box>
	);
};

export default Liner;