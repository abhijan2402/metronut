import React from 'react'
import './VideoContent.css';
function VideoContent() {
    return (
        <div clasName="VCMainDiv">
            <div className='VCInnerdiv'>
                <div className='TitleVC'>
                    <h1>Understand in</h1>
                    <h1 className="VCH1s"> Better</h1>
                    <h1> Way</h1>
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