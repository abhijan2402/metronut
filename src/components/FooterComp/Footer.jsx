import React, { useState } from 'react'
import './Footer.css'
import { logo1 } from '../../assets/'
import Form from '../formModal/Form'
import { Link } from 'react-router-dom'
function Footer() {
    const [FormActive, setFormActive] = useState(false)
    return (
        <>
            {FormActive ?
                <Form state={() => { setFormActive(false) }} /> : null

            }
            <div className='FooterMainDIv'>
                <div className='FooterHeader'>
                    <h2>IITian Mentor For Future IITIAN</h2>
                    <p>1:1 personal mentorship with iitain helps you to achieve your dream IIT</p>
                </div>
                <div className='FooterBtnDiv'>
                    <button className='FooterBtn1' onClick={() => { window.scrollTo(0, 300); }}> <Link className="FooterBtn12" to={'/metronut/enroll'}>Enroll now</Link></button>
                    <button className='FooterBtn2' onClick={() => { setFormActive(true); window.scrollTo(0, 300); }}>Book a Free Demo</button>
                </div>
                <div className='FooterContentDiv'>
                    <div className='FooterContentDiv1'>
                        {/* <div> */}
                        <img src={logo1} className='LogoFooter' />
                        <p >MentorNut, Powered by
                            mentors from IIT Bombay,
                            we are here for long term to
                            Organic Mentorship World
                        </p>
                        {/* </div> */}
                    </div>
                    <div className='FooterContentDiv2'>
                        <h3>Quick Links</h3>
                        <div className='InnerFooterList2'>
                            <ul className='UlFooter'>
                                <li><a style={{ color: 'white' }} href="" target='blank'>JEE Mentorship</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>NEET Mentorship</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>Career Mentorship</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>Get Placed</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='FooterContentDiv3'>
                        <h3>Company</h3>
                        <div className='InnerFooterList2'>
                            <ul>
                                <li><a style={{ color: 'white' }} href="" target='blank'>About us</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>Contact us</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>Privacy Policy</a></li>
                                <li><a style={{ color: 'white' }} href="" target='blank'>Terms &Condition</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='FooterContentDiv4'>
                        <h3>Contact Us</h3>
                        <div className='FooterDivContact'>
                            <p><a style={{ color: 'white' }} href="" target='blank'>mentornut@gmail.com</a></p>
                            <p><a style={{ color: 'white' }} href="" target='blank'>834565556</a></p>
                        </div>
                        <div className='FooterSocialMedia'>
                            <div className='OuterDivImageLogos'>
                                <a href="#" target="window">
                                    <img src='https://cdn-icons-png.flaticon.com/128/20/20837.png' alt='' className='ImageSociaLogos' />
                                </a>
                            </div>
                            <div className='OuterDivImageLogos'>
                                <a href="#">
                                    <img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' alt='' className='ImageSociaLogos' />
                                </a>
                            </div>
                            <div className='OuterDivImageLogos'>
                                <a href="#">
                                    <img src='https://cdn-icons-png.flaticon.com/128/1384/1384028.png' alt='' className='ImageSociaLogos' />
                                </a>
                            </div>
                            <div className='OuterDivImageLogos'>
                                <a href="#">
                                    <img src='https://cdn-icons-png.flaticon.com/128/61/61109.png' alt='' className='ImageSociaLogos' />
                                </a>
                            </div>
                            <div className='OuterDivImageLogos'>
                                <a href="#">
                                    <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' alt='' className='ImageSociaLogos' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='FooterBottom'>
                    <div>
                        <p>@2023 <span style={{ color: "orange", fontWeight: "600" }}>mentornut</span> All Rights Reserved.</p>
                    </div>
                    <div className='GoogleImgDiv'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" className='GooglePLayImage' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer