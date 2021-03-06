import React from 'react';
import { highlights } from '../assets/theme/constants';

interface Props {
	dark: boolean;
	className?: string;
}

const getFill = (dark: boolean) => (dark ? highlights.pink : highlights.blue);

export const FrontEnd = ({ dark }: Props) => (
	<abbr title='Front End Technologies'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={getFill(dark)}
			aria-label='Front End'
		>
			<path d='M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z'></path>
			<path transform='rotate(102.527 12 12)' d='M2.78 11H21.219V13.001H2.78z'></path>
		</svg>
	</abbr>
);

export const BackEnd = ({ dark }: Props) => (
	<abbr title='Back End Technologies'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill={getFill(dark)}
			aria-label='Back End'
		>
			<path
				fill='none'
				d='M4 15v4h16.002L20 15H4zM16 18h-2v-2h2V18zM19 18h-2v-2h2V18zM4 5v4h16.002L20 5H4zM16 8h-2V6h2V8zM19 8h-2V6h2V8z'
			></path>
			<path d='M20 3H4C2.897 3 2 3.897 2 5v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5C22 3.897 21.103 3 20 3zM4 9V5h16l.002 4H4zM20 13H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4C22 13.897 21.103 13 20 13zM4 19v-4h16l.002 4H4z'></path>
			<path d='M17 6H19V8H17zM14 6H16V8H14zM17 16H19V18H17zM14 16H16V18H14z'></path>
		</svg>
	</abbr>
);

