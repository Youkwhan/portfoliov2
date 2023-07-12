import "./Contact.scss"
import Social from "../../components/Social/Social"
import ContactForm from "../../components/Contact/ContactForm"

import { BiColor, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi"

function Contact() {
	return (
		<div className="contact">
			<h2>Contact</h2>
			<p>
				Get in touch or shoot me an email directly at <br />{" "}
				<span>Youkwhan@gmail.com</span>
			</p>
			<div className="contact-form">
				<ContactForm />
			</div>
			<footer>
				<div className="my-links">
					<a href="https://github.com/Youkwhan" target="_blank">
						<BiLogoGithub />
					</a>
					<a href="https://www.linkedin.com/in/youkwhan/" target="_blank">
						<BiLogoLinkedinSquare />
					</a>
				</div>
				<div className="footer-note">
					Designed & built by <span style={{color:"#90a0f2"}}>You Kwhan Kim</span> &#169; 2023
				</div>
			</footer>
		</div>
	)
}

export default Contact
