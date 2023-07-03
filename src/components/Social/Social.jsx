import "./Social.scss"

function Social({ logo, title }) {
	return (
		<div className="social">
			<img src={logo} alt="social" />
			<h2>{title}</h2>
		</div>
	)
}

export default Social
