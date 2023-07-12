import "./Project.scss"
import Tag from "../Tag/Tag"
import { BiLogoGithub, BiLink } from "react-icons/bi"

function Project({ projectName, projectDesc, tags, img, github, link }) {
	return (
		<div className="project">
			<div className="project-details">
				<h2 className="project-name">{projectName}</h2>
				<span className="project-desc">{projectDesc}</span>

				<div className="skills-section">
					<div className="skills">
						{tags?.map((tag, i) => {
							return <Tag title={tag} key={`${projectName}-${i}`} />
						})}
					</div>
				</div>
				<div className="my-links">
					<a
						href="https://github.com/Youkwhan"
						target="_blank"
						className="link"
					>
						Code
						<BiLogoGithub />
					</a>
					<a className="link">
						Live
						<BiLink />
					</a>
				</div>
			</div>

			<div className="project-image">
				<div className="img"><img src={img} alt="project-img" /></div>
			</div>
		</div>
	)
}

export default Project
