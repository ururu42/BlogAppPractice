export function request(url, method, data) {
	return fetch(url, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : null,
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject(`Ошибка: ${response.status}`);
		}
	});
}
