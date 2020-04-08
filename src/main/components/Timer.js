import React, { useState, useEffect } from 'react'
import bgCloud from '../../assets/images/cloudTimer.png';

export const Timer = ( {score} ) => {

    const [preostaloVrijeme, dodajVrijeme] = useState(100)

    useEffect(() => {
        let noviInterval;
        if (preostaloVrijeme > 0) {
            noviInterval = setInterval(() => {
                dodajVrijeme(prev => prev - 1)
            }, 1000);
        } 
        return () => clearInterval(noviInterval)
    }, [preostaloVrijeme])

    const gotovaIgra = () => {
        const style = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '55%',
            height: '85%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#549181',
            border: '3px solid #5DA7BA',
            fontSize: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
        if (preostaloVrijeme === 0)
            return (<div style={style}>Vaš Finalni Score je: {score * 100} </div>)
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: '-50px',
                left: '50px',
                zIndex: '2',
                background: `url('${bgCloud}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '10px 20px',
                height: '80px',
                width: '150px',
                userSelect: 'none'
            }}
        >
            { gotovaIgra() }
            <div
                style={{
                    marginTop: '18px',
                    fontWeight: 'bold'
                }}
            >
                Preostalo Vrijeme: 
            <span
                style={{
                    fontSize: '2rem',
                    display: 'block'
                }}
            >
                { preostaloVrijeme }
                </span> 
            </div>
        </div>
    )
}