import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class DestinatioDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
              <div className="destinations-details-page mg-top--70">
                <div className="container">
                  {/* destinations-details-main-slider start */}
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div className="destinations-details-main-slider-wrap">
                        <div className="destinations-details-main-slider">
                          <div className="d-details-main-slider-item">
                            <img src={publicUrl+"assets/img/others/3.png"} alt="img" />
                          </div>
                          <div className="d-details-main-slider-item">
                            <img src={publicUrl+"assets/img/others/2.png"} alt="img" />
                          </div>
                          <div className="d-details-main-slider-item">
                            <img src={publicUrl+"assets/img/others/4.png"} alt="img" />
                          </div>
                        </div>
                        <div className="destinations-details-main-slider-controls">
                          <div className="slider-nav tp-control-nav" />
                          {/*slider-nav*/}
                          <div className="slider-extra tp-slider-extra">
                            <div className="text">
                              <span className="first">01 </span>
                              <span className="last">05</span>
                            </div>
                            {/*text*/}
                            <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                              <span className="slider__label sr-only" />
                            </div>
                          </div>
                          {/*slider-extra*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* destinations-details-main-slider End */}
                  <div className="row destinations-details-location-name">
                    <div className="col-lg-12">
                      <h3>Africa</h3>
                      <p>Continen</p>
                    </div>
                    <div className="col-lg-6">
                      <p>Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.2 billion people as of 2016, it accounts for about 16% of the world's human population</p>
                    </div>
                    <div className="col-lg-6">
                      <p>It accounts for about 16% of the world's human population. The continent is surrounded by the Mediterranean Sea to the Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands.</p>
                    </div>
                  </div>
                  {/* destinations-client-review-slider start */}
                  <h4 className="single-page-small-title">Based On Traveller Visits and Local Insights</h4>
                  <div className="destinations-client-review-slider tp-common-slider-style">
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/8.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Africa</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/9.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Thailand</h4>
                          <p className="content">Thailand is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/10.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Thailand</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/11.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">France</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-client-review-slider-item">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/12.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h4 className="title">Mexico</h4>
                          <p className="content">Africa is the world's second largest and second most-populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* destinations-client-review-slider end */}
                  {/* trip-plan start */}
                  <div className="trip-plan-area">
                    <h4 className="single-page-small-title">Plan a trip</h4>
                    <div className="row justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/6.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/7.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-trip-plan">
                          <div className="thumb single-trip-plan-left">
                            <img src={publicUrl+"assets/img/others/6.png"} alt="blog" />
                          </div>
                          <div className="single-trip-plan-right">
                            <ul className="tp-list-meta border-bt-dot">
                              <li><i className="fa fa-calendar-o" /> 8oct</li>
                              <li><i className="fa fa-clock-o" /> 4 days</li>
                              <li><i className="fa fa-star" /> 4.3</li>
                            </ul>
                            <div className="tp-price-meta tp-price-meta-cl">
                              <p>Price</p>
                              <h2>620 <small>$</small></h2>
                              <del>620<span>$</span></del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* trip-plan End */}
                  {/* location-details start */}
                  <div className="location-details">
                    <h4 className="single-page-small-title">Good To Know</h4>
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="location-details-table">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="title">Country</td>
                                <td>Africa</td>
                              </tr>
                              <tr>
                                <td className="title">Visa Requirements</td>
                                <td>Visa Requirements</td>
                              </tr>
                              <tr>
                                <td className="title">Languages Spoken</td>
                                <td>Afroasiatic languages</td>
                              </tr>
                              <tr>
                                <td className="title">Currency Used</td>
                                <td>Rant</td>
                              </tr>
                              <tr>
                                <td className="title">Ares (km2)</td>
                                <td>30.37 million km²</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="btn-wrap text-center">
                            <a className="btn btn-yellow" href><span>Pdf Download<i className="ti-download" /></span></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="location-details-map">
                        <div style={{maxWidth: '100%', listStyle: 'none', transition: 'none', overflow: 'hidden', width: '654px', height: '400px'}}><div id="display-googlemap" style={{height: '100%', width: '100%', maxWidth: '100%'}}><iframe style={{height: '100%', width: '100%', border: 0}} frameBorder={0} src="https://www.google.com/maps/embed/v1/place?q=london&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" /></div><a className="googlehtml" rel="nofollow" href="https://www.embed-map.com" id="get-mapdata">https://www.embed-map.com</a><style dangerouslySetInnerHTML={{__html: "#display-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}" }} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* location-details end */}
                  {/* location-review-area start */}
                  <div className="location-review-area">
                    <div className="row">
                      <div className="col-lg-8">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-md-6"><h4 className="single-page-small-title">Write A Review</h4></div>
                            <div className="col-md-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="ml-0">Assigned Rating</span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-md-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">comments</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <div className="col-12">
                              <a className="btn btn-blue" href="#">+ Add Photo</a>
                              <a className="btn btn-yellow float-right" href="#">Send</a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-xl-3 col-lg-4 offset-xl-1 mt-5 mt-lg-0 hidden-md">
                        <a href="#">
                          <img src={publicUrl+"assets/img/others/01.png"} alt="ads" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* location-review-area start */}
                </div>
              </div>
              <div className="destination-area pd-top-120">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/8.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/9.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-destination-grid text-center">
                        <div className="thumb">
                          <img src={publicUrl+"assets/img/destination-list/10.png"} alt="img" />
                        </div>
                        <div className="details">
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <h3 className="title">Africa</h3>
                          <p className="content">Africa is the world's second largest and second most- populous continent, being behind Asia in both categories. At about 30.3 million km² including adjacent islands, it covers 6% Earth's total surface area and 20% land area.</p>
                          <a className="btn btn-gray" href="#"><span>Explore<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
}

export default DestinatioDetails