import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className=" footer-contents">
				<div className="left">
					<div className="f-row">
						<i class="fas fa-map-marker-alt"></i>
						<div>
							<p>Kathmandu, Nepal</p>
						</div>
					</div>
					<div className="f-row">
						<i className="fas fa-phone"></i>
						<div>
							<p>+977 9847289137</p>
						</div>
					</div>
					<div className="f-row">
						<i class="far fa-envelope"></i>
						<div>
							<p>support@phoneland.com</p>
						</div>
					</div>
				</div>
				<div className="right">
					<h3>About the Company</h3>
					<p>
						We are mobile phone reseller company based on Baneshwor,Kathmandu,
						Nepal. We sell brand new and used cell phones all around Nepal with
						our all Nepal delivery service.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
