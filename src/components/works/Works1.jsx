import React from 'react';
import './Work.css';
import Lottie from 'lottie-react';
import target from '../../assets/target.json';
import support from '../../assets/support.json';
import planning from '../../assets/planning.json';
import updates from '../../assets/updates.json';
import strategy from '../../assets/strategy.json';
import approved from '../../assets/approved.json';
import goal from '../../assets/goal.json';
import Header from '../Header/Header';

const Works1 = () => {
    const data = [
        {
            title: 'As you join Mentor will contact you within one hour.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card',
            sl: 1,
            img: support,
        },

        {
            title:
                'Mentor will take complete information related to your preparation',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card-reverse',
            sl: 2,
            img: planning,
        },

        {
            title: 'daily plan and updates',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card',
            sl: 3,
            img: updates,
        },

        {
            title: '24*7 call+chat support',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card-reverse',
            sl: 4,
            img: strategy,
        },

        {
            title: 'test analysis help',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card',
            sl: 5,
            img: approved,
        },

        {
            title: 'material recommendation and we also provide',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card-reverse',
            sl: 6,
            img: goal,
        },

        {
            title: 'Support and motivation',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card',
            sl: 7,
            img: support,
        },

        {
            title: 'And many more',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            classname: 'work-card-reverse',
            sl: 8,
            img: planning,
        },
    ];
    return (
        <div
            className="container mt-5 pt-3 pt-md-5"
            style={{ overflowX: 'hidden' }}
        >
            <Header text1={'How'} text2={'MentorNut'} text3={'MentorShip Works'} />

            <div className="container work-card-group gap-4 mt-5 pt-3 pt-md-5 works-desktop-view">
                {data?.map((item) => (
                    <Card key={item.sl} {...item} />
                ))}
            </div>

            <div className="container work-card-group gap-4 mt-5 pt-3 pt-md-5 works-mobile-view">
                {data.map((item) => (
                    <Card2 key={item.sl} {...item} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ classname, sl, img, title, desc }) => (
    <div className={`${classname}`}>
        <div className="work-card-img">
            <Lottie animationData={img} style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="work-card-box">
            <div className="work-card-details">
                <div className="work-card-details-heading">
                    <p>{sl}</p>
                    <h2>{title}</h2>
                </div>

                <p className="work-card-details-desc">{desc}</p>
            </div>
        </div>
    </div>
);

const Card2 = ({ sl, img, title, desc }) => (
    <div>
        <div className="work-card-box">
            <div className="work-card-details">
                <div className="work-card-details-heading">
                    <p>{sl}</p>
                    <h2>{title}</h2>
                </div>
                <div className="work-card-img">
                    <Lottie
                        animationData={img}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <p className="work-card-details-desc">{desc}</p>
            </div>
        </div>
    </div>
);

export default Works1;
