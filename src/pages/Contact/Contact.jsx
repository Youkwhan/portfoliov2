import "./Contact.scss"
import Social from "../../components/Social/Social"

import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function Contact() {
	return (
		<div className="contact">
			<h2>Contact</h2>
			<p>
				Get in touch or shoot me an email directly at <br/> <span>Youkwhan@gmail.com</span>
			</p>
			<div className="socials">
				<Social logo={github} title="GitHub" />
				<Social logo={linkedin} title="Linkedin" />
			</div>

         <footer>
            
            
         </footer>
		</div>
	)
}

export default Contact
