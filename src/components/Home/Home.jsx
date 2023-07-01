import "./Home.scss"

function Home() {
	return (
		<div className="home">
			<div className="details">
				<span className="intro">Hello, I'm</span>
				<div className="name">
					<div>
						<h1 className="txt">
							YOU- <br />
							<span className="txt sm">KWHAN</span>
						</h1>
					</div>
					<div className="developer">
						FRONT-END <b>DEVELOPER</b>
					</div>
				</div>
			</div>
			<div className="profile-img"></div>
		</div>
	)
}

export default Home
