import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: 1,
        title: "Breaking: Major Earthquake Strikes Coastal Region"
    },
    {
        id: 2,
        title: "Global Markets Fall Amid Economic Uncertainty"
    },
    {
        id: 3,
        title: "New Technology Revolutionizes Renewable Energy"
    },
    {
        id: 4,
        title: "Government Announces Emergency Weather Alert"
    },
    {
        id: 5,
        title: "International Space Mission Successfully Launches"
    },
    {
        id: 6,
        title: "Championship Final Ends in Dramatic Victory"
    },
    {
        id: 7,
        title: "Scientists Discover Potential Cure for Rare Disease"
    },
    {
        id: 8,
        title: "Massive Fire Breaks Out in Downtown Area"
    },
    {
        id: 9,
        title: "Cybersecurity Experts Warn of New Online Threat"
    },
    {
        id: 10,
        title: "Historic Peace Agreement Signed Between Nations"
    }
];

const BreakingNews = () => {
    return (
        <div className='max-w-285 mx-auto flex bg-[#F3F3F3] p-4'>
            <button className='btn bg-[#D72050] text-lg font-medium text-white px-6 py-5'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {news.map(n => (
                    <span key={n.id} className='text-lg font-semibold text-[#403F3F] mr-12'>{n.title}</span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;