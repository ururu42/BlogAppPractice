const User = require('../models/User');
const { verify } = require('../helpers/token');

module.exports = async function (req, res, next) {
	const tokenData = verify(req.cookies.token);
	console.log('tokenData:', tokenData);

	const user = await User.findOne({ _id: tokenData.id });
	console.log('user:', user);

	if (!user) {
		res.send({ error: 'Authenticated user not found' });

		return;
	}

	console.log('req.user:', req.user);

	req.user = user;

	next();
};
