function Tag({ title, key }) {
	return (
		<div key={key} className="tag">
			<h2 className="title">{title}</h2>
		</div>
	)
}

export default Tag
