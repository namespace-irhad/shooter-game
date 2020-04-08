import React from 'react';
import './Meta.css';
import metaSlika from '../../assets/images/metaSlika.png';

const Meta = (props) => {
    return (
        <div style={{
            position: 'absolute',
            top: props.pozicijaY + 'px',
            left: props.pozicijaX + 'px',
            height: props.velicina + 'px',
            width: props.velicina + 'px',
            background: `url('${metaSlika}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: '1',
        }}
        className='meta-main'
        onClick={() => props.metaKliknutaHandler(props.id_mete)}
        >

        </div>
    )
}

export default Meta;