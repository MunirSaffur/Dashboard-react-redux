
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function CompaignsCard({ cardData }) {
  return (
    <div className='compaign-card item'>
      <div className='w-50 card-img'>
        <img src={cardData.img} />
      </div>
      <div className='card-body ps-2'>
        <h4 className='mb-2'>{cardData.title}</h4>
        <p >{cardData.body}</p>
      </div>
      <ChevronRightIcon className='card-icon'/>
    </div>
  )
}
