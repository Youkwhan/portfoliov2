import "./Techstack.scss"

function Techstack({ logo, title }) {
	return (
		<div className="techstack">
			<img src={logo} alt="techstack" />
			<h2>{title}</h2>
		</div>
	)
}

export default Techstack
