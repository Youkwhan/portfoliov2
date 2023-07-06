import Project from "../../components/Project/Project"
import "./Projects.scss"

function Projects() {
	return (
		<div className="projects-wrapper">
			<Project
				projectName="Vanlife"
				projectDesc="des"
				tags={[
					["JavaScript", "language"],
					["CSS", "language"],
					["React", "library-framework"],
					["react-router", "other"],
					["Mirage.js", "other"],
					["Firebase", "database"],
				]}
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
