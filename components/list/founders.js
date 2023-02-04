import Link from "next/link"

const Founders = ({ name, position, path }) => {
	return (
		<Link href={path}>
			{/* <a className="team-item"> */}
			<div className="team-hover">
				<span className="team-item__title">{name}</span>
				<span className="team-item__subtitle">{position}</span>
			</div>
			{/*    </a> */}
		</Link>
	)
}

export default Founders
