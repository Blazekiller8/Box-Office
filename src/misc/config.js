const API_BASE_URL = 'https://api.tvmaze.com';
export async function apiGet(querySring) {
    const response = await fetch(`${API_BASE_URL}${querySring}`).then(r => r.json())
    return response;
}