import React from 'react'
import './MatchTimer.scss'
import { useEffect, useState } from 'react'

function MatchTimer({ start }) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        if (start) {
            const timer = setInterval(() => {
                setSeconds(seconds + 1);
                if (seconds === 59) {
                    setMinutes(minutes + 1);
                }
            }, 1000);

            return () => clearInterval(timer);
        } else {
            setSeconds(0);
            setMinutes(0);
        }
    })

    return (
        <>
            <div>ĐANG TÌM TRẬN: </div>
            <div className='time-number'><i className="fa-solid fa-clock"></i> {minutes} : {seconds}</div>
        </>
    )
}

export default MatchTimer