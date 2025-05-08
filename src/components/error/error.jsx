import { H2 } from '../H2/H2';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
`;

export const Error = ({ error }) => {
	return (
		<>
			{error && (
				<Div>
					<H2>Ошибка</H2>
					<div>{error}</div>
				</Div>
			)}
		</>
	);
};