export const QuoStart = ({ className, dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		className={className}
		fill={getFill(dark)}
		aria-label='Quote Start'
	>
		<path d='M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819L10.196 6.98c-1.37.274-2.323.813-2.833 1.604C7.05 9.071 6.947 9.591 6.925 10H9h1c.553 0 1 .447 1 1v7c0 1.103-.897 2-2 2H3c-.553 0-1-.447-1-1v-5l.003-2.919C1.994 10.97 1.804 8.34 3.691 6.292zM20 20h-6c-.553 0-1-.447-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819L21.196 6.98c-1.37.274-2.323.813-2.833 1.604C18.05 9.071 17.947 9.591 17.925 10H20h1c.553 0 1 .447 1 1v7C22 19.103 21.103 20 20 20z' />
	</svg>
);

export const QuoEnd = ({ className, dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		className={className}
		fill={getFill(dark)}
		aria-label='Quote End'
	>
		<path d='M20.309 17.708C22.196 15.66 22.006 13.03 22 13v-3V5c0-.552-.447-1-1-1h-6c-1.103 0-2 .897-2 2v7c0 .552.447 1 1 1h1 2.078c-.021.402-.123.912-.429 1.396-.508.801-1.465 1.348-2.846 1.624L13 17.18V20h1C16.783 20 18.906 19.229 20.309 17.708zM9.302 17.708c1.888-2.048 1.697-4.678 1.691-4.708v-3V5c0-.552-.447-1-1-1h-6c-1.103 0-2 .897-2 2v7c0 .552.447 1 1 1h1 2.078c-.021.402-.123.912-.429 1.396-.508.801-1.465 1.348-2.846 1.624L1.993 17.18V20h1C5.776 20 7.899 19.229 9.302 17.708z' />
	</svg>
);

export const StarFill = ({
	dark,
	mouseEnter,
	mouseLeave,
	click
}: Props & { mouseEnter?: Function; mouseLeave?: Function; click?: Function }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={getFill(dark)}
		aria-label='Filled Star'
		onMouseEnter={mouseEnter as () => {}}
		onMouseLeave={mouseLeave as () => {}}
		onClick={click as () => {}}
		className='star'
	>
		<path d='M21.947,9.179c-0.129-0.378-0.47-0.645-0.868-0.676L15.378,8.05l-2.467-5.461C12.75,2.23,12.393,2,12,2 s-0.75,0.23-0.911,0.588L8.622,8.05L2.921,8.503C2.53,8.534,2.193,8.791,2.06,9.16s-0.039,0.782,0.242,1.056l4.213,4.107 l-1.49,6.452c-0.092,0.399,0.069,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22c0.193,0,0.387-0.056,0.555-0.168L12,18.202 l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082l-1.829-6.4l4.536-4.082 C21.966,9.976,22.075,9.558,21.947,9.179z'></path>
	</svg>
);

export const Star = ({
	dark,
	mouseEnter,
	mouseLeave,
	click
}: Props & { mouseEnter?: Function; mouseLeave?: Function; click?: Function }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={getFill(dark)}
		aria-label='Empty Star'
		onMouseEnter={mouseEnter as () => {}}
		onMouseLeave={mouseLeave as () => {}}
		onClick={click as () => {}}
		className='star'
	>
		<path d='M6.516,14.323l-1.49,6.452c-0.092,0.399,0.068,0.814,0.406,1.047C5.603,21.94,5.801,22,6,22 c0.193,0,0.387-0.056,0.555-0.168L12,18.202l5.445,3.63c0.348,0.232,0.805,0.223,1.145-0.024c0.338-0.247,0.487-0.68,0.372-1.082 l-1.829-6.4l4.536-4.082c0.297-0.268,0.406-0.686,0.278-1.064c-0.129-0.378-0.47-0.644-0.868-0.676L15.378,8.05l-2.467-5.461 C12.75,2.23,12.393,2,12,2s-0.75,0.23-0.911,0.589L8.622,8.05L2.921,8.503C2.529,8.534,2.192,8.791,2.06,9.16 c-0.134,0.369-0.038,0.782,0.242,1.056L6.516,14.323z M9.369,9.997c0.363-0.029,0.683-0.253,0.832-0.586L12,5.43l1.799,3.981 c0.149,0.333,0.469,0.557,0.832,0.586l3.972,0.315l-3.271,2.944c-0.284,0.256-0.397,0.65-0.293,1.018l1.253,4.385l-3.736-2.491 c-0.336-0.225-0.773-0.225-1.109,0l-3.904,2.603l1.05-4.546c0.078-0.34-0.026-0.697-0.276-0.94l-3.038-2.962L9.369,9.997z'></path>
	</svg>
);

export const GitHub = ({ dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={dark ? '#ffffff' : '#181717'}
		aria-label='GitHub icon'
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z'
		></path>
	</svg>
);

export const Comment = ({ dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={getFill(dark)}
		aria-label='Comments'
	>
		<path d='M20,1.999H4c-1.103,0-2,0.897-2,2v18l4-4h14c1.103,0,2-0.897,2-2v-12C22,2.896,21.103,1.999,20,1.999z M14,12.999H7v-2h7V12.999z M17,8.999H7v-2h10V8.999z'></path>
	</svg>
);

export const Like = ({ dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={getFill(dark)}
		aria-label='Likes'
	>
		<path d='M4 21h1V8H4c-1.104 0-2 .896-2 2v9C2 20.104 2.896 21 4 21zM20 8h-7l1.122-3.368C14.554 3.337 13.59 2 12.225 2H12L7 7.438V21h11l3.912-8.596C21.937 12.291 21.976 12.114 22 12v-2C22 8.896 21.104 8 20 8z'></path>
	</svg>
);

export const User = ({ dark }: Props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={getFill(dark)}
		aria-label='User'
	>
		<path d='M19,2H5C3.896,2,3,2.896,3,4v13c0,1.104,0.896,2,2,2h4l3,3l3-3h4c1.104,0,2-0.896,2-2V4C21,2.896,20.104,2,19,2z M12,5 c1.727,0,3,1.272,3,3s-1.273,3-3,3c-1.726,0-3-1.272-3-3S10.274,5,12,5z M7.177,16c0.558-1.723,2.496-3,4.823-3 s4.266,1.277,4.823,3H7.177z'></path>
	</svg>
);
