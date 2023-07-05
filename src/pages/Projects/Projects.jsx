import Project from "../../components/Project/Project"
import "./Projects.scss"

function Projects() {
	return (
		<div className="projects-wrapper">
			<Project
				projectName="Vanlife"
				projectDesc="des"
				tags={["React", "react-router", "JavaScript", "CSS", "Firebase", "Mirage.js"]}
				img=""
			/>
			<Project
				projectName="qwe"
				projectDesc="des"
				tags={["React", "HTML"]}
				img=""
			/>
			<Project
				projectName="asdasf"
				projectDesc="des"
				tags={["React", "HTML"]}
				img=""
			/>
		</div>
	)
}

export default Projects
