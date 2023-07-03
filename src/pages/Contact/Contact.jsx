import "./Contact.scss"
import Social from "../../components/Social/Social"

import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

function Contact() {
	return (
		<div className="contact">
			<h2>Get In Touch</h2>
			<span>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, fugiat
				maxime corrupti magni quis officiis aspernatur aliquam! Dolor facere
				magnam maiores, nam, unde debitis saepe veniam blanditiis cum
				perferendis voluptatum placeat suscipit, adipisci quasi consectetur id
				velit. Modi, sapiente aspernatur fuga laborum ut error consequuntur
				debitis accusamus quis, quaerat labore?
			</span>
			<div className="socials">
				<Social logo={github} title="GitHub" />
				<Social logo={linkedin} title="Linkedin" />
			</div>

         <footer>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus labore exercitationem quis reprehenderit ut aliquam ullam corrupti vitae cum. Eum?</span>
            
         </footer>
		</div>
	)
}

export default Contact
