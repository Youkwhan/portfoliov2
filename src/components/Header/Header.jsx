import "./Header.scss"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"
import resume from "../../assets/You-Kwhan Kim.pdf"
import { useEffect } from "react"

function Header() {
	useEffect(() => {
		const navLinks = document.querySelectorAll("nav ul li")
		const indicator = document.querySelector("nav .indicator")

		function update() {
			let width = navLinks[0].offsetWidth,
				left = navLinks[0].offsetLeft

			indicator.style.width = `${width + 28}px`
			indicator.style.left = `${left}px`
		}

		update()

		navLinks.forEach((link) => {
			link.addEventListener("click", () => {
				// remove active class
				navLinks.forEach((link) => {
					link.classList.remove("active")
				})
				// set new indicator
				let width = link.offsetWidth,
					left = link.offsetLeft

				indicator.style.left = `${left}px`
				indicator.style.width = `${width + 28}px`
				// add new active link-item
				link.classList.add("active")
			})
		})
	}, [])

	return (
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
				<h1>
					YOU <i>KWHAN</i>
				</h1>
			</div>

			<nav>
				<ul>
					<div className="indicator"></div>
					<li className="active">
						<a href="#home">HOME</a>
					</li>
					<li>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<a href="#projects">PROJECTS</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
					<li>
						<a href={resume} target="_blank">
							RESUME
						</a>
					</li>
				</ul>
			</nav>

			<div className="profile">
				<img src={profile} alt="profile" />
			</div>
		</header>
	)
}

export default Header
