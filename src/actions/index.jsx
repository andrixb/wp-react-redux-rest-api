import axios from 'axios';

export const FETCH_PAGES = 'FETCH_PAGES';

const ROOT_URL = 'http://localhost:8888/wordpress_test_env/wp-json/wp/v2';

export function fetchPages() {
    const request = axios.get(`${ROOT_URL}/pages`);

    return {
        type: FETCH_PAGES,
        payload: request
    };
}
