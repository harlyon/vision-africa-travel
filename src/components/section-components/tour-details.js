import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TourDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="tour-details-area mg-top--70">
              <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                  <div className="container">
                    <div className="gallery-filter-area row">
                      <div className="gallery-sizer col-1" />
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-5 col-sm-6 mb-10">
                        <div className="tp-gallery-item-img">
                          <div className="thumbnails">
                            <img src={publicUrl+"assets/img/tour-details/1.png"} alt="image" />
                            <div className="video-popup-btn">
                              <a href="https://www.youtube.com/watch?v=c7XEhXZ_rsk" className="video-play-btn mfp-iframe" tabIndex={0}><i className="fa fa-play" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-md-3 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/2.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/3.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/4.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/5.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                      {/* gallery-item */}
                      <div className="tp-gallery-item col-lg-2 col-md-4 col-sm-6">
                        <div className="tp-gallery-item-img">
                          <a href="#" data-effect="mfp-zoom-in">
                            <img src={publicUrl+"assets/img/tour-details/6.png"} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4">
                        <div className="details">
                          <p className="location mb-0"><i className="fa fa-map-marker" />Canada</p>
                          <h4 className="title">Bali Province</h4>
                          <p className="content">3 days 2 person</p>
                          <div className="tp-review-meta">
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="ic-yellow fa fa-star" />
                            <i className="fa fa-star" />
                            <span>4.0</span>
                          </div>
                          <div className="all-tags">
                            <a href="#">Adventures</a>
                            <a href="#">Local special ties</a>
                            <a href="#">Natural</a>
                            <a href="#">Travel</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        <div className="book-list-warp">
                          <p className="book-list-content">Just booked! Get your spot before it's too late.</p>
                          <div className="tp-price-meta">
                            <p>Price</p>
                            <h2>775 <small>$</small></h2>
                          </div>
                        </div>
                        <ul className="tp-list-meta border-tp-solid">
                          <li className="ml-0"><i className="fa fa-calendar-o" /> 8 Oct</li>
                          <li><i className="fa fa-clock-o" /> 4 Days</li>
                          <li><i className="fa fa-users" />2 Person</li>
                          <li><i className="fa fa-snowflake-o" /> Relaxing</li>
                          <li><i className="fa fa-star" /> 4.3</li>
                        </ul>
                      </div>   
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tour-details-wrap">
                      <h4 className="single-page-small-title">Write A Review</h4>
                      <p>From its distinct half-hour time zone to its occasional June snowshower, Newfoundland runs on its own time. By August, the summer crowds have dwindled, berries hang ripe and heavy on their stems, and the landscape is ablaze with wildflowers. Join us at the peak of Newfoundland’s late summer season as we wind our way through the famously Celtic stretch of coastline known as the Irish Loop, exploring its unique history, folklore, cuisine, and breathtaking seaside scenery. We’ll enjoy dinners made from freshly foraged ingredients on a quiet dock, chat with a boat-builder in the midst of making a vessel, and learn how to craft heritage cheese from local experts while surrounded by an adorable, bleating tribe of tiny baby goats. As we make our way along the Loop, we’ll encounter countless characters, places, and stories that give this corner of the island its charm, tenacity, and unique flair.</p>
                      <p> This trip is offered by Atlas Obscura. Once you've reserved your spot, our team will be in touch to help you prepare for the trip. Please note that flights to and from St. John's are not included in the trip cost. This trip is limited by 12 travelers.</p>
                      <div className="package-included-area">
                        <h4 className="single-page-small-title">Included</h4>
                        <div className="row">
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/15.png"} alt="icons" />
                              <h6>Food</h6>
                              <p>3 breakfasts, 3 dinners</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/16.png"} alt="icons" />
                              <h6>Accommodations</h6>
                              <p>3 nights in a hotel</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/17.png"} alt="icons" />
                              <h6>Transportation</h6>
                              <p>2 boat rides, 1 car ride</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/18.png"} alt="icons" />
                              <h6>Drinks</h6>
                              <p>Water, tea, coffee, beer</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/19.png"} alt="icons" />
                              <h6>Tickets</h6>
                              <p>Entrance fee</p>
                            </div>
                          </div>
                          <div className="col-xl-4 col-sm-6">
                            <div className="single-package-included">
                              <img src={publicUrl+"assets/img/icons/20.png"} alt="icons" />
                              <h6>Equipment</h6>
                              <p>Outdoor gear, safety</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="package-included-location">
                        <h4 className="single-page-small-title">Your Itinerary</h4>
                        <div className="row">
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">1</div>
                                <p>Day 1</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/8.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Welcome to St. John's</h4>
                                <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog">
                              <div className="p-list">
                                <div className="list">2</div>
                                <p>Day 2</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/1.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Relaxation &amp; Exploration</h4>
                                <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="single-blog single-blog-after-none">
                              <div className="p-list">
                                <div className="list">3</div>
                                <p>Day 3</p>
                              </div>
                              <div className="thumb">
                                <img src={publicUrl+"assets/img/blog/9.png"} alt="blog" />
                              </div>
                              <div className="single-blog-details">
                                <h4 className="title">Farewell &amp; Departure</h4>
                                <p className="content">After a welcome drink, we'll stroll into town and get to know each other over a hyper-local “nose-to-tail” dinner. Show more</p>
                                <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="host-area">
                        <div className="single-host-wrap text-center">
                          <div className="thumb">
                            <img src={publicUrl+"assets/img/client/02.png"} alt="img" />
                          </div>
                          <h4>Mike At Atlas Obscura Trips</h4>
                          <p>I'm your Atlas Obscura Trip Coordinator. Since 2016, Atlas Obscura has been offering unusual trips to the world’s most extraordinary places. Our itineraries are developed in close collaboration with the locals and insiders who host them—our global community of explorers</p>
                          <p> Felicity Roberts will be leading your trip. A rural Newfoundlander, certified herbalist, farmer, writer, wild food advocate, and self relic, Felicity is most on the barrens cutting heather to dye wool or hanging off the edge</p>
                          <a className="btn btn-yellow" href="#">Contact Host</a>
                        </div>
                      </div>
                      <div className="service-location-map">
                        <h4 className="single-page-small-title">Service Location</h4>
                        <div className="service-location-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649788.5753409272!2d-0.5724199684037448!3d52.92186340524542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d94c3b82ab%3A0x62077a554c8e9a8e!2sPetty%20France%2C%20Westminster%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1572346566908!5m2!1sen!2sbd" />
                        </div>
                      </div>
                      <div className="comments-area tour-details-review-area">
                        <h4 className="comments-title">Reviews</h4>
                        <ul className="comment-list mb-0">
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/client/2.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Tyler Bailey</h4>
                                <span className="date">13 August 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="single-comment-wrap">
                              <div className="thumb">
                                <img src="assets/img/client/3.png" alt="img" />
                              </div>
                              <div className="content">
                                <h4 className="title">Eliza Jordan</h4>
                                <span className="date">17 SEP 2019</span>
                                <div className="tp-review-meta">
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                  <i className="ic-yellow fa fa-star" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="btn-wrapper text-right mt-3">
                          <a className="btn-read-more" href="#"><span>More Review<i className="la la-arrow-right" /></span></a>
                        </div>
                      </div>
                      <div className="location-review-area">
                        <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                          <div className="row">
                            <div className="col-lg-6"><h4 className="single-page-small-title">Write A Review</h4></div>
                            <div className="col-lg-6">
                              <div className="tp-review-meta text-lg-right">
                                <span className="mr-3 ml-0">Assigned Rating</span>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Name</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-6">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Email</span>
                                <input type="text" />
                              </label>
                            </div>
                            <div className="col-lg-12">
                              <label className="single-input-wrap">
                                <span className="single-input-title">Comments</span>
                                <textarea defaultValue={""} />
                              </label>
                            </div>
                            <div className="col-12">
                              <a className="btn btn-yellow" href="#">Send</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sidebar-area sidebar-area-4">
                      <div className="widget tour-list-widget">
                        <div className="widget-tour-list-meta">
                          <div className="single-widget-search-input-title"><i className="fa fa-user" /> Name</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-envelope" /> Email</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-phone" /> Phone</div>
                          <div className="single-widget-search-input">
                            <input type="text" placeholder="Phone" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="departing-date custom-select" placeholder="Departing" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-calendar-minus-o" /> Date</div>
                          <div className="single-widget-search-input">
                            <input type="text" className="returning-date custom-select" placeholder="Returning" />
                          </div>
                          <div className="single-widget-search-input-title"><i className="fa fa-keyboard-o" /> Message</div>
                          <div className="single-widget-search-input">
                            <textarea placeholder="Type" defaultValue={""} />
                          </div>
                          <div className="text-lg-center text-left">
                            <a className="btn btn-yellow" href="#">Book Now <i className="fa fa-paper-plane" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="widget_ads">
                        <a href="#"><img className="w-100" src={publicUrl+"assets/img/others/01.png" }alt="img" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default TourDetails