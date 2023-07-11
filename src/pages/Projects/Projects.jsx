import Project from "../../components/Project/Project"
import "./Projects.scss"

function Projects() {
	return (
		<div className="projects-wrapper">
			<Project
				projectName="Vanlife"
				projectDesc="Welcome to our rental website, where you can find the perfect travel van for your next road trip adventure. Whether you're looking to host your own van or discover and rent a new one, we've got you covered!"
				tags={[
					["JavaScript", "language"],
					["CSS", "language"],
					["React", "library-framework"],
					["react-router", "other"],
					["Mirage.js", "other"],
					["Firebase", "database"],
				]}
				img=""
				github=""
				link=""
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
