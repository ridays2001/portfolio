import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import pfp from '../assets/images/me.jpg';
import Avatar from '../assets/styles/avatar';
import HeroSection from '../assets/styles/heroSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import ListProjects from '../components/listProjects';
import Testimonials from '../components/testimonials';
import { text } from '../assets/theme/constants';

const Home = () => {
	const { dark } = useContext(ThemeContext);

	return (
		<Fragment>
			<Nav active='home' />
			<HeroSection
				dark={dark ? 1 : 0}
				className='row d-flex align-items-md-center justify-content-center mx-auto mt-2'
			>
				<div className='col-md-4 p-5 text-center'>
					<Avatar src={pfp} alt='My Profile Picture.' dark={dark ? 1 : 0} />
				</div>
				<article className='col-md-6 d-flex align-items-center' id='hero-statement'>
					Hi, I am Riday. I am a self-taught Web Developer. I strive to make effective use of my expertise to
					develop things that matter.
				</article>
			</HeroSection>

			<h2 style={{ marginTop: '10vh', color: dark ? text.darkHigh : text.lightHigh }}>My Projects:</h2>
			<ListProjects dark={dark} className='align-items-center' feat={true} />
			<div className='row justify-content-end mb-5 pe-5'>
				<button className='btn btn-primary col-6 col-md-2 col-xxl-1'>
					<Link
						to={{ pathname: '/projects' }}
						className='nope'
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						See More ↗
					</Link>
				</button>
			</div>

			<Testimonials dark={dark} className='mb-5' />
		</Fragment>
	);
};

export default Home;
