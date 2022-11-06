import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import Videos from './Videos';
import VideoCard from './VideoCard';
import { fetchFromAPI } from '../utilities/fetchFromAPI';

const ChannelDetail = () => {
	const { id } = useParams();
	const [chennelDetail, setChennelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	console.log(id, videos);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setChennelDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
			setVideos(data?.items)
		);
	}, [id]);

	return <div>{id}</div>;
};

export default ChannelDetail;
