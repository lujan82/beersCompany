const Posts = ({ title, date, prev, path, img }) => {
	return (
		<div className="blog__post">
			<div className="blog__img" style={{ background: `url(${img})` }}></div>
			<p className="blog__date">{date}</p>
			<p className="blog__title">{title}</p>
			<p className="blog__content">{prev}</p>
			<a href={path}>
				<div className="blog__read">Read more</div>
			</a>
		</div>
	)
}

export default Posts
