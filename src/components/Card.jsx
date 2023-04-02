import React from 'react'
import icon from '../imgs/payment.png';

function Card({cardIcon, cardTitle, cardItems, cardItemsTwo, sectionOneLabel, sectionTwoLabel }) {
  return (
    <div className='card'>
        <div className='card-header'>
            <div className='card-icon'>
                <img src={cardIcon} alt='Icon' />
            </div>

            <span className='card-title'>{cardTitle}</span>
        </div>
        <div className='card-body'>
            <ul className='card-list'>
                {sectionOneLabel && <div style={{marginTop:"-20px"}} className='section-label'>{sectionOneLabel}</div>}
                
                {
                    cardItems.map(item=>{
                        return(
                            <li key={item.text}>
                                <div className='list-item-icon'><img src={item.icon} alt='Icon'/></div>
                                <span className='list-item-text'>{item.text}</span>
                            </li>
                        )
                    })
                }
                {sectionTwoLabel && <div style={{marginTop:'20px'}} className="section-label">{sectionTwoLabel}</div>}
                {
                    cardItemsTwo?.map(item=>{
                        return(
                            <li key={item.text}>
                                <div className='list-item-icon'><img src={item.icon} alt='Icon'/></div>
                                <span className='list-item-text'>{item.text}</span>
                            </li>
                        )
                    })}
                
            </ul>
        </div>
        
    </div>
  )
}

export default Card