import "./Header.scss"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"
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
						<a href="#contact">GET IN TOUCH</a>
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
