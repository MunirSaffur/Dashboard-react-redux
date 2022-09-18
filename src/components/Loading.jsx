import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
export default function Loading() {
    return (
        <div className='loading-container'>
            <Player src='https://assets10.lottiefiles.com/packages/lf20_ht6o1bdu.json'
                className="player loading-animation"
                loop
                autoplay
                width="100px"
                height="100px" />
        </div>
    )
}
