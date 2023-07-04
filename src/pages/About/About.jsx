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
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
				debitis, soluta voluptatem architecto nesciunt odio consequuntur eos, ad
				neque veniam modi blanditiis nobis rem obcaecati tenetur cum impedit
				accusamus accusantium officia earum vel quod suscipit. Velit, quibusdam.
				Velit laboriosam ducimus nostrum sequi vel veniam eligendi soluta
				exercitationem? Recusandae, ipsa numquam."
				/>
				<InfoCard
					title="Education"
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
				debitis, soluta voluptatem architecto nesciunt odio consequuntur eos, ad
				neque veniam modi blanditiis nobis rem obcaecati tenetur cum impedit
				accusamus accusantium officia earum vel quod suscipit. Velit, quibusdam.
				Velit laboriosam ducimus nostrum sequi vel veniam eligendi soluta
				exercitationem? Recusandae, ipsa numquam."
				/>
				<InfoCard
					title="Skills"
					details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
				debitis, soluta voluptatem architecto nesciunt odio consequuntur eos, ad
				neque veniam modi blanditiis nobis rem obcaecati tenetur cum impedit
				accusamus accusantium officia earum vel quod suscipit. Velit, quibusdam.
				Velit laboriosam ducimus nostrum sequi vel veniam eligendi soluta
				exercitationem? Recusandae, ipsa numquam."
				/>
			</div>
		</div>
	)
}

export default About
