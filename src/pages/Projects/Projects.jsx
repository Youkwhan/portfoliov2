import Project from "../../components/Project/Project"
import "./Projects.scss"
import quizzicalVideo from "../../assets/projects/quizzical.mp4"
import watchlistVideo from "../../assets/projects/movie-watchlist.mp4"
import notesVideo from "../../assets/projects/notes-app.mp4"

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
				github="https://github.com/Youkwhan/vanlife"
				link="https://boisterous-gumption-10ba88.netlify.app/"
			/>
			<Project
				projectName="Quizzical"
				projectDesc="Quizzical is the ultimate online trivia quiz designed to test your knowledge across a variety of categories. With Quizzical, players can engage in a fun and challenging experience, answering 5 random questions at a time."
				tags={[
					["JavaScript", "language"],
					["CSS", "language"],
					["React", "library-framework"],
					["Figma", "other"],
				]}
				img={quizzicalVideo}
				github="https://github.com/Youkwhan/quizzical"
				link="https://harmonious-begonia-821825.netlify.app/"
			/>
			<Project
				projectName="Notes App"
				projectDesc="The Notes App aims to provide users with a convenient and feature-rich markdown editor for creating and organizing their notes. The app allows users to write and format their notes using markdown syntax and provides a live preview of the rendered content."
				tags={[
					["CSS", "language"],
					["React", "library-framework"],
					["Firebase", "database"],
				]}
				img={notesVideo}
				github="https://github.com/Youkwhan/notes-app"
				link="https://meek-malabi-f59af4.netlify.app/"
			/>
			<Project
				projectName="Movie Watchlist"
				projectDesc="Movie Watchlist is a website that allows users to keep track and add movies, TV shows, and more to their own personalized watchlist and remove them as you finish. It uses the Open Movie Database (OMDb) API to search movie data by title, name, or id."
				tags={[
					["JavaScript", "language"],
					["CSS", "language"],
					["React", "library-framework"],
					["REST API", "other"],
					["Figma", "other"],
				]}
				img={watchlistVideo}
				github="https://github.com/Youkwhan/watchlist"
				link="https://watchlist-bookmark.netlify.app/"
			/>
		</div>
	)
}

export default Projects
