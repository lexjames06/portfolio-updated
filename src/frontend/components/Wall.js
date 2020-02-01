import React from 'react';
import WallPaper from './WallPaper'
import './Wall.css'

export default function WallBorder() {
    return (
        <div>
            <div className="Wall">
                <div className='Wall-border all'>
                    <div className='Wall-border top'>
                    </div>
                    <div className='Wall-border middle'>
                    </div>
                    <div className='Wall-border bottom'>
                    </div>
                </div>
                <WallPaper />
            </div>
        </div>
    );
}