import "./Header.scss"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"

function Header() {
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
