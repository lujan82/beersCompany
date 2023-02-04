import React from "react"

const ExternalLinks = () => {
	return (
		<div className="nav__external-links">
			<div className="nav__external-links-item">
				<a
					href="https://www.linkedin.com/in/carlos-lujan-benita/"
					target="_blank"
					rel="noreferrer"
				>
					<img src="/images/icon-linkedin.svg" alt="" />
				</a>
			</div>

			<div className="nav__external-links-item">
				<a href="https://valencia-web.com" target="_blank" rel="noreferrer">
					<img src="/images/icon-heart.svg" alt="" />
				</a>
			</div>

			<div className="nav__external-links-item">
				<a href="mailto:example@email.com" target="_blank" rel="noreferrer">
					<img src="/images/icon-contact.svg" alt="" />
				</a>
			</div>
		</div>
	)
}

export default ExternalLinks
