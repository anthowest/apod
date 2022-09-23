import React from 'react';
import Nav from './Nav';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const {REACT_APP_API_KEY} = process.env

const PrevPhoto = () => {
    const {previousDay} = useParams()
    const next = findPrevDay(previousDay)
    const [day, setDay] = useState(previousDay)
    const [apiData, setApiData ] = useState(null)

    function findPrevDay(currentDate) {
        const splitDate = currentDate.split("-");
        let [year, month, date] = splitDate;
        year = Number(year);
        month = Number(month);
        date = Number(date);
        if (date === 1 && month === 1) {
            date = 31;
            month = 12;
            year -= 1;
        } else if (date - 1 === 0) {
            date = '31';
            month = month - 1;
        } else {
            date -= 1;
        }

        const previous = [year, month, date].join('-');
        return previous
    }

    async function updateDay() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${day}`
        const response = await fetch (url);
        const data = await response.json();
        setApiData(data)
    }
    useEffect(() => {
        setDay(previousDay)
    }, [previousDay])

    useEffect(() => {
        updateDay();
    }, [day])

    return (
        <>
        <Header />
        <Nav />
        <div>{apiData && 
            <div className='nasa-photo'>
                {apiData.media_type === 'image' ? (
                <img src={apiData.url} alt={apiData.title} className='photo' />
                ) : (
                    <div className='wrap-element'>
                    <iframe
                    className='wrapped-iframe'
                    title='space-video'
                    src={apiData.url}
                    frameBorder='0'
                    allow='encrypted-media'
                    allowFullScreen
                    />
                    </div>
                )}
                <div className='nasa-details'>
                    <h2>{apiData.title}</h2>
                    <p className='date'>{apiData.date}</p>
                    <p>{apiData.copyright}</p>
                    <p className='explanation'>{apiData.explanation}</p>
                </div>
            </div>}
        </div>
        <Link className='prev-link' to={`/previous/${next}`}>See previous day</Link>
        </>
    )
}

export default PrevPhoto