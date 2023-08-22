import "./App.scss"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Techstack from "./components/Tag/Techstack"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Nav from "./components/Nav/Nav"

import python from "./assets/python.png"
import html from "/html5-colored.svg"
import css from "/css3-colored.svg"
import sass from "/sass-colored.svg"
import javascript from "/javascript-colored.svg"
import react from "/react-colored.svg"
import firebase from "/firebase-colored.svg"
import tailwindcss from "/icons8-tailwind-css.svg"
import typescript from "/icons8-typescript.svg"
import figma from "/icons8-figma.svg"
import { useEffect } from "react"

function App() {
	useEffect(() => {
		const navLinks = document.querySelectorAll("nav ul li")
		const indicator = document.querySelector("nav .indicator")
		const profile = document.querySelector(".profile")
		const pages = document.querySelectorAll(".page")

		const navIcons = document.querySelectorAll(".nav-toggle .nav-icon")

		function handleScroll() {
			let homeBottom = pages[0].getBoundingClientRect().bottom
			let homeHeight = pages[0].offsetHeight

			if (homeBottom < homeHeight / 2) {
				profile.classList.add("active")
			} else {
				profile.classList.remove("active")
			}

			for (let i = 0; i < pages.length; i++) {
				let currentPage = pages[i]

				let pageTop = currentPage.getBoundingClientRect().top

				if (pageTop < 300) {
					navLinks.forEach((link) => {
						link.classList.remove("active")
					})

					navLinks[i].classList.add("active")

					let width = navLinks[i].offsetWidth,
						left = navLinks[i].offsetLeft

					indicator.style.width = `${width + 28}px`
					indicator.style.left = left + "px"

					navIcons.forEach((icon) => {
						icon.classList.remove("active")
					})

					navIcons[i].classList.add("active")
				}
			}
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll)
	}, [])

	return (
		<div className="App">
			<Header />
			<Nav />

			<main>
				<div className="page" id="home">
					<Home />
				</div>

				<div className="page" id="about">
					<About />
				</div>

				<div className="tech-wrapper">
					<h2 className="tech-links">Tech Stack</h2>

					<div className="techstacks">
						<Techstack logo={python} title="Python" />
						<Techstack logo={html} title="HTML" />
						<Techstack logo={css} title="CSS" />
						<Techstack logo={javascript} title="JavaScript" />
						<Techstack logo={typescript} title="TypeScript" />
						<Techstack logo={react} title="React" />
						<Techstack logo={tailwindcss} title="Tailwind Css" />
						<Techstack logo={sass} title="Sass" />
						<Techstack logo={firebase} title="Firebase" />
						<Techstack logo={figma} title="Figma" />
					</div>
				</div>

				<div className="page" id="projects">
					<Projects />
				</div>

				<div className="page" id="contact">
					<Contact />
				</div>
			</main>
		</div>
	)
}

export default App
