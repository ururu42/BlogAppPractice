export const deletePost = (id) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'DELETE',
	});
