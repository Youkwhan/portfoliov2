function Tag({ title }) {
	// console.log(title)
	return (
		<div className="skill">
			<p className={`${title[1]}`}>{title[0]}</p>
		</div>
	)
}

export default Tag
