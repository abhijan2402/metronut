import React from 'react'
import './Footer.css'
import { logo1 } from '../../assets/'
function Footer() {
    return (
        <div className='FooterMainDIv'>
            <div className='FooterHeader'>
                <h2>IITian Mentor For Future IITIAN</h2>
                <p>1:1 personal mentorship with iitain helps you to achieve your dream IIT</p>
            </div>
            <div className='FooterBtnDiv'>
                <button className='FooterBtn1'>Enroll now</button>
                <button className='FooterBtn2'>Book a Free Demo</button>
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
                            <li>JEE Mentorship </li>
                            <li>NEET Mentorship</li>
                            <li>Career Mentorship</li>
                            <li>Get Placed</li>
                        </ul>
                    </div>
                </div>
                <div className='FooterContentDiv3'>
                    <h3>Company</h3>
                    <div className='InnerFooterList2'>
                        <ul >
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                            <li>Terms&Condition</li>
                        </ul>
                    </div>
                </div>
                <div className='FooterContentDiv4'>
                    <h3>Contact Us</h3>
                    <p>mentornut@gmail.com</p>
                    <p>834565556</p>
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
        </div>
    )
}

export default Footer