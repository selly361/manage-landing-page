function AboutSection() {
	return (
		<section className="about-section">
			<article className="about-section__article">
				<h1 className="about-section__article__title">
					Bring everyone together to build better products.
				</h1>
				<p className="about-section__article__description">
					Manage makes it simple for software teams to plan day-to-day tasks
					while keeping the larger team goals in view.
				</p>
				<button className="button button--primary">Get Started</button>
			</article>
			<img
				src="images/illustration-intro.svg"
				className="about-section__image"
			/>
		</section>
	)
}

export default AboutSection
