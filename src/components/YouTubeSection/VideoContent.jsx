import React, { useState } from 'react'
import './VideoContent.css';
import Header from '../Header/Header';
function VideoContent() {
    const [vlink, setvlink] = useState("")

    return (
        <div className="VCMainDiv">
            <div className='VCInnerdiv'>
                <div className='TitleVC'>
                    <Header text1={'Understand in'} text2={'Better'} text3={'Way'} />
                </div>
                <div className='TitleVC'>
                    <h3>Video Explaination</h3>
                </div>
                <div className="VCVideoSection">
                    <div className="VCVideoSectioninner1">
                        <iframe width="100%" height="100%"
                            src={"https://www.youtube.com/embed/tgbNymZ7vqY"}>
                            {/* src={vlink} */}
                        </iframe>
                    </div>
                    <div className="VCVideoSectioninner2">
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>About MentorNut</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Our Vision</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>How it Works</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Why Mentorship</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Fee Structure</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Refund Policy</div>
                            <div className="VideoPlay" onClick={() => { setvlink("https://www.youtube.com/watch?v=u5pXggzR-8g&list=PL8ybQ2BPEGwR5iPA22NShhbpFs5oL9jsl") }}>Play</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContent