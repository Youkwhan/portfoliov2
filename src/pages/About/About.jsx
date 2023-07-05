import "./About.scss"
import InfoCard from "../../components/InfoCard/InfoCard"

function About() {
	return (
		<div className="about">
			<div className="name">
				<div>
					<h1 className="txt">
						AB
						<span id="break">OU</span>
					</h1>
				</div>
				<h2 className="txt lg">T</h2>

				<div className="me">ME</div>
			</div>

			<div className="info">
				<InfoCard
					title="About Me"
					details="Hi! My name is You-Kwhan Kim and I'm a Software Developer currently based in New York, with a passion for building beautiful and functional websites."
				/>
				<InfoCard
					details="Seeking a role that would allow me to blend practicality with visual creativity, 
					I realized that the finance industry wasn't the right fit for me.
					That's when I started my self-taught coding journey, diving into resources like
					FreeCodeCamp, Scrimba and Udemy."
				/>

				<InfoCard
					title="Skills"
					details="I have experience working with a variety of technology, including JavaScript, React, and more to create awesome web applications. With experience in front-end development, I find working on the logical side of things to be particularly rewarding. I'm open to new challenges and aim to continuously learn and grow in my career."
				/>
				<InfoCard details="Thank you taking the time to review my portfolio. I look forward to discussing any opportunities that may be a good fit." />
			</div>
		</div>
	)
}

export default About
