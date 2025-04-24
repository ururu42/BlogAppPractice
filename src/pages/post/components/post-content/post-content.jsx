import { H2, Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			{imageUrl && <img src={imageUrl} alt={title} />}
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 7px 0 0"
						size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						margin="0 10px 0 0"
						size="22px"
						onClick={() => {}}
					/>
					<Icon
						id="fa-trash-o"
						margin="0 0 0 0"
						size="21px"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 9px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

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
	}

  & post-text {
  font-size: 18px;
  }
`;
