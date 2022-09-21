import React from 'react';
import { useState, useEffect } from 'react';

const {REACT_APP_API_KEY} = process.env

const PrevPhoto = () => {
    let today = new Date().toISOString().slice(0, 10)
    // console.log(today)
    const [day, setDay] = useState(today)

    function findPrevDay() {
        console.log(day)
        const splitDate = day.split("-");
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
        console.log(previous)
        setDay(previous)
    }

    async function updateDay() {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&date=${day}`
        const response = await fetch (url);
        const data = await response.json();
        console.log(data)
    }
    useEffect(() => {
        updateDay();
    }, [day]);
    return (
        <>
        <button onClick={() => findPrevDay(day)}>Previous Day</button>
        {/* <a href={`/apod/${findPrevDay(day)}`}>Prev Day</a> */}
        </>
    )
}

export default PrevPhoto