import "./Home.scss"
import profile from "../../assets/profile.jpg"
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"

function Home() {
	return (
		<div className="home">
			<div className="details">
				<span className="intro">👋 Hi, my name is</span>
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
				<div className="my-links">
					<BiLogoLinkedinSquare />
					<BiLogoGithub />
					<AiOutlineMail />
					<BsFillFileEarmarkPersonFill />
				</div>
			</div>
			<div className="profile-img">
				<img src={profile} alt="profile" />
			</div>
		</div>
	)
}

export default Home
