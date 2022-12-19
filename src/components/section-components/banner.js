import React, { Component } from 'react';

class Banner extends Component {

	render() {

		return <div><div className="banner-area viaje-go-top">
			<div className="banner-slider">
				<div className="banner-slider-item banner-bg-1">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Awesome Experience</p>
											<h2 className="banner-title s-animate-2">City Tour</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
									<div className="col-lg-12 banner-tour-package">
										<div className="row">
											<div className="col-sm-4 s-animate-3">
												<div className="tp-price-meta">
													<h2>Explore the lively spirit of the city</h2>
													<p className="tp-price-meta-details">@excellence</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-slider-item banner-bg-4">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Awesome Experience</p>
											<h2 className="banner-title s-animate-2">Golfing Tour</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
									<div className="col-lg-12 banner-tour-package">
										<div className="row">
											<div className="col-sm-4 s-animate-3">
												<div className="tp-price-meta">
													<h2>Participate in Professional Golf events</h2>
													<p className="tp-price-meta-details">@excellence</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-slider-item banner-bg-2">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Awesome Experience</p>
											<h2 className="banner-title s-animate-2">Safari Tour</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
									<div className="col-lg-12 banner-tour-package">
										<div className="row">
											<div className="col-sm-4 s-animate-3">
												<div className="tp-price-meta">
													<h2>Experience one of Africa greatest widelife</h2>
													<p className="tp-price-meta-details">@excellence</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-slider-item banner-bg-3">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
								<div className="row">
									<div className="col-lg-9 col-sm-8">
										<div className="banner-inner">
											<p className="banner-cat s-animate-1">Awesome Experience</p>
											<h2 className="banner-title s-animate-2">Diving Experience</h2>
										</div>
									</div>
									<div className="col-lg-3 col-sm-4">
										<div className="video-popup-btn s-animate-video">
											<a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
										</div>
									</div>
									<div className="col-lg-12 banner-tour-package">
										<div className="row">
											<div className="col-sm-4 s-animate-3">
												<div className="tp-price-meta">
													<h2>Experience great diving scenery</h2>
													<p className="tp-price-meta-details">@excellence</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div><div className="banner-social-meta">
				<div className="banner-slider-dots" />
				<ul className="social-icon">
					<li>
						<a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook" /></a>
					</li>
					<li>
						<a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter" /></a>
					</li>
					<li>
						<a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
					</li>
				</ul>
			</div><div className="container">
				<div className="banner-slider-controls">
					<div className="slider-nav tp-control-nav" />
					{/*slider-nav*/}
					<div className="tp-slider-extra slider-extra">
						<div className="text">
							<span className="first">01</span>
							<span className="devider">/</span>
							<span className="last" />
						</div>
					</div>
					{/*slider-extra*/}
				</div>
			</div>
		</div>
	}
}

export default Banner
