import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = () => {
		toast("Form sent!", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: "submit-feedback success",
			toastId: "notifyToast",
		})
	}

	// Function called on submit that uses emailjs to send email of valid contact form
	const onSubmit = async (data) => {
		const { name, email, subject, message } = data

		try {
			const templateParams = {
				name,
				email,
				subject,
				message,
			}
			await emailjs.send(serviceId, templateId, templateParams, publicKey)
			reset()
			toastifySuccess()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-control">
					<input
						type="text"
						placeholder="Your name"
						name="name"
						className="form-input"
						{...register("name", {
							required: { value: true, message: "Please enter your name" },
							maxLength: {
								value: 30,
								message: "Please use 30 characters or less",
							},
						})}
					/>
					{errors.name && (
						<span className="errorMessage">{errors.name.message}</span>
					)}
				</div>

				<div className="form-control">
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="form-input"
						{...register("email", {
							required: true,
							pattern:
								/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
					/>
					{errors.email && (
						<span className="errorMessage">
							Please enter a valid email address
						</span>
					)}
				</div>

				<div className="form-control">
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						className="form-input"
						{...register("subject", {
							required: { value: true, message: "Please enter a subject" },
							maxLength: {
								value: 75,
								message: "Subject cannot exceed 75 characters",
							},
						})}
					/>
					{errors.subject && (
						<span className="errorMessage">{errors.subject.message}</span>
					)}
				</div>

				<div className="form-control">
					<textarea
						placeholder="Your message"
						name="message"
						className="form-input"
						rows={3}
						{...register("message", {
							required: true,
						})}
					/>
					{errors.message && (
						<span className="errorMessage">Please enter a message</span>
					)}
				</div>
				<div className="form-control">
					<button className="submit-btn" type="submit">
						Send a message
					</button>
				</div>
			</form>
			<ToastContainer />
		</>
	)
}

export default ContactForm
