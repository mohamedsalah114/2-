import React from 'react'
import profPic from '../imgs/Img1.jpg'


export const LargeCard = () => {
    return (
        <div className='largeCard'>
            <img className="cardImg" src={profPic} alt="profile pic" />
            <h1 className='titleCard'>mohamed salah Hussien</h1>
        </div>

    )
}
