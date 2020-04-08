import React from 'react';
import plocaBG from '../../assets/images/backgroundPloca.png';
import './index.css'


const Ploca = (props) => {
    return (
        <div
        className="ploca-main"
        style={{
            position: 'relative',
            height: '800px',
            width: '1000px',
            background: `url('${plocaBG}')`,
            backgroundSize: 'cover',
            margin: '20px auto',
            border: '3px solid #D64746'
        }}>
            { props.children }
        </div>
    )
}

export default Ploca;