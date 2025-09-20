import { browser } from '$app/environment';
import type { PageLoad } from './$types';
import { COOKIE_NAME } from './shared';

export const load: PageLoad = ({ cookies, data }) => {
	const server_data = data ?? {};

	if (browser) {
		let message = '';

		try {
			cookies.get(COOKIE_NAME);
		} catch (error) {
			message = error instanceof Error ? error.message : String(error);
		}

		return {
			...server_data,
			client_cookie_error: message
		};
	}

	const cookie = cookies.get(COOKIE_NAME);

	return {
		...server_data,
		cookie,
		client_cookie_error: ''
	};
};
