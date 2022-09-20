import React from 'react';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import Header from './Header';

const {REACT_APP_API_KEY} = process.env

const Photos = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}`
    const [ photos, setPhotos ] = useState([])
    const getPhoto = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setPhotos(data)
    }
    useEffect(() => {
        getPhoto()
    }, []);

    if (!photos) return <div />

    return (
        <>
        <Header />
        <Nav />
            <div className='nasa-photo'>
                <img src={photos.url} alt={photos.title} className='photo' />
                <div>
                    <h2>{photos.title}</h2>
                    <p className='date'>{photos.date}</p>
                    <p>Copyright: {photos.copyright}</p>
                    <p className='explanation'>{photos.explanation}</p>
                </div>
            </div>
        </>
    )
}

export default Photos