import React from 'react';
import './WallPaper.css'

export default function WallPaper() {
    let numberOfStripes = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className='WallPaper'>
            {
                numberOfStripes.map(number => (
                    <div className='stripe-pair'>
                        <div className='light-stripe'>
                        </div>
                        <div className='dark-stripe'>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}