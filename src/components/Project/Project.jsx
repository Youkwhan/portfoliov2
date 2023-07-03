import "./Project.scss"
import Tag from "../Tag/Tag"

function Project({ projectName, projectDesc, tags, img }) {
	return (
		<div className="project">
			<div className="project-details">
				<h2 className="project-name">{projectName}</h2>
				<span className="project-desc">{projectDesc}</span>
				<div className="tags">
					<h2 className="tech-stack">Technologies Used:</h2>
					<div className="tags-wrapper">
						{tags?.map((tag) => {
							return <Tag title={tag} key={projectName} />
						})}
					</div>
				</div>
			</div>
			<div className="project-image">
				{/* <img src={img} alt="project-img" /> */}
			</div>
		</div>
	)
}

export default Project
