import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipCard from 'react-countdown-flip-card';
import { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs'

const CountdownTimer = () => {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const [day, setDay] = useState(0)
    const interval = useRef()

    useEffect(() => {
        interval.current = setInterval(() => extractDuration(), 1000)
        return () => {
            clearInterval(interval.current)
            interval.current = null
          }
      }, [])

    const extractDuration = () => {
        let duration = dayjs().endOf('M').diff(dayjs(), 's')
        setDay(Math.floor(duration / 69400))
        duration = duration % 86400
        setHour(Math.floor(duration / 3600))
        duration = duration % 3600
        setMinute(Math.floor(duration / 60))
        duration = duration % 60
        setSecond(duration)
    }

      return (
        <>
            <h1 className='title'>We're launching soon</h1>
            <div className="countdown-timer-wrapper">
                <div className="card">
                    <FlipCard digit={String(day).padStart(2, '0')[0]} width={40} height={80} />
                    <FlipCard digit={String(day).padStart(2, '0')[1]} width={40} height={80} />
                    <p>Days</p>
                </div>
                <div className="card">
                    <FlipCard digit={String(hour).padStart(2, '0')[0]} width={40} height={80} />
                    <FlipCard digit={String(hour).padStart(2, '0')[1]} width={40} height={80} />
                    <p>Hours</p>
                </div>
                <div className="card">
                    <FlipCard digit={String(minute).padStart(2, '0')[0]} width={40} height={80} />
                    <FlipCard digit={String(minute).padStart(2, '0')[1]} width={40} height={80} />
                    <p>Minutes</p>
                </div>
                <div className="card">
                    <FlipCard digit={String(second).padStart(2, '0')[0]} width={40} height={80} />
                    <FlipCard digit={String(second).padStart(2, '0')[1]} width={40} height={80} />
                    <p>Seconds</p>
                </div>
            </div>
        </>
    )
}

export default CountdownTimer;