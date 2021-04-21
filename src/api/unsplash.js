import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID x--y8k_PgC9QSzzBpdGcoXs_dJ6bqaOBb9imE3kgDYw',
	}

});

