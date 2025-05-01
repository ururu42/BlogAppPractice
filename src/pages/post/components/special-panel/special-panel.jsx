import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => (
	<div className={className}>
		<div className="published-at">
			<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" onClick={() => {}} />
			{publishedAt}
		</div>
		<div className="buttons">
			{editButton}
			<Icon id="fa-trash-o" margin="0 0 0 0" size="21px" onClick={() => {}} />
		</div>
	</div>
);

export const SpecialPanel = styled(SpecialPanelContainer)`
		display: flex;
		justify-content: space-between;
		margin: ${({ margin }) => margin};
		font-size: 18px;

	& .published-at {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
    font-
	}`;
