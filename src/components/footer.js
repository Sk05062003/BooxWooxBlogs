import React from 'react';

export default function Footer () {
    return(<>
        <footer role="contentinfo">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom"  className="container">
            <div className="row">
                <div className="col-md-3 mb-8 mb-md-0">
                    <div className="row">
                        <div className="col">
                            <h3>About BooxWoox</h3>
                            <p>We here at BooxWoox bring to you a platform to share these very books and make the most out of them.</p>
                        </div>
                    </div>

                    <div className="row pt-4">
                        <div className="col">
                            <h3>Follow Us</h3>
                            <p className="social">
                                {/* <!-- <a href="#"><span class="icofont-twitter"></span></a> --> */}
                                <a href="https://www.facebook.com/BooxWoox-111379667801326/" target="_blank" rel="noreferrer"><span className="icofont-facebook"></span></a>
                                <a href="https://www.instagram.com/invites/contact/?i=1jlpwm2kb7rl3&utm_content=lwci6ch" target="_blank" rel="noopener noreferrer"><span className="icofont-instagram"></span></a>
                                <a href="https://www.youtube.com/channel/UCI7Lz3so3Gg8kzxUk9IWU8Q" target="_blank" rel="noreferrer"><span className="icofont-brand-youtube"></span></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-8 mb-md-0 m-auto ">
                    <h3>Reach Us At</h3>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <strong className="d-block mb-1">Address</strong>
                            <span><a href="https://maps.app.goo.gl/da38M9VVT67jWdTTA" target="_blank" rel="noopener noreferrer">16-B Lavkush Society<br/>Behind Medilink Hospital<br/>Satellite<br/>Ahmedabad - 380015</a></span>
                        </li>
                        <li className="mb-3">
                            <strong className="d-block mb-1">Phone</strong>
                            <span><a href="tel:+91-78876-36763" data-tracking-element-type="3" jslog="56037; track:impression,click" itemprop="telephone" dir="ltr">+91 78876 36763</a></span>
                        </li>
                        <li className="mb-3">
                            <strong className="d-block mb-1">Email</strong>
                            <span><a href="mailto:booxwoox@gmail.com">booxwoox@gmail.com</a></span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 ml-auto">
                    <div className="row site-section pt-0">
                        <div className="col-12 mb-4 mb-md-0">
                            <h3> Quick Nav</h3>
                            <ul className="list-unstyled">
                                <li><a href="#hero">Home</a></li>
                                <li><a href="#AboutUS">About Us</a></li>
                                <li><a href="#Features">Features</a></li>
                                <li><a href="#hero">Blog</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            

            <div className="row justify-content-center text-center" style={{width:100+'%'}}>
                <div className="col-md-7">
                    <div className="credits">
                        <a href="privacypolicy.html "><i className="icofont-paper"></i>Privacy Policy  </a><a href="tnc.html"><i className="icofont-paper"></i>Terms and Conditions</a>
                    </div>
                </div>
                <div className="col-md-7">
                    <p className="copyright">&copy; Copyright BooxWoox. All Rights Reserved</p>
                    <div className="credits">
                        Designed by <a href="index.html">BooxWoox</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
    </>
    )
}