import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PrivateContent, H2 } from '../../components';
import { TableRow, UserRow } from './components';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';
import { checkAccess } from '../../utils';
import { styled } from 'styled-components';
import { request } from '../../utils/request';

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const [shouldUpdateUsersList, setShouldUpdateUsersList] = useState(false);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		if ((!checkAccess([ROLE.ADMIN]), userRole)) {
			return;
		}
		Promise.all([request('/api/users'), request('/api/users/roles')]).then(
			([usersResponse, rolesResponse]) => {
				if (usersResponse.error || rolesResponse.error) {
					setErrorMessage(usersResponse.error || rolesResponse.error);
					return;
				}

				setUsers(usersResponse.data);
				setRoles(rolesResponse.data);
			},
		);
	}, [shouldUpdateUsersList, userRole]);

	const onUserRemove = (userId) => {
		if ((!checkAccess([ROLE.ADMIN]), userRole)) {
			return;
		}

		request(`/api/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUsersList(!shouldUpdateUsersList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registed-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registedAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registedAt={registedAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	width: 570px;
	font-size: 18px;
`;
