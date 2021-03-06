import styled from 'styled-components';
import { colors, devices, shadows } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const Avatar = styled.img<Props>`
	border-radius: 50%;
	width: 75%;
	border: solid 7.5px ${({ dark }) => (dark ? colors.pink : colors.azure)};
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};

	animation-name: floating;
	animation-duration: 3.5s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;

	${devices.lg} {
		width: 60%;
	}

	@media screen and (max-height: 590px) {
		width: 100%;
		border: solid 4.5px ${({ dark }) => (dark ? colors.pink : colors.azure)};
	}

	/* Different animation lengths for different devices. */

	@keyframes floating {
		from {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		to {
			transform: translateY(0);
		}
	}

	${devices.sm} {
		@keyframes floating {
			from {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-25px);
			}
			to {
				transform: translateY(0);
			}
		}
	}

	${devices.md} {
		@keyframes floating {
			from {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-40px);
			}
			to {
				transform: translateY(0);
			}
		}
	}

	${devices.lg} {
		@keyframes floating {
			from {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-50px);
			}
			to {
				transform: translateY(0);
			}
		}
	}

	${devices.xl} {
		@keyframes floating {
			from {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-65px);
			}
			to {
				transform: translateY(0);
			}
		}
	}
`;

export default Avatar;
