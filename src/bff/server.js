import { getUser } from './getUser';
import { addUser } from './addUser';
// import { createSession } from './createSession';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		session.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				response: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				response: null,
			};
		}

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				response: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
