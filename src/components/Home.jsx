const Home = () => (
	<section className="home" id="home">
		<video autoPlay loop muted playsInline className="back-video">
			<source src="public/images/video4.mp4" type="video/mp4" />
		</video>
		<div className="home-text">
			<h4>Hello</h4>
			<h1>I'm Anilraj</h1>
			<h3>Full Stack Developer</h3>
			<a href="public/Anilraj-resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
				Download Resume
			</a>
		</div>
	</section>
);

export default Home;
