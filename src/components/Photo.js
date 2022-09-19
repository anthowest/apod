import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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

    return (
        <>
            <div>
                <h2>{photos.title}</h2>
                <img src={photos.url} alt={photos.title} />
                <p>Date: {photos.date}</p>
                <p>Copyright: {photos.copyright}</p>
                <p>{photos.explanation}</p>
            </div>
        </>
    )
}

export default Photos