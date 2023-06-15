import React from 'react'
import './VideoContent.css';
import Header from '../Header/Header';
function VideoContent() {
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
                        <h3>Youtube Video By Link</h3>
                    </div>
                    <div className="VCVideoSectioninner2">
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>About MentorNut</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Our Vision</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>How it Works</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Why Mentorship</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Fee Structure</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                        <div className="VCVideoSectionPart2">
                            <div className='VideoDesc'>Refund Policy</div>
                            <div className="VideoPlay">Play</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContent