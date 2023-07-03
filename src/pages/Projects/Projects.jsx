import Project from "../../components/Project/Project"
import "./Projects.scss"

function Projects() {
	return (
		<div className="projects-wrapper">
			<Project
				projectName="sad"
				projectDesc="des"
				tags={["React", "HTML"]}
				img=""
			/>
			<Project
				projectName="sad"
				projectDesc="des"
				tags={["React", "HTML"]}
				img=""
			/>
			<Project
				projectName="sad"
				projectDesc="des"
				tags={["React", "HTML"]}
				img=""
			/>
		</div>
	)
}

export default Projects
