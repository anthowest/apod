import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Header from './Header';
import { Link } from 'react-router-dom';

const {REACT_APP_API_KEY} = process.env

function findPrevDay(currentDate) {
    const splitDate = currentDate.split(' - ');
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

const Photos = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}`
    const [ photos, setPhotos ] = useState([])
    const [ prev, setPrevious ] = useState(null)
    const getPhoto = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        setPhotos(data)
        setPrevious(findPrevDay(data.date))
    }
    useEffect(() => {
        getPhoto()
    }, []);

    if (!photos) return <div>No Photo For Today</div>

    return (
        <>
        <Header />
        <Nav />
            <div className='nasa-photo'>
                {photos.media_type === 'image' ? (
                <img src={photos.url} alt={photos.title} className='photo' />
                ) : (
                    <iframe
                    title='space-video'
                    src={photos.url}
                    frameBorder='0'
                    allow='encrypted-media'
                    allowFullScreen
                    className='photo'
                    />
                )}
                <div>
                    <h2>{photos.title}</h2>
                    <p className='date'>{photos.date}</p>
                    <p>{photos.copyright}</p>
                    <p className='explanation'>{photos.explanation}</p>
                </div>
            </div>
        {prev ? <Link className='prev-link' to={`/previous/${prev}`}>See previous day: {prev}</Link> : null }  
        </>
    )
}

export default Photos