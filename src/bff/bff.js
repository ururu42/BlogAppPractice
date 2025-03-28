import { getUser } from './getUser';
import { addUser } from './addUser';
import { createSession } from './createSession'

export const server = {
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
			response: createSession(user.role_id),
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
			response: createSession(user.role_id),
		};
	},
};
