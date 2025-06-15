module.exports = function mapComment(comment) {
	return {
		content: comment.content,
		author: comment.author.login,
		id: comment.id,
		publishedAt: comment.createdAt,
	};
};
