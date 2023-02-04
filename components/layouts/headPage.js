const HeadPage = ({ title, subtitle, className }) => (
	<div className={`head-page ${className}`}>
		<div className="container__head">
			<div>
				<h1>{title}</h1>
				<h3>{subtitle}</h3>
			</div>
		</div>
	</div>
)

export default HeadPage
