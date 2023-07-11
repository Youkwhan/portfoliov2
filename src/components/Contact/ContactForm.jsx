import { useForm } from "react-hook-form"

function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data) => {
		const { name, email, subject, message } = data

		console.log("Name: ", name)
		console.log("Email: ", email)
		console.log("Subject: ", subject)
		console.log("Message: ", message)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<div className="form-control">
				<input
					type="text"
					placeholder="Your name"
					name="name"
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
	)
}

export default ContactForm
