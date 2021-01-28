import React, { useEffect, useState } from 'react';
import ReviewSection from '../assets/styles/reviewSection';
import type { Testimonial } from '../util/api';
import { getTestimonials } from '../util/api';
import { QuoEnd, QuoStart, Star, StarFill } from '../util/icons';

interface Props {
	dark: boolean;
	className: string;
}

const Testimonials = ({ className, dark }: Props) => {
	const [reviews, setReviews] = useState<Array<Testimonial>>([]);

	useEffect(() => {
		(async () => {
			const data = (await getTestimonials().catch(() => undefined)) ?? [];
			setReviews(data);
		})();
	}, []);

	return (
		<ReviewSection className={className} dark={dark ? 1 : 0}>
			<h2>Testimonials:</h2>
			<div className='row row-cols-1 row-cols-md-2 row-cols-xxl-4 align-items-start justify-content-evenly'>
				{reviews.length <= 0 && <article className='my-4'>There are no testimonials, yet.</article>}
				{reviews.length > 0 &&
					reviews.map(({ message, name, rating }) => (
						<article className='col' key={name}>
							<div className='card'>
								<div className='card-body'>
									<header className='card-title mb-3 text-center'>
										{new Array(5).fill('x').map((_, i) => {
											if (i < rating) return <StarFill dark={dark} key={i} />;
											return <Star dark={dark} key={i} />;
										})}
									</header>
									<main className='card-text text-center'>
										<QuoStart dark={dark} className='me-2' />
										{message}
										<QuoEnd dark={dark} className='ms-2' />
										<div className='text-end'> — By {name}</div>
									</main>
								</div>
							</div>
						</article>
					))}
			</div>
			<button className='btn-primary'>
				<strong>+</strong> Add Your Own
			</button>
		</ReviewSection>
	);
};

export default Testimonials;
